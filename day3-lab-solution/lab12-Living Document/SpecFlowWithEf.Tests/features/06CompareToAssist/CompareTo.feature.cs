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
namespace SpecFlowWithEf.Tests.Features._06CompareToAssist
{
    using TechTalk.SpecFlow;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("TechTalk.SpecFlow", "1.9.0.77")]
    [System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [Microsoft.VisualStudio.TestTools.UnitTesting.TestClassAttribute()]
    public partial class ShowTheCompareToFeatureFeature
    {
        
        private static TechTalk.SpecFlow.ITestRunner testRunner;
        
#line 1 "CompareTo.feature"
#line hidden
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.ClassInitializeAttribute()]
        public static void FeatureSetup(Microsoft.VisualStudio.TestTools.UnitTesting.TestContext testContext)
        {
            testRunner = TechTalk.SpecFlow.TestRunnerManager.GetTestRunner();
            TechTalk.SpecFlow.FeatureInfo featureInfo = new TechTalk.SpecFlow.FeatureInfo(new System.Globalization.CultureInfo("en-US"), "Show the compare to feature", "In order to show the compare to features of SpecFlow Assist\nAs a SpecFlow evangli" +
                    "st\nI want to show how the different versions of compareTo works", ProgrammingLanguage.CSharp, ((string[])(null)));
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
                        && (TechTalk.SpecFlow.FeatureContext.Current.FeatureInfo.Title != "Show the compare to feature")))
            {
                SpecFlowWithEf.Tests.Features._06CompareToAssist.ShowTheCompareToFeatureFeature.FeatureSetup(null);
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
        [Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute("CompareToInstance")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestPropertyAttribute("FeatureTitle", "Show the compare to feature")]
        public virtual void CompareToInstance()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("CompareToInstance", ((string[])(null)));
#line 8
this.ScenarioSetup(scenarioInfo);
#line hidden
            TechTalk.SpecFlow.Table table1 = new TechTalk.SpecFlow.Table(new string[] {
                        "Field",
                        "Value"});
            table1.AddRow(new string[] {
                        "Name",
                        "Marcus"});
            table1.AddRow(new string[] {
                        "Style",
                        "Butch"});
            table1.AddRow(new string[] {
                        "Birth date",
                        "1972-10-09"});
#line 9
 testRunner.Given("I have the following person", ((string)(null)), table1, "Given ");
#line hidden
            TechTalk.SpecFlow.Table table2 = new TechTalk.SpecFlow.Table(new string[] {
                        "Field",
                        "Value"});
            table2.AddRow(new string[] {
                        "Name",
                        "Marcus"});
            table2.AddRow(new string[] {
                        "Style",
                        "Butch"});
            table2.AddRow(new string[] {
                        "BirthDate",
                        "10/9/1972 12:00:00 AM"});
#line 14
 testRunner.Then("CompareToInstance should match this guy", ((string)(null)), table2, "Then ");
#line hidden
            TechTalk.SpecFlow.Table table3 = new TechTalk.SpecFlow.Table(new string[] {
                        "Field",
                        "Value"});
            table3.AddRow(new string[] {
                        "Name",
                        "Marcus"});
            table3.AddRow(new string[] {
                        "BirthDate",
                        "10/9/1972 12:00:00 AM"});
#line 19
 testRunner.And("CompareToInstance should match this guy", ((string)(null)), table3, "And ");
#line hidden
            TechTalk.SpecFlow.Table table4 = new TechTalk.SpecFlow.Table(new string[] {
                        "Field",
                        "Value"});
            table4.AddRow(new string[] {
                        "Name",
                        "Anders"});
            table4.AddRow(new string[] {
                        "Style",
                        "very cool"});
            table4.AddRow(new string[] {
                        "BirthDate",
                        "10/9/1974 12:00:00 AM"});
#line 23
 testRunner.But("CompareToInstance should not match this guy", ((string)(null)), table4, "But ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestMethodAttribute()]
        [Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute("CompareToSet")]
        [Microsoft.VisualStudio.TestTools.UnitTesting.TestPropertyAttribute("FeatureTitle", "Show the compare to feature")]
        public virtual void CompareToSet()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("CompareToSet", ((string[])(null)));
#line 31
this.ScenarioSetup(scenarioInfo);
#line hidden
            TechTalk.SpecFlow.Table table5 = new TechTalk.SpecFlow.Table(new string[] {
                        "Name",
                        "Style",
                        "Birth date"});
            table5.AddRow(new string[] {
                        "Marcus",
                        "Cool",
                        "1972-10-09"});
            table5.AddRow(new string[] {
                        "Anders",
                        "Butch",
                        "1977-01-01"});
            table5.AddRow(new string[] {
                        "Jocke",
                        "Soft",
                        "1974-04-04"});
#line 32
 testRunner.Given("I have the following persons using assist", ((string)(null)), table5, "Given ");
#line hidden
            TechTalk.SpecFlow.Table table6 = new TechTalk.SpecFlow.Table(new string[] {
                        "Name",
                        "Style",
                        "BirthDate"});
            table6.AddRow(new string[] {
                        "Marcus",
                        "Cool",
                        "10/9/1972 12:00:00 AM"});
            table6.AddRow(new string[] {
                        "Anders",
                        "Butch",
                        "1/1/1977 12:00:00 AM"});
            table6.AddRow(new string[] {
                        "Jocke",
                        "Soft",
                        "4/4/1974 12:00:00 AM"});
#line 37
 testRunner.Then("CompareToSet should match this", ((string)(null)), table6, "Then ");
#line hidden
            TechTalk.SpecFlow.Table table7 = new TechTalk.SpecFlow.Table(new string[] {
                        "Name",
                        "Style",
                        "BirthDate"});
            table7.AddRow(new string[] {
                        "Marcus",
                        "Cool",
                        "10/9/1972 12:00:00 AM"});
            table7.AddRow(new string[] {
                        "Anders",
                        "Butch",
                        "1/1/1977 12:00:00 AM"});
#line 42
 testRunner.But("CompareToSet should not match this", ((string)(null)), table7, "But ");
#line hidden
            this.ScenarioCleanup();
        }
    }
}
#pragma warning restore
#endregion
