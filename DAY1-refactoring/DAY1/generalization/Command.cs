using System.Collections.Generic;
using System.IO;

namespace GeneralizationCs
{
    public class Command
    {
        protected int SIZE_LENGTH = 1;
        protected int CMD_BYTE_LENGTH = 1;
        protected char[] header = {(char)0xde, (char)0xad};
        protected char[] footer = {(char)0xbe, (char)0xef};

        public List<string> paramList = new List<string>();

		protected int getSize()
		{
		    return header.Length + SIZE_LENGTH + CMD_BYTE_LENGTH + footer.Length + getParamSize();
		}

	    protected void WriteField(TextWriter writer, string field)
	    {
	        writer.Write(field);
	        writer.Write((char) 0x00);
	    }

        private int getParamSize()
        {
            int result = 0;
            paramList.ForEach(e => { result += e.Length + 1; });
            return result;
        }


        public void Write(TextWriter writer)
        {
            writer.Write(header);
            writer.Write(getSize());
            writer.Write(GetCommandChar());

            paramList.ForEach(e => { WriteField(writer, e); });

            writer.Write(footer);
        }

        protected virtual char[] GetCommandChar()
        {
            throw new System.NotImplementedException();
        }
    }
}