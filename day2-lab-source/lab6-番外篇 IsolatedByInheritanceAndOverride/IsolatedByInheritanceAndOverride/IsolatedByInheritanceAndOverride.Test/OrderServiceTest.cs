﻿using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;

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
        #endregion

        [TestMethod]
        public void Test_SyncBookOrders_3_Orders_Only_2_book_order()
        {
			var bookDao = Substitute.For<IBookDao>();
			var target = new FakeOrderService(bookDao);
			target.SetOrder(new List<Order> {
				new Order { CustomerName = "A" , ProductName="B", Price =10, Type= "Book"},
				new Order { CustomerName = "C" , ProductName="D", Price =20, Type= "Book"},
				new Order { CustomerName = "E" , ProductName="F", Price =30, Type= "Toy"}
			});

			target.SyncBookOrders();

			bookDao.Received(2);

		}
    }

	public class FakeOrderService : OrderService
	{
		private List<Order> _Orders;

		public FakeOrderService(IBookDao bookDao) : base(bookDao)
		{
		}

		public void SetOrder(List<Order> orders)
		{
			this._Orders = orders;
		}


		protected override List<Order> GetOrders()
		{
			return _Orders;
		}
	}
}
