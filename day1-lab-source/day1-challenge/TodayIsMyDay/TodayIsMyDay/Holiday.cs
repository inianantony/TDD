using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TodayIsMyDay
{
	public class Holiday
	{
		DateTime _Today = DateTime.MinValue;

		public Holiday() : this(DateTime.Today)
		{

		}

		public Holiday(DateTime today)
		{
			_Today = today;
		}

		public string IsTodayXmas()
		{
			var today = _Today;

			if (today.Month == 12 && today.Day == 25)
			{
				return "Merry Xmas!!";
			}
			else
			{
				return "Today is not Xmas";
			}
		}
	}
}
