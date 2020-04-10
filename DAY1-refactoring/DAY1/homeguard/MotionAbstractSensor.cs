namespace Homeguard
{
    public class MotionAbstractSensor : AbstractSensor
    {
        public MotionAbstractSensor(string getId, string getLocation)
            : base(getId, getLocation, AbstractSensor.MOTION)
        {
        }

        public override string GetSensorType()
        {
            return AbstractSensor.MOTION;
        }
        
        protected override string GetTrippedMessage()
        {
            return "Motion detected in " + GetLocation();
        }

        protected override string GetNonTrippedMessage()
        {
            return GetLocation() + " is motionless";
        }
    }
}