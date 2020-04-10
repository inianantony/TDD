using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TechTalk.SpecFlow;

namespace PartimeSalaryWithTdd.Tests
{
    [Binding]
    public class SalarySteps
    {
		private SalaryCard target;

		[BeforeScenario]
		public void BeforeScenario()
		{
			this.target = new SalaryCard();
		} 

		[Given(@"Hourly Salary is (.*)")]
        public void GivenHourlySalaryIs(int hourlySalary)
        {
			target.HourlySalary = hourlySalary;
		}

		[Given(@"First Ot ratio is (.*)")]
		public void GivenFirstOtRatioIs(double firstOtRatio)
		{
			target.FirstOverTimeRatio = firstOtRatio;
		}

		[Given(@"2nd Ot ratio is (.*)")]
		public void Given2NdOtRatioIs(int secondOtRatio)
		{
			target.SecondOverTimeRatio = secondOtRatio;
		}

		[Given(@"Checkin is ""(.*)""")]
        public void GivenCheckinIs(DateTime startTime)
        {
			target.StartTime = startTime;
		}
        
        [Given(@"CheckOut is ""(.*)""")]
        public void GivenCheckOutIs(DateTime endTime)
        {
			target.EndTime = endTime;
		}
        
        [When(@"When I calculate salary")]
        public void WhenWhenICalculateSalary()
        {
			var actual = target.CalculateSalary();
			ScenarioContext.Current.Set<double>(actual);
		}
        
        [Then(@"I should get (.*)")]
        public void ThenIShouldGet(int expected)
        {
			var actual = ScenarioContext.Current.Get<double>();
			Assert.AreEqual(expected, actual);
		}
    }
}
