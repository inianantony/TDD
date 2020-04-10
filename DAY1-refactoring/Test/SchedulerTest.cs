using System;
using NUnit.Framework;

namespace SchedulerCSharp
{
    [TestFixture]
    public class SchedulerTest
    {
        [SetUp]
        public void Before()
        {
            fakeDisplay = new FakeDisplay();
            scheduler = new TestScheduler("loma", fakeDisplay);
            fakeTimeServices = new FakeTimeServices(false);
        }

        private IDisplay fakeDisplay;
        private Scheduler scheduler;
        private TimeServices fakeTimeServices;

        [Test]
        public void CreateScheduler()
        {
            DateTime today = DateTime.Today;
            var slot = new DayTime();
            slot.value = DayTime.Time8AM;
            var e = new Event(today, slot);
            scheduler.AddEvent(e);
        }

        [Test]
        public void GetMeetingReturnMeeting()
        {
            DateTime today = DateTime.Today;
            var slot = new DayTime();
            slot.value = DayTime.Time8AM;

            Event e = new Meeting(today, slot, string.Empty);
            scheduler.AddEvent(e);

            Meeting meeting = scheduler.GetMeeting(today, slot, fakeTimeServices);
            Assert.AreEqual(today, meeting.Date);
            Assert.AreEqual(slot, meeting.Slot);
        }

        [Test]
        public void GetMeetingReturnNullWhenDifferentDate()
        {
            DateTime today = DateTime.Today;
            var slot = new DayTime();
            slot.value = DayTime.Time8AM;

            Event e = new Meeting(today, slot, string.Empty);
            scheduler.AddEvent(e);

            Meeting meeting = scheduler.GetMeeting(DateTime.Today.AddDays(1), slot, fakeTimeServices);
            Assert.AreEqual(null, meeting);
        }

        [Test]
        public void GetMeetingReturnNullWhenDifferentSlot()
        {
            DateTime today = DateTime.Today;
            var slot = new DayTime();
            slot.value = DayTime.Time8AM;

            Event e = new Meeting(today, slot, string.Empty);
            scheduler.AddEvent(e);

            Meeting meeting = scheduler.GetMeeting(today, new DayTime(), fakeTimeServices);
            Assert.AreEqual(null, meeting);
        }

        [Test]
        public void GetMeetingReturnNullWhenItIsHoliday()
        {
            DateTime today = DateTime.Today;
            var slot = new DayTime();
            slot.value = DayTime.Time8AM;

            Event e = new Meeting(today, slot, string.Empty);
            scheduler.AddEvent(e);

            fakeTimeServices = new FakeTimeServices(true);
            Meeting meeting = scheduler.GetMeeting(today, slot, fakeTimeServices);
            Assert.AreEqual(null, meeting);
        }

        [Test]
        public void GetMeetingShouldReturnNul()
        {
            DateTime today = DateTime.Today;
            var slot = new DayTime();
            slot.value = DayTime.Time8AM;

            var e = new Event(today, slot);
            scheduler.AddEvent(e);

            Assert.AreEqual(null, scheduler.GetMeeting(today, slot, fakeTimeServices));
        }
    }

    public class FakeTimeServices : TimeServices
    {
        private readonly bool isHoliday;

        public FakeTimeServices(bool isHoliday)
        {
            this.isHoliday = isHoliday;
        }

        public override bool IsDateAHoliday(DateTime date)
        {
            return isHoliday;
        }
    }

    public class TestScheduler : Scheduler
    {
        public TestScheduler(string owner, IDisplay fakeDisplay)
            : base(owner, fakeDisplay)
        {
        }

        protected override void SendMail(string address, string subject, string message)
        {
        }
    }

    public class FakeDisplay : IDisplay
    {
        public void ShowEvent(Event anEvent)
        {
        }
    }
}