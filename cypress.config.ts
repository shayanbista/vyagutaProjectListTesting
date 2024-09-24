import { defineConfig } from "cypress";
import * as dotenv from "dotenv"

dotenv.config()

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    env: {
      refreshToken:process.env.REFRESH_TOKEN,
      baseUrl:"https://qa.vyaguta.lftechnology.com.np/",
    },
  },
});
