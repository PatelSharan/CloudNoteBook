// const dotevn = require('dotenv').config()

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3001
// const connectDB = require('./src/connectDB/connectDB.js')
// const DB_URL = process.env.DB_URL
// const routerUser = require('./src/router/user.js')
// const routerNote = require('./src/router/note.js')
// const cors = require('cors')
// const fetchuser = require('./src/middelwares/fetchuser.js')

import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import cors from 'cors'
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT
import connectDB from './src/connectDB/connectDB.js'
import routerUser from './src/router/user.js'
import routerNote from './src/router/note.js'
import fetchuser from './src/middelwares/fetchuser.js'

app.use(express.json())
app.use(cors({
    origin: '*'
}))


//Connect With DB
connectDB(DB_URL)



//User Routes 
app.get('/', routerUser)
app.post('/registeruser', routerUser)
app.post('/loginuser', routerUser)
app.post('/changepassword', routerUser)
app.post('/getuser', fetchuser, routerUser)


//Notes Routes 
app.post('/addnote', fetchuser, routerNote)
app.get('/getnotes', fetchuser, routerNote)
app.put('/updatenote/:id', fetchuser, routerNote)
app.delete('/deletenote/:id', routerNote)


//Server Listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})