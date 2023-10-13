Feature("ai");

Scenario("Auto-heal - github", ({ I }) => {
  I.amOnPage("http://github.com");
  I.click(`//a[contains(@data-ga-click,"Login")]`);
  I.see("Sign in to GitHub");
});

Scenario("Create script", ({ I }) => {
  I.amOnPage("https://getbootstrap.com/docs/5.1/examples/checkout/");
  pause();
});

Scenario("Give me the page-object", async ({ I }) => {
  // prerequisite:
  // 1. update the following file: node_modules/codeceptjs/lib/helper/OpenAI.js
  // 1.1 add at the end of the file: module.exports = OpenAI;
  // 1.2 change the line 51: const html = await this.helpers["Playwright"].grabSource();
  // 2. update the following file codecept.conf.js by adding the following:
  // 2.1 on the section helpers: OpenAI: {},
  // 2.2 at the end of the file:
  // ai: {
  //   model: "gpt-3.5-turbo-16k",
  //   temperature: 0.1,
  //   html: {
  //     maxLength: 50000,
  //     simplify: false,
  //     minify: false,
  //   },

  I.amOnPage("https://www.betclic.fr/");
  I.waitForText("Continuer sans accepter", 30);
  I.click("Continuer sans accepter");
  I.click('//*[@data-qa="commonSignInButton"]');

  await I.askGptOnPageFragment(
    `Act as customer, what is this page about?`,
    '//div[@class="container_content"]'
  );

  await I.askGptOnPageFragment(
    `Act as QA automation engineer.
    Give me the page-object model of this page in TypeScript language.
    It should be integrated with CodeceptJS framework.
    Prefer consistent functional methods rather than single-action ones (ex: fill the form in one method rather than x methods).
    All codeceptjs helper methods should be asynchronous.
    Locators should be private and functions public`,
    '//div[@class="container_content"]'
  );
});
