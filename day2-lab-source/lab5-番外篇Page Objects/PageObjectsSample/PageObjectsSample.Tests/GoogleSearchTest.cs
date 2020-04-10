using System;
using FluentAutomation;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PageObjectsSample.Tests
{
    [TestClass]
    public class GoogleSearchTest : FluentTest
    {
		public GoogleSearchTest()
		{
			SeleniumWebDriver.Bootstrap
				(SeleniumWebDriver.Browser.Chrome
				);

		}

		[TestMethod]
        public void Test_輸入關鍵字_skilltree_進行搜尋_搜尋結果第一頁應出現skilltree官網的連結()
        {
			//arrange
			//到google search首頁
			var googleSearchPage = new GoogleSearchPage(this);
			googleSearchPage.Go();
			//act
			//搜尋skilltree
			var keywords = "skilltree";
			googleSearchPage.Search(keywords);
			//assert
			//搜尋結果第一頁應存在"https://skilltree.my/"的連結
			var googleSearchResultsPage = new GoogleSearchResultsPage(this);
			

			var expectedLink = "https://skilltree.my/";
			googleSearchResultsPage.FindResults(expectedLink);
		}
    }

	internal class GoogleSearchResultsPage : PageObject<GoogleSearchResultsPage>
	{
		private const string linkContainer = "a[href='{0}']";

		public GoogleSearchResultsPage(FluentTest test) : base(test)
		{
				
		}

		internal void FindResults(string expectedLink)
		{
			I.Assert
				.Exists(string.Format(linkContainer, expectedLink));
		}
	}

	internal class GoogleSearchPage : PageObject<GoogleSearchPage>
	{
		private const string keywordContainer = "input[name='q']";

		public GoogleSearchPage(FluentTest test)
			: base(test)
		{
			Url = "https://www.google.com";
		}

		internal void Search(string keywords)
		{
			I.Enter(keywords)
				.In(keywordContainer)
				.Press("{ENTER}");
			//.Append(OpenQA.Selenium.Keys.Enter).To(keywordContainer); //for multi-browser
		}
	}
}