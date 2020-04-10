using System;

namespace SchedulerCSharp
{
	public class MailService
	{		
		private static MailService instance;

		private MailService() 
		{
		}

		public static MailService Instance 
		{
			get 
			{
				if (instance == null)
					instance = new MailService();
				return instance;
			}
		}

		public void SendMail(string address, string subject, string message) 
		{
			// this method really sends mail
		}

	}
}
