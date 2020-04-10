Feature: CalculateFee
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers

@mytag
Scenario Outline: based on product data , calculates the shippers have to pay the freight Each
Given the commodity page
And enter the book trade names
And by weight to 10
And long input 30
And a wide input 20
And high input 10
And Logistics Selection <shipper>
When the button is pressed to calculate shipping
Then the logistics business name should be <shipperName>
And Shipment Results should be <fee>
Examples:
| Shipper | shipperName | fee    |
| 黑貓      | 黑貓          | 200    |
| 新竹貨運    | 新竹貨運        | 254.16 |
| 郵局      | 郵局          | 180    |
