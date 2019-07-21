Feature: Verify details on Open Weather Page


Scenario: Details on Open Weather Page

Given User is on Open Weather page
When User validate Open Weather page opened successfully
Then User checks on window
Then User close the browser

#With Scenario Outline..& Examples Keyword
Scenario Outline: Verify Open Weather Page with valid and invalid city

Given User is on Open Weather page
When User validate Open Weather page opened successfully
Then user enters "<city>" 
Then User checks on window
Then User close the browser

Examples:
	| city 	   | 
	| pune     | 
	| pppp     | 