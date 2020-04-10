﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LogisticLib;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace LogisticLib.Tests
{
    [TestClass()]
    public class HsinChuTests
    {
        [TestMethod()]
        public void CalculateFeeTest()
        {
            //arrange 
            var target = new HsinChu();
            var product = new ShippingProduct
            {
                Name = "book",
                Weight = 10,
                Size = new Size
                {
                    Length = 30,
                    Width = 20,
                    Height = 10
                },
            };

            //act
            target.CalculateFee(product);

            //assert
            var expected = 254.16;
            Assert.AreEqual(expected, product.ShippingFee);
        }
    }
}
