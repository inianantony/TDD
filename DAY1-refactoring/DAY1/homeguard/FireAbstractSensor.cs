namespace Homeguard
{
    public class FireAbstractSensor : AbstractSensor
    {
        public FireAbstractSensor(string getId, string getLocation)
            : base(getId, getLocation, AbstractSensor.FIRE)
        {
        }

        public override string GetSensorType()
        {
            return AbstractSensor.FIRE;
        }

        protected override string GetTrippedMessage()
        {
            return GetLocation() + " is on FIRE!";
        }

        protected override string GetNonTrippedMessage()
        {
            return GetLocation() + " temperature is normal";
        }
    }
}