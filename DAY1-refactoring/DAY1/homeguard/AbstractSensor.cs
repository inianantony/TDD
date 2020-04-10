using System;

namespace Homeguard
{
	/// <summary>
	/// Summary description for Sensor.
	/// </summary>
	public abstract class AbstractSensor
	{
		public const string DOOR = "door";
		public const string MOTION = "motion";
		public const string WINDOW = "window";
		public const string FIRE = "fire";

		private string id;
		private string location;
		private string type;
		private bool tripped = false;

		public AbstractSensor(string id, string location, string type)
		{
			this.id = id;
			this.location = location;
			this.type = type;
		}

		public String GetID()
		{
			return id;
		}

		public virtual String GetSensorType()
		{
			return type;
		}

		public String GetLocation()
		{
			return location;
		}

		public void Trip()
		{
			tripped = true;
		}

		public void Reset()
		{
			tripped = false;
		}

		public bool IsTripped()
		{
			return tripped;
		}

	    public void AdjustStatus(Packet packet)
	    {
            if (packet.IsTripped())
                Trip();
            else
                Reset();
	    }

	    public string GetMessage()
	    {
            if (!IsTripped())
            {
                return GetNonTrippedMessage();
            }
            else
            {
                return GetTrippedMessage();
            }
	    }

	    protected virtual string GetNonTrippedMessage()
	    {
	        throw new NotImplementedException();
	    }

	    protected virtual string GetTrippedMessage()
	    {
	        throw new NotImplementedException();
	    }
	}
}
