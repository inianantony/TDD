using System;
using Homeguard;
using NUnit.Framework;

namespace HomeGuardTest
{

    [TestFixture]
    public class CentranUnitTest
    {
        CentralUnit centralUnit = new CentralUnit();
        IHomeguardView fakeView = new FakeView();
        private IAudibleAlarm fakeAlarm = new FakeAlarm();

        [SetUp]
        public void Setup()
        {
            centralUnit = new CentralUnit();
            fakeView = new FakeView();
            centralUnit.SetView(fakeView);
        }

        [Test]
        [ExpectedException("System.IndexOutOfRangeException")]
        public void ParseRadioBroadcastWithEmptyMessage()
        {
            centralUnit.ParseRadioBroadcast(string.Empty);
        }

        [Test]
        public void SoundAlarm()
        {
            centralUnit.SetAudibleAlarm(fakeAlarm);
            centralUnit.Arm();
            centralUnit.RegisterSensor(CreateSensor("1", "N", AbstractSensor.FIRE));
            centralUnit.ParseRadioBroadcast("1,NONE");

            Assert.AreEqual(true, ((FakeAlarm)fakeAlarm).sound);
        }

        [Test]
        public void AddingMultipleSensors()
        {
            centralUnit.RegisterSensor(CreateSensor("1", "N", AbstractSensor.FIRE));
            centralUnit.RegisterSensor(CreateSensor("2", "S", AbstractSensor.DOOR));

            centralUnit.ParseRadioBroadcast("1,NONE");
            Assert.AreEqual("N temperature is normal", ((FakeView)fakeView).Message);
        }

        private static AbstractSensor CreateSensor(string id, string location, string type)
        {
            switch (type)
            {
                case AbstractSensor.DOOR:
                    return new DoorAbstractSensor(id, location);
                case AbstractSensor.WINDOW:
                    return new WindowAbstractSensor(id, location);
                case AbstractSensor.MOTION:
                    return new MotionAbstractSensor(id, location);
                case AbstractSensor.FIRE:
                    return new FireAbstractSensor(id, location);
            }
            return null;
        }

        static void AssertSensorMessage(string sensorType, string nonTrippedMessage, string trippedMessage)
        {
            {
                CentralUnit centralUnit = new CentralUnit();
                IHomeguardView fakeView = new FakeView();
                centralUnit.SetView(fakeView);
                centralUnit.RegisterSensor(CreateSensor("1", "<N>", sensorType));
                centralUnit.ParseRadioBroadcast("1,RESET");

                Assert.AreEqual(nonTrippedMessage, ((FakeView) fakeView).Message);
            }

            {
                CentralUnit centralUnit = new CentralUnit();
                IHomeguardView fakeView = new FakeView();
                centralUnit.SetView(fakeView);
                centralUnit.RegisterSensor(CreateSensor("1", "<N>", sensorType));
                centralUnit.ParseRadioBroadcast("1,TRIPPED");

                Assert.AreEqual(trippedMessage, ((FakeView) fakeView).Message);
            }
        }

        [Test]
        public void ParseRadioBroadcastShouldSetTheMessage()
        {
            AssertSensorMessage(AbstractSensor.DOOR, "<N> is closed", "<N> is open");
            AssertSensorMessage(AbstractSensor.WINDOW, "<N> is sealed", "<N> is ajar");
            AssertSensorMessage(AbstractSensor.MOTION, "<N> is motionless", "Motion detected in <N>");
            AssertSensorMessage(AbstractSensor.FIRE, "<N> temperature is normal", "<N> is on FIRE!");
        }
    }

    internal class FakeAlarm : IAudibleAlarm
    {
        public bool sound;

        public void Sound()
        {
            sound = true;
        }

        public void Silence()
        {
            sound = false;
        }
    }

    public class FakeView : IHomeguardView
    {
        public string Message;
        public void ShowMessage(string message)
        {
            this.Message = message;
        }
    }
}