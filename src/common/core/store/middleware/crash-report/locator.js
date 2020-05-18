const CrashReportMiddleware = require('.')

class CrashReportMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CrashReportMiddleware()
  }
}

module.exports = CrashReportMiddlewareLocator
