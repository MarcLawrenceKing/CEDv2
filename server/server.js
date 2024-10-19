require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())

const subjectRoute = require('./routes/Subject')
const scheduleRoute = require('./routes/Schedule')
const programRoute = require('./routes/Program')
const tuitionRoute = require('./routes/Tuition')
const studentRoute = require('./routes/Student')
const enrollmentRoute = require('./routes/Enrollment')

app.use('/api/subject', subjectRoute)
app.use('/api/schedule', scheduleRoute)
app.use('/api/program', programRoute)
app.use('/api/tuition', tuitionRoute)
app.use('/api/student', studentRoute)
app.use('/api/enrollment', enrollmentRoute)

app.listen(process.env.PORT, () => {
  console.log("listening")
})


