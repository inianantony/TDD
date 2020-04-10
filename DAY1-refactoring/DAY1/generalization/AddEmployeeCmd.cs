using System;
using System.IO;
using NUnit.Framework;
using System.Collections.Generic;

namespace GeneralizationCs
{

	public class AddEmployeeCmd : Command
	{

		public AddEmployeeCmd(string name, string address, string city, string state, int yearlySalary)
		{
            paramList.Add(name);
            paramList.Add(address);
            paramList.Add(city);
            paramList.Add(state);
            paramList.Add(yearlySalary + "");
		}

	    protected override char[] GetCommandChar()
	    {
	        return new char[] {(char) 0x02};
	    }
	}
}
