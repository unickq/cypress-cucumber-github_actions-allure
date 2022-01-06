Feature: Sample run
    I want perfrom base scenario

    Scenario: Opening sample page
        Given I open "/" page
        Then I input "here?" in "letters" field
        Then I click "search" button
        Then Page url contain "unscramble"
        Then I input "a" in "starts" field
        And I press "enter" key
        When I click on word "adhere"
        Then I see word definition popup
