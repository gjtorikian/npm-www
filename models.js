var MC = module.exports = require('emcee')
MC.model('showprofile', require('./models/showprofile.js'))
MC.model('profile', require('./models/profile.js'))
MC.model('package', require('./models/package.js'))
MC.model('browse', require('./models/browse.js'))
MC.model('root', require('./models/root.js'))
MC.model('packagescreated', require('./models/packagescreated.js'))
MC.model('downloads', require('./models/downloads.js'))
MC.model('recentauthors', require('./models/recentauthors.js'))
MC.model('search', require('./models/search.js'))
