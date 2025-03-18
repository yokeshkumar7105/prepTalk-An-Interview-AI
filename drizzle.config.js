/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url:'postgresql://ai-interview-mocker_owner:npg_M4VIK7OQuxGT@ep-shiny-smoke-a1cdrmek.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
  };