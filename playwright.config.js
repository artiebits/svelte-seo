/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    baseURL: "http://localhost:4173",
  },
  fullyParallel: true,
  webServer: {
    reuseExistingServer: true,
    command: "pnpm preview",
    port: 4173,
  },
};

export default config;
