const express = require('express');
const router = express.Router();
const {resultString,fieldSuggested,getResultString,getFieldSuggested}=require("../controllers/result")

router.post("/result",resultString)
router.get("/result/:id",getResultString)
router.post("/fields",fieldSuggested)
router.get("/fields/:id",getFieldSuggested)


module.exports=router