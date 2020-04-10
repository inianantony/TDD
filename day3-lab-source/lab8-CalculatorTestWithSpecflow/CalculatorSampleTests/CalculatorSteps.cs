using CalculatorSample;
using System;
using TechTalk.SpecFlow;

namespace CalculatorSampleTests
{
    [Binding]
    public class CalculatorSteps
    {
		private MyCalculator target;

		[BeforeScenario]
		public void BeforeScenario()
		{
			this.target = new MyCalculator();
		}

		[Given(@"I have first entered (.*) into the calculator")]
        public void GivenIHaveFirstEnteredIntoTheCalculator(int first)
        {
			ScenarioContext.Current.Set<int>(first, "first");
        }
        
        [Given(@"I have second entered (.*) into the calculator")]
        public void GivenIHaveSecondEnteredIntoTheCalculator(int second)
        {
			ScenarioContext.Current.Set<int>(second, "second");
		}
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
			var first = ScenarioContext.Current.Get<int>("first");
			var second = ScenarioContext.Current.Get<int>("second");
			var result = this.target.Add(first, second);

			ScenarioContext.Current.Set<int>(result, "result");
		}
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            ScenarioContext.Current.Pending();
        }
    }
}
