using System;
using System.Collections;

namespace SchedulerCSharp
{
	public class Scheduler
	{
		private string owner = "";
		private MailService mailService;
		private IDisplay display;
		private IList events = new ArrayList();

		public Scheduler(string owner) : this(owner, new SchedulerDisplay())
		{
		}
	
		public Scheduler(string owner, IDisplay display) 
		{
			this.owner = owner;
		
			mailService = MailService.Instance;
		    this.display = display;
		}

		public void AddEvent(Event anEvent) 
		{
			anEvent.Added();
			events.Add(anEvent);
			SendMail("jacques@spg1.com", "Event Notification", anEvent.ToString());
			display.ShowEvent(anEvent);		
		}

		protected virtual void SendMail(string address, string subject, string message)
		{
		    mailService.SendMail(address, subject, message);
		}

		public bool HasEvents(DateTime date) 
		{
			foreach (Event anEvent in events) 
			{
				if (anEvent.Date.Equals(date))
					return true;
			}
			return false;    
		}
	
		public void PerformConsistencyCheck(string message) 
		{
		}
	
		public void Update() 
		{
			foreach (Event anEvent in events) 
			{			
				if (!(anEvent is Meeting)) 
				{
					continue;
				}

				Meeting meeting = (Meeting)anEvent;

				string note = NoteRetriever.Get_note(meeting.Date);
				if (note.Length == 0)
					continue;
				meeting.AppendToText(note);
			}
		}

	    public Meeting GetMeeting(DateTime date, DayTime slot)
	    {
	        return GetMeeting(date, slot, new TimeServices());
	    }
		
		public Meeting GetMeeting(DateTime date, DayTime slot, TimeServices services) 
		{
			foreach (Event anEvent in events)
			{
				if (!(anEvent is Meeting))
					continue;
				Meeting meeting = (Meeting)anEvent;
				if (meeting.Date.Equals(date) && meeting.Slot == slot
					&& !services.IsDateAHoliday(meeting.Date))
					return meeting;
						
			}
		    return null;
		}
	}
}