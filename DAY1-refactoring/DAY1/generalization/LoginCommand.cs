using System;
using System.IO;


namespace GeneralizationCs
{
	public class LoginCommand : Command
	{
	    public LoginCommand(string name, string password)
		{

            paramList.Add(name);
            paramList.Add(password);
		}

	    protected override char[] GetCommandChar()
	    {
            return new char[] { (char)0x01 };
	    }
	}
}
