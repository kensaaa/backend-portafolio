const express = require('express')
require('dotenv').config()
const cors = require('cors')
const dbConnection = require('./database/config')

const app = express()

dbConnection()

app.use( cors() )

app.use(express.static('public'))

app.use( express.json() )

app.use( '/api/auth/', require('./routes/auth') )
app.use( '/api/project/', require('./routes/project') )
app.use( '/api/email/', require('./routes/email') )


app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})
