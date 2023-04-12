require('dotenv').config({ path: `.env.${process.env.BRAND}` });

module.exports = {
  default: {
    parallel: 2,
    format: ['html:cucumber-report.html'],
    publishQuiet: true
  }
}
