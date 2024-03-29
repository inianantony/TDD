# Setup variables
#$root = "C:\Users\joeychen\Desktop\桌面備分\轉單\OrderToCartModel"
#$FeatureDirectory = "$root\IntegrationTestOrderToCart"
#$OutputDirectory = "C:\OrderToCartScenarios"
#$DocumentationFormat = "html"
#$SystemUnderTestName = "Example"
#$SystemUnderTestVersion = "1.3.42"
#$TestResultsFormat = "MSTest"
#$TestResultsFile = "$root\TestWebBank\bin\Debug\TestResult.xml"

$root = "C:\tool\ScenarioGenerator"
$FeatureDirectory = $Args[0];
$OutputDirectory = $Args[1];
$DocumentationFormat = $Args[2];
# Import the Pickles-comandlet
Import-Module -DisableNameChecking $root\pickles\powershell\PicklesDoc.Pickles.PowerShell.dll
# Call pickles
Pickle-Features -FeatureDirectory $FeatureDirectory -OutputDirectory $OutputDirectory -DocumentationFormat $DocumentationFormat