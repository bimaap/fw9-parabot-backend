require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.urlencoded({extended: false}));

//images folder location ya gaes nanti di uncomment aja
// app.use('/images', express.static('assets'));

//here untuk router nanti gaes

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Our server is running on port: ${port}`);
});