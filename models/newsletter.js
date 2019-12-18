const nedb = require("nedb")

const newsletterDb = new nedb({ filename: "db/newsletters.db", autoload: true })

module.exports = newsletterDb