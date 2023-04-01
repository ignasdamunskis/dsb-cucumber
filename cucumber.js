module.exports = {
  default: {
    parallel: 2,
    format: ['html:cucumber-report.html'],
    worldParameters: {
      baseURL: 'https://als-df-stg.elysium-dfbt.com/m/en'
    }
  }
}
