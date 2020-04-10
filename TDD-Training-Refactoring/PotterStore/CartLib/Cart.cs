using System.Linq;
using System.Collections.Generic;

namespace CartLib
{
	public class Cart
	{
		private List<Book> _BookCart = new List<Book>();
		public Cart()
		{
		}

		public decimal GetPrice()
		{
			Dictionary<string, List<Book>> bookCount = new Dictionary<string, List<Book>>();
			if (!_BookCart.Any())
				return 0;
			foreach (var book in _BookCart)
			{
				if (!bookCount.ContainsKey(book.BookName))
					bookCount[book.BookName] = new List<Book> { book };
				else
					bookCount[book.BookName].Add(book);
			}
			var discount = 0m;
			if (bookCount.Count() == 2)
			{
				discount = 0.05m;
			}
			else if(bookCount.Count() == 3)
			{
				discount = 0.1m;
			}
			var totalPrice = bookCount.SelectMany(x => x.Value.Select(a => a.Price)).Sum(b => b);
			return (totalPrice) - (totalPrice * discount);
		}

		public void Add(Book book)
		{
			_BookCart.Add(book);
		}
	}
}