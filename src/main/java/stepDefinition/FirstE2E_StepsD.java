package stepDefinition;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class FirstE2E_StepsD  {
	WebDriver driver;
	
	@Given("^User is on Open Weather page$")
	public void user_is_on_Open_Weather_page() {
		String chromePath = "C:\\Upender Folder\\Selenium Program\\HArdi sir\\Chrome Browser driver\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", chromePath);
		driver= new ChromeDriver();
		driver.get(" https://openweathermap.org/");
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    	}

	@When("^User validate Open Weather page opened successfully$")
	public void user_validate_Open_Weather_page_opened_successfully() {
		String title=driver.getTitle();
		System.out.println(title);
	  
	}

	@Then("^User checks on window$")
	public void user_checks_on_window() {
		driver.close();
	}
		
 //Reg Exp:
 //1. \"([^\"]*)\"
//2. \"(.*)\"

 @Then("^user enters \"(.*)\"$")
 public void user_enters_CityName(String city){
 driver.findElement(By.xpath("//input[@placeholder='Your city name']")).sendKeys(city);
  //Thread.sleep(2000);
  driver.findElement(By.xpath("//button[contains(text(),' Search')]")).click();
  //Thread.sleep(2000);   
	}

 @Then("User close the browser")
 public void user_close_the_browser() {
	 driver.close();
 }
	
}
