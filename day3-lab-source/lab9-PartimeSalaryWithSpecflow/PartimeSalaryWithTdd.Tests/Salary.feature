Feature: Salary
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers

@mytag
Scenario: Normal working hours salary is 800 for 8 hours
Given Hourly Salary is 100
And Checkin is "2014/8/30 08:00:00"
And CheckOut is "2014/8/30 17:00:00"
When When I calculate salary
Then I should get 800

Scenario: OT working hours salary is 1132 for 8 hours Plus first ot slot
Given Hourly Salary is 100
And First Ot ratio is 1.66
And Checkin is "2014/8/30 08:00:00"
And CheckOut is "2014/8/30 19:00:00"
When When I calculate salary
Then I should get 1132

Scenario: OT working hours salary is 1532 for 8 hours Plus first ot slot And Second ot slot
Given Hourly Salary is 100
And First Ot ratio is 1.66
And 2nd Ot ratio is 2
And Checkin is "2014/8/30 08:00:00"
And CheckOut is "2014/8/30 22:00:00"
When When I calculate salary
Then I should get 1532
