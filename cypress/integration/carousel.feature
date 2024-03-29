Feature: Testing Carousel

Scenario: Forward navigation in the carousel
  Given I am on the homepage
  When I click on the next button of the carousel
  Then I should see next image in the carousel

Scenario: Backward navigation in the carousel
  Given I am on the homepage
  When I click on the previous button of the carousel
  Then I should see previous image in the carousel

Scenario: Carousel autoplay
  Given I am on the homepage
  When the carousel starts autoplaying
  Then I should see images changing automatically in the carousel