const allowed = process.env.CORS_WHITELIST || []
let whitelist = []

if (allowed) {
  whitelist = allowed.split(',')
}

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error(origin + ' - Not allowed by CORS'))
    }
  }
}

module.exports = corsOptions