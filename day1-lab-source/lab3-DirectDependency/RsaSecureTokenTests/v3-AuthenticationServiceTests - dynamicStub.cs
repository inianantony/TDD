﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RsaSecureToken;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;

namespace RsaSecureToken.Tests
{
    // topic: 使用 NSubstitute 的 stub
    
    // tips: 因為stub物件by reference，所以產生stub物件後，可以先傳入 target 的 constructor 中，再定義 stub 方法的回傳值，一樣是work的
    [TestClass()]
    public class AuthenticationServiceTests
    {
        [TestMethod()]
        public void IsValidTest()
        {
			var profile = Substitute.For<IProfileDao>();
			profile.GetPassword("joey").Returns("91");

			var token = Substitute.For<IToken>();
			token.GetRandom("").ReturnsForAnyArgs("000000");

            var target = new AuthenticationService(profile,token);

            var actual = target.IsValid("joey", "91000000");

            //always failed
            Assert.IsTrue(actual);                       
        }
    }
}
