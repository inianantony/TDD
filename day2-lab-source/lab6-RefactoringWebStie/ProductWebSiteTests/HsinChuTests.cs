using Microsoft.VisualStudio.TestTools.UnitTesting;
using LogisticLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LogisticLib.Tests
{
	[TestClass()]
	public class HsinChuTests
	{
		[TestMethod()]
		public void CalculateFeeTest()
		{
			var target = new HsinChu();
			var product = new ShippingProduct
			{
				Name = "Book",
				Weight = 10,
				Size = new Size { Length = 30, Width = 20, Height = 10 },
			};

			var expected = 254.16;

			target.CalculateFee(product);

			Assert.AreEqual(expected, product.ShippingFee);
		}
	}
}