const express = require("express");
const router = express.Router()
const db = require('../db')

router.get('', (req,res) => {
  const sql = `
    SELECT 
      TuitionID,
      tuition.StudentID, 
      StudentName, 
      AYTerm, 
      Scholarship, 
      TotalTuitionUnits, 
      TotalCreditedUnits, 
      Tuition,
      TotalFees, 
      TotalAssessment 
    FROM 
      tuition 
    INNER JOIN 
      student ON tuition.StudentID = student.StudentID;
  `
  db.query(sql, (err,data) => {
    if(err) return res.json(err);
    return res.json(data)
  })
})

module.exports = router