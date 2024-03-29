jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "Workflow\\ClearingScreen.feature",
      "Feature": {
        "Name": "Clearing Screen",
        "Description": "In order to restart a new set of calculations\nAs a math idiot\nI want to be able to clear the screen",
        "FeatureElements": [
          {
            "Name": "Clear the screen",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press C"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the screen should be empty"
              }
            ],
            "Tags": [
              "@workflow",
              "@slow"
            ],
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
    },
    {
      "RelativeFolder": "15Pickles\\InteractiveDHTMLView.feature",
      "Feature": {
        "Name": "Interactive DHTML View",
        "Description": "In order to increase stakeholder engagement with pickled specs\nAs a SpecFlow evangelist  \nI want to adjust the level of detail in the DHTML view to suit my audience\nSo that I do not overwhelm them.",
        "FeatureElements": [
          {
            "Name": "Scenario with large data table",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature with a large table of data:",
                "TableArgument": {
                  "HeaderRow": [
                    "heading",
                    "page #"
                  ],
                  "DataRows": [
                    [
                      "Chapter 1",
                      "1"
                    ],
                    [
                      "Chapter 2",
                      "5"
                    ],
                    [
                      "Chapter 3",
                      "10"
                    ],
                    [
                      "Chapter 4",
                      "15"
                    ],
                    [
                      "Chapter 5",
                      "20"
                    ],
                    [
                      "Chapter 6",
                      "25"
                    ],
                    [
                      "Chapter 7",
                      "30"
                    ],
                    [
                      "Chapter 8",
                      "35"
                    ],
                    [
                      "Chapter 9",
                      "40"
                    ],
                    [
                      "Chapter 10",
                      "45"
                    ],
                    [
                      "Chapter 11",
                      "50"
                    ],
                    [
                      "Chapter 12",
                      "55"
                    ],
                    [
                      "Chapter 13",
                      "60"
                    ],
                    [
                      "Chapter 14",
                      "65"
                    ],
                    [
                      "Chapter 15",
                      "70"
                    ],
                    [
                      "Chapter 16",
                      "75"
                    ],
                    [
                      "Chapter 17",
                      "80"
                    ],
                    [
                      "Chapter 18",
                      "85"
                    ],
                    [
                      "Chapter 19",
                      "90"
                    ],
                    [
                      "Chapter 20",
                      "95"
                    ],
                    [
                      "Chapter 21",
                      "100"
                    ],
                    [
                      "Chapter 22",
                      "105"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the table heading"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the table body should collapse"
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
    },
    {
      "RelativeFolder": "14MarkdownExample\\MarkdownExamples.feature",
      "Feature": {
        "Name": "Sample Markdown Feature",
        "Description": "Header 1\n========\n\nHeader 2\n--------\n\nThis is a *significant* word\n\n1. Ordered #1\n2. Ordered #2\n3. Ordered #3\n\n- Unordered #1 \n- Unordered #2\n- Unordered #3 \t\n\nHorizontal Rule:  \n- - -\n\nTable example:  \n| First Header  | Second Header |\n| ------------- | ------------- |\n| Content Cell  | Content Cell  |\n| Content Cell  | Content Cell  | \n\n- - -\n\nIncluding a picture: ![](./image.png)",
        "FeatureElements": [
          {
            "Name": "Sample Markdown Scenario Example",
            "Description": "\nThis is **important** text\n\nCode Block:  \n```\nvar x = 2;\n```\n\nApple\n:   Pomaceous fruit of plants of the genus Malus in \nthe family Rosaceae.\n:   An American computer company.\n\nOrange\n:   The fruit of an evergreen tree of the genus Citrus.",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "this"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "that"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "Description": "\nThis __message__ is important too and is for an *Example* table.",
                "TableArgument": {
                  "HeaderRow": [
                    "test",
                    "test2"
                  ],
                  "DataRows": [
                    [
                      "value",
                      "value2"
                    ]
                  ]
                }
              }
            ],
            "Name": "Sample Markdown Scenario Outline Example",
            "Description": "\nThis is [an example link to pickles](https://github.com/picklesdoc/pickles/wiki \"Pickles\") inline link.\n\n[This link to pickles](https://github.com/picklesdoc/pickles/wiki) has no title attribute.",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "this: <test>"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "that: <test2>"
              }
            ],
            "Tags": [
              "@AddingATag"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Background": {
          "Name": "",
          "Description": "This is the *coolest* background",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I have initialized the Sum-variable to 0"
            },
            {
              "Keyword": "When",
              "NativeKeyword": "When ",
              "Name": "I add 1 to the Sum-variable"
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false
          }
        },
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
    },
    {
      "RelativeFolder": "13MultilineText\\MultilineFeatureExample.feature",
      "Feature": {
        "Name": "Multiline Feature Example",
        "Description": "In order capture this particular Gherkin feature\nAs a Pickles contributer\nI want to demonstrate an example of using multiline text in a Scenario",
        "FeatureElements": [
          {
            "Name": "Mutliline Output",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have read in some text from the user",
                "DocStringArgument": "This is line 1.\nThis is line 2!\nThis is line 3!!"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I process this input"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result will be saved to the multiline text data store"
              }
            ],
            "Tags": [
              "@mytag"
            ],
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
    },
    {
      "RelativeFolder": "12NestedFolders\\ChildFolder\\ChildChildFolder\\NestedFolderExample.feature",
      "Feature": {
        "Name": "Nested Folder Example",
        "Description": "In order to test nested folder output\nAs a silly contributer\nI want to create an example of something several folders deep",
        "FeatureElements": [
          {
            "Name": "Nested - Add two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press add"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120 on the screen"
              }
            ],
            "Tags": [
              "@nestedFolders"
            ],
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
    },
    {
      "RelativeFolder": "11ContextInjection\\ContextInjection.feature",
      "Feature": {
        "Name": "Injecting context into step specifications",
        "Description": "In order to don't have to rely on the global shared state\nand to be able to define the contexts required for each scenario.\nAs a SpecFlow Evanglist\nI would like to have the system automatically inject an instance of any class as \ndefined in the constructor of a step file",
        "FeatureElements": [
          {
            "Name": "Feature with no context",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires no context"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "everything is dandy"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with a single context",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires a single context"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the context is set"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with multiple contexts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires multiple contexts"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the contexts are set"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with recursive contexts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires a recursive context"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the context is set"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "its sub-context is set"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with a dependent context",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires a single context"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the context is set"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the context was created by the feature with a single context scenario"
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
    },
    {
      "RelativeFolder": "10StepTransformation\\StepTransformation.feature",
      "Feature": {
        "Name": "Step Argument Transformations",
        "Description": "In order to reduce the amount of code and repetitive tasks in my steps\nAs a SpecFlow evanglist\nI want to define reusable transformations for my step arguments",
        "FeatureElements": [
          {
            "Name": "Steps with non-string arguments",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Dan has been registered at date 2003/03/13"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Aslak has been registered at terminal 2"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be able to see Aslak at terminal 2"
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
    },
    {
      "RelativeFolder": "09CallingStepsFromSteps\\CallingStepsFromSteps.feature",
      "Feature": {
        "Name": "Calling Steps from StepDefinitions",
        "Description": "In order to create steps of a higher abstraction\nAs a SpecFlow evangelist\nI want reuse other steps in my step definitions",
        "FeatureElements": [
          {
            "Name": "Log in",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the index page"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter my unsername nad password"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click the login button"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the welcome page should be displayed"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Do something meaningful",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am logged in"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I dosomething meaningful"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should get rewarded"
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
    },
    {
      "RelativeFolder": "08AttributeOverloading\\AttributeOverloading.feature",
      "Feature": {
        "Name": "Attribute overloading",
        "Description": "In order to show that steps can be used with multiple attributes\nAs a SpecFlow Evangelist\nI want to show that similar attributes can be applied to the same step definition",
        "FeatureElements": [
          {
            "Name": "Checking number for evenness",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have this simple step"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "this simple step"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "also this step"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I do something"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I could validate that the number 2 is even"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "that the number 4 is even"
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "the number 3 is odd"
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
    },
    {
      "RelativeFolder": "07Svenska\\Svenska.feature",
      "Feature": {
        "Name": "Summering",
        "Description": "För att slippa att göra dumma fel\nSom räknare\nVill jag kunna lägga summera",
        "FeatureElements": [
          {
            "Name": "Summera 5 och 7 ska vara 12",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Givet ",
                "Name": "att jag har knappat in 5"
              },
              {
                "Keyword": "Given",
                "NativeKeyword": "Och ",
                "Name": "att jag har knappat in 7"
              },
              {
                "Keyword": "Given",
                "NativeKeyword": "När ",
                "Name": "jag summerar"
              },
              {
                "Keyword": "Given",
                "NativeKeyword": "Så ",
                "Name": "ska resultatet vara 12"
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
    },
    {
      "RelativeFolder": "06CompareToAssist\\CompareTo.feature",
      "Feature": {
        "Name": "Show the compare to feature",
        "Description": "In order to show the compare to features of SpecFlow Assist\nAs a SpecFlow evanglist\nI want to show how the different versions of compareTo works",
        "FeatureElements": [
          {
            "Name": "CompareToInstance",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following person",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "Style",
                      "Butch"
                    ],
                    [
                      "Birth date",
                      "1972-10-09"
                    ]
                  ]
                }
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "CompareToInstance should match this guy",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "Style",
                      "Butch"
                    ],
                    [
                      "BirthDate",
                      "10/9/1972 12:00:00 AM"
                    ]
                  ]
                }
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "CompareToInstance should match this guy",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "BirthDate",
                      "10/9/1972 12:00:00 AM"
                    ]
                  ]
                }
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "CompareToInstance should not match this guy",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Anders"
                    ],
                    [
                      "Style",
                      "very cool"
                    ],
                    [
                      "BirthDate",
                      "10/9/1974 12:00:00 AM"
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
            "Name": "CompareToSet",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following persons using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "1972-10-09"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1977-01-01"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04"
                    ]
                  ]
                }
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "CompareToSet should match this",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "BirthDate"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "10/9/1972 12:00:00 AM"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1/1/1977 12:00:00 AM"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "4/4/1974 12:00:00 AM"
                    ]
                  ]
                }
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "CompareToSet should not match this",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "BirthDate"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "10/9/1972 12:00:00 AM"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1/1/1977 12:00:00 AM"
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
    },
    {
      "RelativeFolder": "05TablesAndAssist\\TableScenario.feature",
      "Feature": {
        "Name": "Showing table usage",
        "Description": "In order to show how to use tables\nAs a SpecFlow evanglist\nI want to write some simple scenarios that uses tables tables",
        "FeatureElements": [
          {
            "Name": "Using tables",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following persons",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "1972-10-09",
                      "50"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1977-01-01",
                      "500"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I search for Jocke"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the following person should be returned",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
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
            "Name": "Using tables with SpecFlow Assist",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following persons using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Very cool",
                      "1972-10-09",
                      "50"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1977-01-01",
                      "500"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I search for Jocke"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the following person should be returned using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
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
            "Name": "Creating a entity from field value",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill out the form like this",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "Style",
                      "very cool"
                    ],
                    [
                      "Birth date",
                      "1972-10-09"
                    ],
                    [
                      "Cred",
                      "100"
                    ]
                  ]
                }
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the following person should be returned using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Very cool",
                      "1972-10-09",
                      "1000"
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
            "Name": "Example of a wide table",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "this wide table",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000"
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
    },
    {
      "RelativeFolder": "04Background\\BackgroundFeature.feature",
      "Feature": {
        "Name": "Show the use of background",
        "Description": "In order to show how to use the Background keyword of Gherkin\nAs a SpecFlow evanglist\nI want to show that background steps are called before any scenario step",
        "FeatureElements": [
          {
            "Name": "Add 1 to the sum",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I add 1 to the Sum-variable"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the total sum should be 2"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Add 2 to the sum",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I add 2 to the Sum-variable"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the total sum should be 3"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Background": {
          "Name": "",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I have initialized the Sum-variable to 0"
            },
            {
              "Keyword": "When",
              "NativeKeyword": "When ",
              "Name": "I add 1 to the Sum-variable"
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false
          }
        },
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
    },
    {
      "RelativeFolder": "03ScenarioOutline\\ScenarioOutline.feature",
      "Feature": {
        "Name": "Scenario outline",
        "Description": "In order to not have to type the same scenario over and over\nAs a SpecFlow evangelist\nI want to show how to use ScenarioOutline",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "less than 100",
                "Description": "",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "10",
                      "20",
                      "30"
                    ],
                    [
                      "20",
                      "20",
                      "40"
                    ],
                    [
                      "20",
                      "30",
                      "50"
                    ]
                  ]
                }
              },
              {
                "Name": "more than 100",
                "Description": "",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "100",
                      "20",
                      "120"
                    ],
                    [
                      "1000",
                      "20",
                      "1020"
                    ]
                  ]
                }
              }
            ],
            "Name": "Add two positive numbers with many examples",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I enter <number 1> into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter <number 2> into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I perform add"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <result>"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "less than 100",
                "Description": "",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "10",
                      "20",
                      "30"
                    ],
                    [
                      "20",
                      "20",
                      "40"
                    ],
                    [
                      "20",
                      "30",
                      "50"
                    ]
                  ]
                }
              },
              {
                "Name": "more than 100",
                "Description": "",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "100",
                      "20",
                      "120"
                    ],
                    [
                      "1000",
                      "20",
                      "1020"
                    ]
                  ]
                }
              }
            ],
            "Name": "Add two negative numbers with many examples",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I enter <number 1> into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter <number 2> into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I perform add"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <result>"
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
    },
    {
      "RelativeFolder": "032FeatureContext\\FeatureContextFeatures.feature",
      "Feature": {
        "Name": "FeatureContext features",
        "Description": "In order to show how to use FeatureContext\nAs a SpecFlow evangelist\nI want to write some simple scenarios with data in FeatureContext",
        "FeatureElements": [
          {
            "Name": "Store and retrive Person Marcus from FeatureContext Current",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I store a person called Marcus in the current FeatureContext"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a person called Marcus can easily be retrieved from the current FeatureContext"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Showing information of the feature",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I execute any scenario in the feature"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the FeatureInfo contains the following information",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Tags",
                      "showUpInScenarioInfo, andThisToo"
                    ],
                    [
                      "Title",
                      "FeatureContext features"
                    ],
                    [
                      "TargetLanguage",
                      "CSharp"
                    ],
                    [
                      "Language",
                      "en-US"
                    ],
                    [
                      "Description",
                      "In order to"
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
        "Tags": [
          "@showUpInScenarioInfo",
          "@andThisToo"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "031ScenarioContext\\ScenarioContext.feature",
      "Feature": {
        "Name": "Scenario Context features",
        "Description": "In order to show how to use ScenarioContext\nAs a SpecFlow evangelist\nI want to write some simple scenarios with data in ScenarioContext",
        "FeatureElements": [
          {
            "Name": "Store and retrive Person Marcus from ScenarioContext",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I store a person called Marcus in the Current ScenarioContext"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a person called Marcus can easily be retrieved"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Showing information of the scenario",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I execute any scenario"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the ScenarioInfo contains the following information",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Tags",
                      "showUpInScenarioInfo, andThisToo"
                    ],
                    [
                      "Title",
                      "Showing information of the scenario"
                    ]
                  ]
                }
              }
            ],
            "Tags": [
              "@showUpInScenarioInfo",
              "@andThisToo"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Show the type of step we're currently on",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have a Given step"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have another Given step"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I have a When step"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I have a Then step"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Display error information in AfterScenario",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "an error occurs in a step"
              }
            ],
            "Tags": [
              "@ignore",
              "@showingErrorHandling"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Pending step",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I set the ScenarioContext.Current to pending"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "this step will not even be executed"
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
    },
    {
      "RelativeFolder": "02TagsAndHooks\\TagDemo.feature",
      "Feature": {
        "Name": "Tag demonstrator",
        "Description": "In order to show the capabilities of tags in SpecFlow\nAs a SpecFlow evanglist\nI want to write scenarios that has tags and show their usage in code",
        "FeatureElements": [
          {
            "Name": "Ignored scenario",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has the @ignore tag"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the scenario is ignored"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the missing step definitions are not reported"
              }
            ],
            "Tags": [
              "@ignore"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario without tags",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 0 tags"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with '' is run"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario with 1 tag",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 1 tags"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with 'testTag1' is run"
              }
            ],
            "Tags": [
              "@testTag1"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario with 3 tags",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 3 tags"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with 'testTag1, testTag2, testTag3' is run"
              }
            ],
            "Tags": [
              "@testTag1",
              "@testTag2",
              "@testTag3"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario with 2 tags",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 2 tags"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with 'testTag1, testTag3' is run"
              }
            ],
            "Tags": [
              "@testTag1",
              "@testTag3"
            ],
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
        "Tags": [
          "@allAboutTags",
          "@important"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "02TagsAndHooks\\Hooks.feature",
      "Feature": {
        "Name": "Addition",
        "Description": "In order to explain the order in which hooks are run\nAs a SpecFlow evanglist\nI wan to  be able to hook into pre and post conditions in SpecFlow",
        "FeatureElements": [
          {
            "Name": "Hooking into pre conditions for Test Runs in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeTestRun hook should have been executed"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for Features in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeFeature hook should have been executed"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for Scenarios in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeScenario hook should have been executed"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for ScenarioBlocks in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeScenarioBlock hook should have been executed"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for Steps in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeStep hook should have been executed"
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
    },
    {
      "RelativeFolder": "01TestRunner\\TestRunnerIsNotImportant.feature",
      "Feature": {
        "Name": "The test runner is not (very) important",
        "Description": "In order to show that the test runner is just for the autogenerated stuff in SpecFlow  \nAs a SpecFlow evanglist  \nI want to be able to call my steps in the same manner inspite of the testrunner configured",
        "FeatureElements": [
          {
            "Name": "A couple of simple steps",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have step defintions in place"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I call a step"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the step should have been called"
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
    },
    {
      "RelativeFolder": "00BasicGherkin\\BasicGherkin.feature",
      "Feature": {
        "Name": "Showing basic gherkin syntax",
        "Description": "In order to see that gherkin is a very simple langauge  \nAs a SpecFlow evangelist  \nI want to show that basic syntax  \n\n![Test Image](test.jpg)",
        "FeatureElements": [
          {
            "Name": "Simple GWT",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the initial state of the application is Running"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I ask what the application state is"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see Running as the answer"
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Using And and But",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the initial state of the application is Running"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have authorization to ask application state"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I ask what the application state is"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see Running as the answer"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I should see the time of the application"
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "the state of the application should not be Stopped"
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
    },
    {
      "RelativeFolder": "Trigonometry.feature",
      "Feature": {
        "Name": "Trigonometry",
        "Description": "In order to avoid perform more advanced calculations\nAs a math idiot\nI want to be able to use trigonometric functions",
        "FeatureElements": [
          {
            "Name": "Sine",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 90 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press sin"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 1 on the screen"
              }
            ],
            "Tags": [
              "@trigonometric",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Cosine",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 0 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press cos"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 1 on the screen"
              }
            ],
            "Tags": [
              "@trigonometric",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Tangent",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 45 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press tan"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 1 on the screen"
              }
            ],
            "Tags": [
              "@trigonometric",
              "@fast"
            ],
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
    },
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
              "WasExecuted": true,
              "WasSuccessful": true
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
              "WasExecuted": true,
              "WasSuccessful": true
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
      "RelativeFolder": "Arithmetic.feature",
      "Feature": {
        "Name": "Arithmetic",
        "Description": "In order to avoid silly mistakes\nAs a math idiot\nI want to be able to perform arithmetic on the calculator",
        "FeatureElements": [
          {
            "Name": "Add two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press add"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120 on the screen"
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Subtract two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press subtract"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be -20 on the screen"
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Multiply two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press multiply"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 3500 on the screen"
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Divide two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 2 into the calculator"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press divide"
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 25 on the screen"
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
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
    "GeneratedOn": "26 八月 2015 17:14:19"
  }
});