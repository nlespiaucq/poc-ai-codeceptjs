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

  I.amOnPage("https://getbootstrap.com/docs/5.1/examples/checkout/");
  const response = await I.askGptOnPage(
    "Act as QA automation engineer, give me the page-object model of this page in TypeScript language that can be integrated with CodeceptJS framework"
  );
  console.log(response);
});
