const express = require("express");
const cors = require('cors');
const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');
const user = require('./models/User')
const app = express();

const salt = 10;


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://curiousstate2006:DarkRizer9038@cluster0.0oye4vc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await user.create({username, password:bcrypt.hashSync(password, salt)});
        res.json(userDoc);
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
    }

})

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await user.findOne({username});
    res.json(userDoc);f
});

app.listen(4000);
