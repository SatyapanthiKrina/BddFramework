package StepDefinations;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefination {

	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void User_already_on_LoginPage() {
		
		System.setProperty("webdriver.gecko.driver", "C:\\SeleniumJars\\geckoDriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://freecrm.com/");
	}
	
	@When("^Title of the login page is Free CRM$")
	public void title_of_the_login_page_is_Free_CRM()  {
	   String title =driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("#1 Free CRM customer relationship management software cloud", title);
	}

	@Then("^User clicks on login$")
	public void user_clicks_on_login() {
		WebElement login=driver.findElement(By.xpath("//span[@class='icon icon-xs mdi-chart-bar']"));
		login.click();
	
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String userName , String Password) {
		driver.findElement(By.name("email")).sendKeys(userName);
		driver.findElement(By.name("password")).sendKeys(Password);
		
		
	}

	@Then("^User clicks on login button$")
	public void user_click_on_login_page() {
	WebElement loginButton=	driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
	loginButton.click();
	    
	}
	
	@Then("^User is on home page$")
	public void user_is_on_home_page() throws InterruptedException {
	String title=driver.getTitle();
	System.out.println("Homepage title is:" + title);
	Assert.assertEquals("Cogmento CRM", title);

	Thread.sleep(2000);
}
	
	@Then("^User moves to new contacts page$")
	public void user_moves_to_new_contacts_page() {
		driver.findElement(By.xpath("//i[@class='users icon']")).click();
	
	}

	@Then("^User Clicks on New Button$")
	public void user_Clicks_on_New_Button() {
		WebElement NewButton = driver.findElement(By.xpath("//div[@class='item']/a"));
		NewButton.click();
	}

	@Then("^User enters contactInfo \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contactInfo(String firstname , String lastname) {
		WebElement Fn= driver.findElement(By.name("first_name"));
		Fn.sendKeys(firstname);
		WebElement Ln = driver.findElement(By.name("last_name"));
		Ln.sendKeys(lastname);
	}

	@Then("^User clicks on Save$")
	public void user_clicks_on_Save() {
		WebElement SaveButton= driver.findElement(By.xpath("//div[@class='item']/button[2]"));
		SaveButton.click();
	}

	@Then("^Close the browser$")
	public void Close_the_browser(){
		driver.quit();
		}
}
