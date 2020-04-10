﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RsaSecureToken
{
    // step 1: 把profileDao型別改成IProfileDao介面, 把rsaToken型別改成IRsaTokenDao介面
    // step 2: 新增一個AuthenticationService constructor, 讓外部可以傳入IProfileDao與IRsaTokenDao的instance
    // step 3: IsValid() 改使用 field 的 profileDao 與 rsaToken
    // step 4: 把IsValid() 內 new class 的動作移除。

    public class AuthenticationService
    {
        private IProfileDao _profileDao;
        private IRsaTokenDao _tokenDao;

        public AuthenticationService(IProfileDao profileDao, IRsaTokenDao tokenDao)
        {
            this._profileDao = profileDao;
            this._tokenDao = tokenDao;
        }

        public bool IsValid(string account, string password)
        {
            // 根據 account 取得自訂密碼
            //IProfileDao profileDao = new ProfileDao();
            var passwordFromDao = this._profileDao.GetPassword(account);

            // 根據 account 取得 RSA token 目前的亂數
            //IRsaTokenDao rsaToken = new RsaTokenDao();
            var randomCode = this._tokenDao.GetRandom(account);

            // 驗證傳入的 password 是否等於自訂密碼 + RSA token亂數
            var validPassword = passwordFromDao + randomCode;
            var isValid = password == validPassword;
            return isValid;
        }
    }

    public class ProfileDao : RsaSecureToken.IProfileDao
    {
        public string GetPassword(string account)
        {
            var result = Context.GetPassword(account);
            return result;
        }
    }

    public static class Context
    {
        public static Dictionary<string, string> profiles;

        static Context()
        {
            profiles = new Dictionary<string, string>();
            profiles.Add("joey", "91");
            profiles.Add("mei", "99");
        }

        public static string GetPassword(string key)
        {
            return profiles[key];
        }
    }

    public class RsaTokenDao : RsaSecureToken.IRsaTokenDao
    {
        public string GetRandom(string account)
        {
            var seed = new Random((int)DateTime.Now.Ticks & 0x0000FFFF);
            var result = seed.Next(0, 999999);
            return result.ToString("000000");
        }
    }
}