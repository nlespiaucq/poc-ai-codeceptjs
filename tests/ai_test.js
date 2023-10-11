Feature("ai");

Scenario("Auto-heal", ({ I }) => {
  I.amOnPage("https://codecept.io/");
  I.fillField(`//input[contains(@class, "search-query-item")]`, "Hello");
});

Scenario.only('Create script', ({ I }) => {
  I.amOnPage('https://getbootstrap.com/docs/5.1/examples/checkout/')
  pause();
});
