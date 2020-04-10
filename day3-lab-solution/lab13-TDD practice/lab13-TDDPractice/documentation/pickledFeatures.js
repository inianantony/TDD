jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "LoginController.feature",
      "Feature": {
        "Name": "LoginController",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Login Success",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "login account is \"joeychen\""
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "user's password is \"1234\""
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "AuthService is stub"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "AuthService.Validate return isValid is true"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I invoke Index with HttpPost"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "result's Controller name should be \"Welcome\""
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "result's Action name should be \"Index\""
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Login Failed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "login account is \"joeychen\""
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "user's password is \"abc\""
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "AuthService is stub"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "AuthService.Validate return isValid is false"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I invoke Index with HttpPost"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "result's ViewBag Message should be \"wrong account or password\""
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Login.feature",
      "Feature": {
        "Name": "Login",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Login Success",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I go to Login Page"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I Enter my account \"joeychen\""
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I Enter my password \"1234\""
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I Login"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "it should be redirect to Welcome Page"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "it should be displayed \"welcome, joeychen\" on the screen"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Login Failed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I go to Login Page"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I Enter my account \"joeychen\""
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I Enter my password \"abc\""
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I Login"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "it should show error message \"wrong account or password\" on the screen"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "AuthService.feature",
      "Feature": {
        "Name": "AuthService",
        "Description": "",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "Description": "",
                "TableArgument": {
                  "HeaderRow": [
                    "scenario",
                    "id",
                    "password",
                    "result",
                    "passwordFromDao",
                    "hashResult"
                  ],
                  "DataRows": [
                    [
                      "valid",
                      "joeychen",
                      "1234",
                      "true",
                      "ooxx",
                      "ooxx"
                    ],
                    [
                      "invalid",
                      "joeychen",
                      "abc",
                      "false",
                      "ooxx",
                      "xxxx"
                    ]
                  ]
                }
              }
            ],
            "Name": "Validate",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "id is <id>"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "password is <password>"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "ProfileDao is stub"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "ProfileDao's GetPassword will return <passwordFromDao>"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Hash is stub"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Hash's GetHash will return <hashResult>"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I invoke Validate"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <result>"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    }
  ],
  "Configuration": {
    "GeneratedOn": "3 九月 2015 00:14:10"
  }
});