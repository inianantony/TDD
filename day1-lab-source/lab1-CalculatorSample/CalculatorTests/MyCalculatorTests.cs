using Microsoft.VisualStudio.TestTools.UnitTesting;
using Calculator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.Tests
{
	[TestClass()]
	public class MyCalculatorTests
	{
		[TestMethod()]
		public void AddTest_first_10_second_5_return_15()
		{
			//arrange
			var target = new MyCalculator();
			var first = 10;
			var second = 5;
			var expected = 15;

			//act
			var actual = target.Add(first,second);

			//assert
			Assert.AreEqual(expected, actual);
		}

		[TestMethod()]
		public void AddTest_first_1_second_0_ShouldReturn_1()
		{
			//arrange
			var target = new MyCalculator();
			var first = 1;
			var second = 0;
			var expected = 1;

			//act
			var actual = target.Add(first, second);

			//assert
			Assert.AreEqual(expected, actual);

		}
	}
}