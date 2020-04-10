using System;
using System.Collections;
using DAY1.homeguard;

namespace Homeguard
{
    public class CentralUnit
    {
        private bool armed = false;
        private string securityCode;
        private IList sensors = new ArrayList();
        private IHomeguardView view = new TextView();
        private IAudibleAlarm audibleAlarm = new TextAudibleAlarm();
        Diagnostics diagnostics = new Diagnostics();

        public IList Sensors
        {
            set { sensors = value; }
            get { return sensors; }
        }

        public bool IsArmed()
        {
            return armed;
        }

        public void Arm()
        {
            armed = true;
        }

        public void SetSecurityCode(string code)
        {
            securityCode = code;
        }

        public bool IsValidCode(string code)
        {
            return securityCode == code;
        }

        public void EnterCode(string code)
        {
            if (IsValidCode(code))
            {
                armed = false;
                audibleAlarm.Silence();
            }
        }

        public bool AudibleAlarmIsOn()
        {
            return false;
        }

        public IList GetSensors()
        {
            return sensors;
        }

        public void RegisterSensor(AbstractSensor abstractSensor)
        {
            AbstractSensor tempAbstractSensor = null;
            switch (abstractSensor.GetSensorType())
            {
                case AbstractSensor.DOOR:
                    tempAbstractSensor = new DoorAbstractSensor(abstractSensor.GetID(), abstractSensor.GetLocation());
                    break;
                case AbstractSensor.WINDOW:
                    tempAbstractSensor = new WindowAbstractSensor(abstractSensor.GetID(), abstractSensor.GetLocation());
                    break;
                case AbstractSensor.MOTION:
                    tempAbstractSensor = new MotionAbstractSensor(abstractSensor.GetID(), abstractSensor.GetLocation());
                    break;
                case AbstractSensor.FIRE:
                    tempAbstractSensor = new FireAbstractSensor(abstractSensor.GetID(), abstractSensor.GetLocation());
                    break;
                default:
                    tempAbstractSensor = abstractSensor;
                    break;
            }

            sensors.Add(tempAbstractSensor);
        }

        public void SetView(IHomeguardView view)
        {
            this.view = view;
        }

        public void SetAudibleAlarm(IAudibleAlarm alarm)
        {
            audibleAlarm = alarm;
        }

        public void ParseRadioBroadcast(string packetString)
        {
            Packet packet = new Packet(packetString);
            AbstractSensor abstractSensor = GetSensor(packet);

            if (abstractSensor == null)
                return;

            abstractSensor.AdjustStatus(packet);

            view.ShowMessage(abstractSensor.GetMessage());

            NotifyAlarm();

            diagnostics.UpdateTestStatus(packet.status, packet.id);
        }

        private void NotifyAlarm()
        {
            if (IsArmed())
                audibleAlarm.Sound();
        }

        private AbstractSensor GetSensor(Packet packet)
        {
            foreach (AbstractSensor s in sensors)
            {
                if (s.GetID() == packet.id)
                {
                    return s;
                }
            }
            return null;
        }
    }
}
