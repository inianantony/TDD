using System;
using System.Web.UI;
using LogisticLib;

public partial class Product : Page
{
	protected void Page_Load(object sender, EventArgs e)
	{
	}

	protected void btnCalculate_Click(object sender, EventArgs e)
	{
		if (this.IsValid)
		{
			var product = GetShippingProduct();
			IShipper shipper = GetShipper(product.Shipper);

			if (shipper != null)
			{
				this.lblCompany.Text = shipper.Name;
				shipper.CalculateFee(product);
				this.lblCharge.Text = product.ShippingFee.ToString();
			}
			else
			{
				var js = "alert('發生不預期錯誤，請洽系統管理者');location.href='http://tw.yahoo.com/';";
				this.ClientScript.RegisterStartupScript(this.GetType(), "back", js, true);
			}
		}
	}

	private IShipper GetShipper(int shipperId)
	{
		IShipper result = null;
		switch (shipperId)
		{
			case 1:
				result = new BlackCat();
				break;
			case 2:
				result = new HsinChu();
				break;
			case 3:
				result = new PostOffice();
				break;
			default:
				break;
		}

		return result;
	}

	private ShippingProduct GetShippingProduct()
	{
		var result = new ShippingProduct
		{
			Name = this.txtProductName.Text,
			Weight = Convert.ToDouble(this.txtProductWeight.Text),
			Size = new Size
			{
				Length = Convert.ToDouble(this.txtProductLength.Text),
				Width = Convert.ToDouble(this.txtProductWidth.Text),
				Height = Convert.ToDouble(this.txtProductHeight.Text)
			},
			Shipper = Convert.ToInt32(this.drpCompany.SelectedValue)
		};

		return result;
	}
}

