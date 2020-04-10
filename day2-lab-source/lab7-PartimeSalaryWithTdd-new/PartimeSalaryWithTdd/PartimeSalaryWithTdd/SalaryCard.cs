using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using PartimeSalaryWithTdd.Utility;

namespace PartimeSalaryWithTdd
{
	public class SalaryCard
	{
		public int HourlySalary { get; set; }

		public DateTime StartTime { get; set; }

		public DateTime EndTime { get; set; }
		public double FirstOverTimeRatio { get; set; }
		public int SecondOverTimeRatio { get; set; }

		public double CalculateSalary()
		{
			double workingHours = GetWorkingHour();
			if (workingHours < 8)
			{
				var normalPay = GetNormalPay(workingHours);
				return normalPay;
			}
			else
			{
				double normalHours = 8;
				var normalPay = GetNormalPay(normalHours);
				var otPay = GetOtPay(workingHours);
				var result = normalPay + otPay;
				return result;
			}
		}

		private double GetNormalPay(double normalHours)
		{
			return normalHours * HourlySalary;
		}

		private double GetOtPay(double workingHours)
		{
			var otHours = workingHours - 8;
			if (otHours <= 2)
			{
				var result = otHours * HourlySalary * FirstOverTimeRatio;
				return result;
			}
			else
			{
				var firstOtPay = 2 * HourlySalary * FirstOverTimeRatio;
				double secondOtPay = GetSecondOtPay(otHours);
				var result = firstOtPay + secondOtPay;
				return result;
			}
		}

		private double GetSecondOtPay(double otHours)
		{
			if (otHours > 4)
				otHours = 4;
			var secondOtHours = otHours - 2;
			var result = secondOtHours * HourlySalary * SecondOverTimeRatio;
			return result;
		}

		private double GetWorkingHour()
		{
			var morningHour = DateTimeHelper.TotalHours(StartTime, new DateTime(StartTime.Year, StartTime.Month, StartTime.Day, 12, 0, 0));

			var afternoonHour = DateTimeHelper.TotalHours(new DateTime(EndTime.Year, EndTime.Month, EndTime.Day, 13, 0, 0), EndTime);

			var totalHours = morningHour + afternoonHour;

			return totalHours;
		}
	}
}
