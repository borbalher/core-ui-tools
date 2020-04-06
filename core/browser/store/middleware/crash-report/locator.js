const crashReportMiddleware = require('.')

class CrashReportMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return crashReportMiddleware
  }
}

module.exports = CrashReportMiddlewareLocator
