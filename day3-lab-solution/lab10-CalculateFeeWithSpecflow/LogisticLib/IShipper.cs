﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LogisticLib
{
    public interface IShipper
    {
        void CalculateFee(ShippingProduct product);

        string Name { get; }
    }
}