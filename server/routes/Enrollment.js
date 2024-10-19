const express = require("express");
const router = express.Router()
const db = require('../db')

router.get('/', (req,res) => {
  const sql = `
    SELECT 
      EnrollmentID,
      enrollment.StudentID, 
      StudentName, 
      SubjectCode, 
      AYTerm 
    FROM 
      enrollment 
    INNER JOIN 
      student ON enrollment.StudentID = student.StudentID;
  `
  db.query(sql, (err,data) => {
    if(err) return res.json(err);
    return res.json(data)
  })
})

module.exports = router