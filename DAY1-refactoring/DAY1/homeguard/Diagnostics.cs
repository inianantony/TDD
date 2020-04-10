using System.Collections;
using Homeguard;

namespace DAY1.homeguard
{
    class Diagnostics
    {
		public Hashtable sensorTestStatusMap;
		public bool runningSensorTest;
		public string sensorTestStatus;

        public string GetSensorTestStatus()
        {
            return sensorTestStatus;
        }

        public Hashtable GetSensorTestStatusMap()
        {
            return sensorTestStatusMap;
        }

        public void TerminateSensorTest()
        {
            runningSensorTest = false;

            // look at individual sensor status to determine the overall test status
            sensorTestStatus = StatusEnum.PASS;
            IDictionaryEnumerator myEnumerator = sensorTestStatusMap.GetEnumerator();
            while ( myEnumerator.MoveNext() ) {
                string status = (string)myEnumerator.Value;
                if(status == StatusEnum.PENDING)
                {
                    sensorTestStatus = StatusEnum.FAIL;
                    break;
                }
            }
        }

        public void RunSensorTest(CentralUnit centralUnit)
        {
            runningSensorTest = true;
            sensorTestStatus = StatusEnum.PENDING;

            // initialize the status map
            sensorTestStatusMap = new Hashtable();
            foreach(AbstractSensor sensor in centralUnit.Sensors) {
                sensorTestStatusMap[sensor.GetID()] = StatusEnum.PENDING;
            }
        }

        public void UpdateTestStatus(string status, string id)
        {
            // check if a sensor test is running and adjust status
            if (runningSensorTest)
            {
                if (StatusEnum.TRIPPED == status)
                {
                    sensorTestStatusMap[id] = StatusEnum.PASS;
                }

                // check to see if test is complete
                bool done = true;
                IDictionaryEnumerator myEnumerator = sensorTestStatusMap.GetEnumerator();
                while (myEnumerator.MoveNext())
                {
                    string testStatus = (string) myEnumerator.Value;
                    if (StatusEnum.PENDING == testStatus)
                    {
                        done = false;
                        break;
                    }
                }

                //terminate test if complete
                if (done)
                    TerminateSensorTest();
            }
        }
    }
}
