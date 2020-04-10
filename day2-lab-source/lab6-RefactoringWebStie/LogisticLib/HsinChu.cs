using System;

namespace LogisticLib
{
	public class HsinChu : IShipper
	{
		public HsinChu()
		{
		}

		public string Name
		{
			get
			{
				return "新竹貨運";
			}
		}

		public void CalculateFee(ShippingProduct product)
		{
			var length = product.Size.Length;
			var width = product.Size.Width;
			var height = product.Size.Height;

			var size = length * width * height;

			//長 x 寬 x 高（公分）x 0.0000353
			if (length > 100 || width > 100 || height > 100)
			{
				product.ShippingFee = (size * 0.0000353 * 1100 + 500);
			}
			else
			{
				product.ShippingFee = (size * 0.0000353 * 1200);
			}
		}
	}
}