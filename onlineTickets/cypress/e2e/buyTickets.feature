Feature: Book and Cancel Online Train Tickets

  Scenario: Submit and cancel a ticket request while preserving search parameters
   Given I navigate to the website
   When I enter travel details Lagos to Porto Campanha with departure in 3 days and return in 5 days
   And I submit the ticket request
   Then I should see the Online Ticket Office screen
   When I click Cancel, I am redirected to the Buy Tickets screen
   Then All previously entered search parameters are retained and displayed
