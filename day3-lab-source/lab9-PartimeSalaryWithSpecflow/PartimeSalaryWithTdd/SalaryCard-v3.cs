﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using PartimeSalaryWithTdd.Utility;

namespace PartimeSalaryWithTdd
{
    public class SalaryCard
    {
        public DateTime EndTime { get; set; }

        public double FirstOverTimeRatio { get; set; }

        public int HourlySalary { get; set; }

        public DateTime StartTime { get; set; }

        private const int normalWorkingHourLimit = 8;
        
        public double CalculateSalary()
        {
            var workingHour = this.GetWorkingHour();

            if (workingHour <= normalWorkingHourLimit)
            {
                var result = workingHour * this.HourlySalary;

                return result;
            }
            else
            {
                var normalPay = normalWorkingHourLimit * this.HourlySalary;
                var overTimePay = this.GetOverTimePay(workingHour);

                var result = normalPay + overTimePay;

                return result;
            }
        }

        private double GetOverTimePay(double workingHour)
        {
            var overTimeHour = workingHour - normalWorkingHourLimit;

            var firstOverTime = overTimeHour <= 2 ? overTimeHour : 2;
            var secondOverTime = overTimeHour > 2 ? overTimeHour - firstOverTime : 0;

            //var overTimePay = overTimeHour * this.FirstOverTimeRatio * this.HourlySalary;
            var firstOverTimePay = firstOverTime * this.FirstOverTimeRatio * this.HourlySalary;
            var secondOverTimePay = secondOverTime * this.SecondOverTimeRatio * this.HourlySalary;

            var overTimePay = firstOverTimePay + secondOverTimePay;
            return overTimePay;
        }

        private double GetWorkingHour()
        {
            var moringEnd = new DateTime(this.StartTime.Year, this.StartTime.Month, this.StartTime.Day, 12, 0, 0);
            var afternoonStart = new DateTime(this.StartTime.Year, this.StartTime.Month, this.StartTime.Day, 13, 0, 0);

            var morningWorkhour = DateTimeHelper.TotalHours(this.StartTime, moringEnd);
            var afternoonWorkhour = DateTimeHelper.TotalHours(afternoonStart, this.EndTime);

            var workingHour = morningWorkhour + afternoonWorkhour;

            return workingHour;
        }

        public double SecondOverTimeRatio { get; set; }
    }
}