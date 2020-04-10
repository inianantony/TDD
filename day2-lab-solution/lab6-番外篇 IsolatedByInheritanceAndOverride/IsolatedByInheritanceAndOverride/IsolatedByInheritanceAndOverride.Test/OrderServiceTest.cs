﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Moq.Protected;
using NSubstitute;
using System.Collections.Generic;

namespace IsolatedByInheritanceAndOverride.Test
{
    /// <summary>
    /// OrderServiceTest 的摘要描述
    /// </summary>
    [TestClass]
    public class OrderServiceTest
    {
        public OrderServiceTest()
        {
            //
            // TODO:  在此加入建構函式的程式碼
            //
        }

        private TestContext testContextInstance;

        /// <summary>
        ///取得或設定提供目前測試回合
        ///的相關資訊與功能的測試內容。
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region 其他測試屬性

        //
        // 您可以使用下列其他屬性撰寫您的測試:
        //
        // 執行該類別中第一項測試前，使用 ClassInitialize 執行程式碼
        // [ClassInitialize()]
        // public static void MyClassInitialize(TestContext testContext) { }
        //
        // 在類別中的所有測試執行後，使用 ClassCleanup 執行程式碼
        // [ClassCleanup()]
        // public static void MyClassCleanup() { }
        //
        // 在執行每一項測試之前，先使用 TestInitialize 執行程式碼
        // [TestInitialize()]
        // public void MyTestInitialize() { }
        //
        // 在執行每一項測試之後，使用 TestCleanup 執行程式碼
        // [TestCleanup()]
        // public void MyTestCleanup() { }
        //

        #endregion 其他測試屬性

        [TestMethod]
        public void Test_SyncBookOrders_3_Orders_Only_2_book_order()
        {
            // hard to isolate dependency to unit test
            var target = new StubOrderService();

            var orders = new List<Order>
            {
                new Order{ Type="Book", Price = 100, ProductName = "91's book"},
                new Order{ Type="CD", Price = 200, ProductName = "91's CD"},
                new Order{ Type="Book", Price = 300, ProductName = "POP book"},
            };

            //模擬csv內資料parse完的結果注入，當作GetOrders()的回傳內容
            target.SetOrders(orders);

            //建立mock物件，模擬與 http://api.joey.io/Order 這個 web service互動
            var mockBookDao = Substitute.For<IBookDao>();
            target.SetBookDao(mockBookDao);

            //act
            target.SyncBookOrders();

            mockBookDao.Received(2).Insert(Arg.Is<Order>(x => x.Type == "Book"));
        }

        [TestMethod]
        public void Test_SyncBookOrders_3_Orders_Only_2_book_order_With_Moq()
        {
            //arrange
            var target = new Mock<OrderService>();

            var orders = new List<Order>
            {
                new Order{ Type="Book", Price = 100, ProductName = "91's book"},
                new Order{ Type="CD", Price = 200, ProductName = "91's CD"},
                new Order{ Type="Book", Price = 300, ProductName = "POP book"},
            };

            target.Protected()
                .Setup<List<Order>>("GetOrders")
                .Returns(orders);

            //建立mock物件，模擬與 http://api.joey.io/Order 這個 web service互動
            var bookDao = new Mock<IBookDao>();

            target.Protected()
                .Setup<IBookDao>("GetBookDao")
                .Returns(bookDao.Object);

            //act
            target.Object.SyncBookOrders();

            //assertion
            bookDao.Verify(x => x.Insert(It.Is<Order>(order => order.Type == "Book")), Times.Exactly(2));
        }
    }

    internal class StubOrderService : OrderService
    {
        private List<Order> _orders = new List<Order>();
        private IBookDao _bookDao;

        // only for test project to set the return values
        internal void SetOrders(List<Order> orders)
        {
            this._orders = orders;
        }

        // return the stub values, isolated the File I/O of parsing csv file
        protected override List<Order> GetOrders()
        {
            return this._orders;
        }

        internal void SetBookDao(IBookDao bookDao)
        {
            this._bookDao = bookDao;
        }

        protected override IBookDao GetBookDao()
        {
            return this._bookDao;
        }
    }
}