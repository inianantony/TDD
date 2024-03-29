﻿// ------------------------------------------------------------------------------
//  <auto-generated>
//      This code was generated by SpecFlow (http://www.specflow.org/).
//      SpecFlow Version:1.9.0.77
//      SpecFlow Generator Version:1.9.0.0
//      Runtime Version:4.0.30319.42000
// 
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
//  </auto-generated>
// ------------------------------------------------------------------------------
#region Designer generated code
#pragma warning disable
namespace SpecFlowWithEf.Tests.Features._031ScenarioContext
{
    using TechTalk.SpecFlow;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("TechTalk.SpecFlow", "1.9.0.77")]
    [System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [Microsoft.VisualStudio.TestTools.UnitTesting.TestClassAttribute()]
    public partial class ScenarioContextFeaturesFeature
    {
        
        private static TechTalk.SpecFlow.ITestRunner testRunner;
        
#line 1 "ScenarioContext.feature"
#line hidden
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.ClassInitializeAttribute()]
        public static void FeatureSetup(Microsoft.VisualStudio.TestTools.UnitTesting.TestContext testContext)
        {
            testRunner = TechTalk.SpecFlow.TestRunnerManager.GetTestRunner();
            TechTalk.SpecFlow.FeatureInfo featureInfo = new TechTalk.SpecFlow.FeatureInfo(new System.Globalization.CultureInfo("en-US"), "Scenario Context features", "In order to show how to use ScenarioContext\nAs a SpecFlow evangelist\nI want to wr" +
                    "ite some simple scenarios with data in ScenarioContext", ProgrammingLanguage.CSharp, ((string[])(null)));
            testRunner.OnFeatureStart(featureInfo);
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.ClassCleanupAttribute()]
        public static void FeatureTearDown()
        {
            testRunner.OnFeatureEnd();
            testRunner = null;
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestInitializeAttribute()]
        public virtual void TestInitialize()
        {
            if (((TechTalk.SpecFlow.FeatureContext.Current != null) 
                        && (TechTalk.SpecFlow.FeatureContext.Current.FeatureInfo.Title != "Scenario Context features")))
            {
                SpecFlowWithEf.Tests.Features._031ScenarioContext.ScenarioContextFeaturesFeature.FeatureSetup(null);
            }
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestCleanupAttribute()]
        public virtual void ScenarioTearDown()
        {
            testRunner.OnScenarioEnd();
        }
        
        public virtual void ScenarioSetup(TechTalk.SpecFlow.ScenarioInfo scenarioInfo)
        {
            testRunner.OnScenarioStart(scenarioInfo);
        }
        
        public virtual void ScenarioCleanup()
        {
            testRunner.CollectScenarioErrors();
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestMethodAttribute()]
        [Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute("Store and retrive Person Marcus from ScenarioContext")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestPropertyAttribute("FeatureTitle", "Scenario Context features")]
        public virtual void StoreAndRetrivePersonMarcusFromScenarioContext()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Store and retrive Person Marcus from ScenarioContext", ((string[])(null)));
#line 6
this.ScenarioSetup(scenarioInfo);
#line 7
 testRunner.When("I store a person called Marcus in the Current ScenarioContext", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line 8
 testRunner.Then("a person called Marcus can easily be retrieved", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestMethodAttribute()]
        [Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute("Showing information of the scenario")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestPropertyAttribute("FeatureTitle", "Scenario Context features")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestCategoryAttribute("showUpInScenarioInfo")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestCategoryAttribute("andThisToo")]
        public virtual void ShowingInformationOfTheScenario()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Showing information of the scenario", new string[] {
                        "showUpInScenarioInfo",
                        "andThisToo"});
#line 11
this.ScenarioSetup(scenarioInfo);
#line 12
 testRunner.When("I execute any scenario", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line hidden
            TechTalk.SpecFlow.Table table1 = new TechTalk.SpecFlow.Table(new string[] {
                        "Field",
                        "Value"});
            table1.AddRow(new string[] {
                        "Tags",
                        "showUpInScenarioInfo, andThisToo"});
            table1.AddRow(new string[] {
                        "Title",
                        "Showing information of the scenario"});
#line 13
 testRunner.Then("the ScenarioInfo contains the following information", ((string)(null)), table1, "Then ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestMethodAttribute()]
        [Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute("Show the type of step we\'re currently on")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestPropertyAttribute("FeatureTitle", "Scenario Context features")]
        public virtual void ShowTheTypeOfStepWeReCurrentlyOn()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Show the type of step we\'re currently on", ((string[])(null)));
#line 18
this.ScenarioSetup(scenarioInfo);
#line 19
 testRunner.Given("I have a Given step", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Given ");
#line 20
  testRunner.And("I have another Given step", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "And ");
#line 21
 testRunner.When("I have a When step", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line 22
 testRunner.Then("I have a Then step", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestMethodAttribute()]
        [Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute("Display error information in AfterScenario")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestPropertyAttribute("FeatureTitle", "Scenario Context features")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.IgnoreAttribute()]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestCategoryAttribute("showingErrorHandling")]
        public virtual void DisplayErrorInformationInAfterScenario()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Display error information in AfterScenario", new string[] {
                        "ignore",
                        "showingErrorHandling"});
#line 27
this.ScenarioSetup(scenarioInfo);
#line 28
 testRunner.When("an error occurs in a step", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestMethodAttribute()]
        [Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute("Pending step")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestPropertyAttribute("FeatureTitle", "Scenario Context features")]
        public virtual void PendingStep()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Pending step", ((string[])(null)));
#line 30
this.ScenarioSetup(scenarioInfo);
#line 31
 testRunner.When("I set the ScenarioContext.Current to pending", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line 32
 testRunner.Then("this step will not even be executed", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line hidden
            this.ScenarioCleanup();
        }
    }
}
#pragma warning restore
#endregion
