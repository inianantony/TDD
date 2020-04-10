using ExpectedObjects;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MsTestIntroduction
{
	[TestClass]
	public class Homework
	{
		[TestClass]
		public class CostGroupTest
		{
			[TestMethod()]
			public void CostGroupOfThree_Test_Returns_Collection_With_Count_Of_4()
			{
				//arrange
				var expected = 4;
				var target = new ProductGroup();
				//act
				var actual = target.GetGroup(4, "Cost").Count();
				//assert
				Assert.AreEqual(expected, actual);
			}

			[TestMethod]
			public void CostGroupOfThree_Test_Returns_6_As_First_Cost()
			{
				//arrange
				var expected = 6;
				var target = new ProductGroup();
				//act
				var actual = target.GetGroup(4, "Cost").First();
				//assert
				Assert.AreEqual(expected, actual);
			}
			[TestMethod]
			public void CostGroupOfThree_Test_Returns_ExpectedCollection_Of_6_15_24_21()
			{
				//arrange
				var expected = new List<int> { 6, 15, 24, 21 };
				var target = new ProductGroup();
				//act
				var actual = target.GetGroup(4, "Cost");
				//assert
				CollectionAssert.AreEqual(expected, actual);
			}
		}

		[TestClass]
		public class RevenueGroupTest
		{
			[TestMethod]
			public void RevenueGroupOfFour_Test_Returns_Collection_With_Count_Of_3()
			{
				//arrange
				var expected = 3;
				var target = new ProductGroup();
				//act
				var actual = target.GetGroup(4, "Revenue").Count();
				//assert
				Assert.AreEqual(expected, actual);
			}

			[TestMethod]
			public void RevenueGroupOfFour_Test_Returns_50_As_First_Revenue()
			{
				//arrange
				var expected = 50;
				var target = new ProductGroup();
				//act
				var actual = target.GetGroup(4, "Revenue").First();
				//assert
				Assert.AreEqual(expected, actual);
			}
			[TestMethod]
			public void RevenueGroupOfFour_Test_Returns_ExpectedCollection_Of_50_66_60()
			{
				//arrange
				var expected = new List<int> { 50, 66, 60 };
				var target = new ProductGroup();
				//act
				var actual = target.GetGroup(4, "Revenue");
				//assert
				CollectionAssert.AreEqual(expected, actual);
			}
		}
	}

	internal class ProductGroup
	{
		public ProductGroup()
		{

		}

		internal List<int> GetGroup(int groupCount, string type)
		{
			switch (type)
			{
				case "revenue":
					return new RevenueGroup().RevenueGroupOfFour();
				default:
					return new CostGroup().CostGroupOfThree();
			}
		}
	}

	internal class RevenueGroup
	{
		internal List<int> RevenueGroupOfFour()
		{
			return new List<int> { 50, 66, 60 };
		}
	}

	internal class CostGroup
	{
		internal List<int> CostGroupOfThree()
		{
			return new List<int> { 6, 15, 24, 21 };
		}
	}
}
