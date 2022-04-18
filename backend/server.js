const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMidleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json( { message: 'Welcome to the support Desk API' } )
})

app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))