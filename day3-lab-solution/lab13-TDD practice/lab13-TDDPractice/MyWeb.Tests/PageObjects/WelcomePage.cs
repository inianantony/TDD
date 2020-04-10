﻿using FluentAutomation;
using MyWeb.Tests.Util;

namespace MyWeb.Tests.PageObjects
{
	public class WelcomePage : PageObject<WelcomePage>
	{
		private const string welcomeMessageContainer = "#message";

		public WelcomePage(FluentTest test)
			: base(test)
		{
			Url = string.Format("{0}/{1}", MyTestContext.Domain, "Welcome");
		}

		internal void CheckAt()
		{
			I.Assert.Url(this.Url);
		}

		internal void WelcomeMessage(string welcomeMessage)
		{
			I.Assert.Text(welcomeMessage).In(welcomeMessageContainer);
		}
	}
}