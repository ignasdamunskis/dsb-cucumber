Feature: Login

  @important
  Scenario: Mobile dafabet login
    Given I am on the homepage
    And I am logged out
    When I login with "AUTODAFATEST002" and "Qat456123"
    Then I should be logged in

  Scenario: Mobile dafabet logout
    Given I am on the homepage
    And I am logged out
    When I login with "AUTODAFATEST002" and "Qat456123"
    Then I should be logged in
    When I logout
    Then the url should match "https://istg-m.elysium-dfbt.com/"
