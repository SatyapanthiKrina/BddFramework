package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Selenium_Workspace\\FreeCrmBDDFramework\\src\\main\\java\\Feature\\homePage.feature", 
		glue={"StepDefinations"},
		format= {"pretty","html:test-output"}
		)
		
		
		
		
public class TestRunner {

}
