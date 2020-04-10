﻿using System;
using System.Collections.Generic;
using System.Text;

namespace VideoCs
{
    public class Movie
    {	
        public const int CHILDRENS	= 2;
    	public const int REGULAR 	= 0;
	    public const int NEW_RELEASE = 1;

    	private string title;
	    private int priceCode;

    	public Movie (string title, int priceCode) 
        {
		    this.title 		= title;
		    this.priceCode 	= priceCode;
	    }

	    public int PriceCode 
        {
            get { return priceCode; }
            set { priceCode = value; }
	    }


	    public string Title 
        {
            get { return title; }
	    }
    }
}
