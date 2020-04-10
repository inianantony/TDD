jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "OrderQuery.feature",
      "Feature": {
        "Name": "OrderQuery",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "依據姓名、訂單日期起、訂單日期迄條件，查出顧客的訂單",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "查詢條件為",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerId",
                    "OrderDateStart",
                    "OrderDateEnd"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-03",
                      "2014-07-07"
                    ]
                  ]
                }
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "預計Customers資料應有",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "CompanyName"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "SkillTree"
                    ]
                  ]
                }
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "預計Orders資料應有",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "OrderDate",
                    "ShipCity"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-02",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-03",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-04",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-05",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-08",
                      "Changhua"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "呼叫Query方法"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "查詢結果應為",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "OrderDate",
                    "ShipCity"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-03",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-04",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-05",
                      "Changhua"
                    ]
                  ]
                }
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "依據姓名、訂單日期起的條件，查出顧客的訂單",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "查詢條件為",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerId",
                    "OrderDateStart",
                    "OrderDateEnd"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-03",
                      ""
                    ]
                  ]
                }
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "預計Customers資料應有",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "CompanyName"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "SkillTree"
                    ]
                  ]
                }
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "預計Orders資料應有",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "OrderDate",
                    "ShipCity"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-02",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-03",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-04",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-05",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-08",
                      "Changhua"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "呼叫Query方法"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "查詢結果應為",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "OrderDate",
                    "ShipCity"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-03",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-04",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-05",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-08",
                      "Changhua"
                    ]
                  ]
                }
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "依據姓名、訂單日期迄的條件，查出顧客的訂單",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "查詢條件為",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerId",
                    "OrderDateStart",
                    "OrderDateEnd"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "",
                      "2014-07-04"
                    ]
                  ]
                }
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "預計Customers資料應有",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "CompanyName"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "SkillTree"
                    ]
                  ]
                }
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "預計Orders資料應有",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "OrderDate",
                    "ShipCity"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-02",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-03",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-04",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-05",
                      "Changhua"
                    ],
                    [
                      "Joey",
                      "2014-07-08",
                      "Changhua"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "呼叫Query方法"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "查詢結果應為",
                "TableArgument": {
                  "HeaderRow": [
                    "CustomerID",
                    "OrderDate",
                    "ShipCity"
                  ],
                  "DataRows": [
                    [
                      "Joey",
                      "2014-07-02",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-03",
                      "Taipei"
                    ],
                    [
                      "Joey",
                      "2014-07-04",
                      "Changhua"
                    ]
                  ]
                }
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    }
  ],
  "Configuration": {
    "GeneratedOn": "5 May 2016 18:09:34"
  }
});