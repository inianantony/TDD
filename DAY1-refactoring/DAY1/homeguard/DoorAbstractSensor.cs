namespace Homeguard
{
    public class DoorAbstractSensor : AbstractSensor
    {
        public DoorAbstractSensor(string getId, string getLocation)
            : base(getId, getLocation, AbstractSensor.DOOR)
        {
        }

        public override string GetSensorType()
        {
            return AbstractSensor.DOOR;
        }

        protected override string GetTrippedMessage()
        {
            return GetLocation() + " is open";
        }

        protected override string GetNonTrippedMessage()
        {
            return GetLocation() + " is closed";
        }
    }
}