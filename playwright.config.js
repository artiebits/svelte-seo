/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    baseURL: "http://localhost:4173",
  },
  fullyParallel: true,
  webServer: {
    reuseExistingServer: true,
    command: "npm run preview",
    port: 4173,
  },
};

export default config;
