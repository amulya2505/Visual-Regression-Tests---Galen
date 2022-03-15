# Visual-Regression-Tests using Galen


### Prerequisites:
For Galen, you need to have a Java version 1.8 or greater installed.<br> 
### To install Galen, follow these steps:
1. Run `npm install -g galenframework-cli`<br> 
2. To check if Galen is successfully install, use `galen -v`<br>

### To install webdriver for respective browsers, follow these steps:
1. Check your Chrome browser version.<br> E.g., `Open chrome browser -> Go to 'Help' -> Go to 'About Google Chrome'`.<br> 
2. Download Chrome Webdriver in `./webDriver` folder (the webdriver version should be compatible with your browser version).<br> 
3. Unzip the downloaded Webdriver file in the same folder.<br> 
4. In galen.config file, uncomment the webdriver path `$.webdriver.chrome.driver=webDriver/chromedriver`.<br>


### To run Galen test, follow these steps:
1. Navigate to layout_tests folder using following command. <br> 

2. To run test suite in galen, execute the following command.<br>
`galen test <TestSuite_name> --htmlreport <ReportDirectory_name>`<br>
E.g., `galen test ./suites/ --htmlreport reports`<br>
3. To run all test parallely, execute the following command.<br>
`galen test <TestSuite_name> --htmlreport <ReportDirectory_name> --parallel-tests <threads_count_for_running_parallel_test>`<br>
E.g., `galen test ./suites/ --htmlreport reports --parallel-tests 4`<br>
4. To run specific test file, execute the following command.<br>
`galen test <TestFile_name> --htmlreport <ReportDirectory_name>`<br>
E.g., `galen test ./suites/testfilename.test.js --htmlreport reports`<br>
5. To execute and check a gspec file use the following command.<br>
`galen check <File_name> --url <url> --size <dimension> --htmlreport <ReportDirectory_name>`<br>
E.g., `galen check ./specs/filename.gspec --url https://<Your uRL>/ --size 1024x768 --htmlreport reports`<br>
6. To run with headless mode off, in `./galen.config` file, `galen.browser.headless=true`, replace true with false.<br>

Note:<br>
- You can change the url in `/suites/constant.properties` file,<br> `url : https://<your url>`, change `url` 
