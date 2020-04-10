using System;

namespace SchedulerCSharp
{
	public class SchedulerDisplay : IDisplay
	{
		public void ShowEvent(Event anEvent) 
		{
			for(int n = 0; n < 1000; n++) 
			{
				Console.WriteLine("[" + anEvent.Date + "]");	
			}
		}
	}
}
