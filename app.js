//const http=require('http');
const path=require('path');
const express = require('express');
const bodyParser=require('body-parser');

const app = express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact');


app.use(bodyParser.urlencoded({extended: false})); // it will only used to send a form 
app.use(express.static(path.join(__dirname, 'public'))) //built in middleware and we can add more it is belongs to the path of css

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})



// const server=http.createServer(app);

// server.listen(3000);

app.listen(3000);