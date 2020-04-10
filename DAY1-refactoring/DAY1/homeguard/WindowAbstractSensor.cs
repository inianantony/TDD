namespace Homeguard
{
    public class WindowAbstractSensor : AbstractSensor
    {
        public WindowAbstractSensor(string id, string location) :
            base(id, location, AbstractSensor.WINDOW)
        {
        }

        public override string GetSensorType()
        {
            return AbstractSensor.WINDOW;
        }

        protected override string GetTrippedMessage()
        {
            return GetLocation() + " is ajar";
        }

        protected override string GetNonTrippedMessage()
        {
            return GetLocation() + " is sealed";
        }
    }
}