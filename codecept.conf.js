exports.config = {
  tests: "./tests/**_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "",
      show: true,
      windowSize: "1200x900",
      browser: "chromium",
      waitForNavigation: "domcontentloaded",
    }
  },
  include: {},
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    heal: {
      enabled: true
    },
  },
};
