const path=require('path'); //we don't need to install because it is a core node js module

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.post('/submit-contact', (req, res, next) => {
  console.log(req.body);
  res.redirect('/success');
});

router.get("/success", (req, res) => {
    res.send("<h1>Form successfully filled</h1>");
});


module.exports = router;
