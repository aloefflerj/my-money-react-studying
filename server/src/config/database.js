const CONNECTION_URL = require('./connectionUrl')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.set('useFindAndModify', false)

module.exports = mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
