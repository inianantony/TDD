using System;
using NUnit.Framework;
using SchedulerCSharp;

[TestFixture]
public class SchedulerTest
{
    [Test]
    public void CreateScheduler()
    {
        IDisplay fakeDisplay = new FakeDisplay();
        Scheduler s = new Scheduler("loma", fakeDisplay);
        DayTime slot = new DayTime();
        slot.value = DayTime.Time8AM;

        s.AddEvent(new Event(DateTime.Now, slot));
    }
}

public class FakeDisplay : IDisplay
{
    public void ShowEvent(Event anEvent)
    {
    }
}