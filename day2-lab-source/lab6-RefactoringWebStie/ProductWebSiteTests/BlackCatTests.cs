using Microsoft.VisualStudio.TestTools.UnitTesting;
using LogisticLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LogisticLib;

namespace LogisticLib.Tests
{
	[TestClass()]
	public class BlackCatTests
	{
		[TestMethod()]
		public void CalculateFeeTest()
		{
			var target = new BlackCat();
			var product = new ShippingProduct
			{
				Name = "Book",
				Weight = 10,
				Size = new Size { Length=30,Width=20,Height=10},
			};

			var expected = 200;

			target.CalculateFee(product);

			Assert.AreEqual(expected, product.ShippingFee);
		}
	}
}