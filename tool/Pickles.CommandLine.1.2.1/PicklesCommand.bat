if Exist TestResult.trx del TestResult.trx 

"%ProgramFiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE\mstest.exe" /testcontainer:%1 /resultsfile:TestResult.trx 

"C:\tool\Pickles.CommandLine.1.2.1\tools\pickles.exe" -trfmt=mstest --feature-directory=%2\features^ --output-directory=%3\documentation^ --link-results-file=TestResult.trx -df=Dhtml

START Chrome %3documentation\index.html