var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var cors = require('cors')
var env = require('dotenv')
var User = require('./models/users')
var app = express()
const PORT = 3001
env.config()
app.use(express.json())
app.use(cors({
    origin:['https://fullstack-training-mtus.onrender.com'],
    methods:['GET','POST']
}))

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connection Successful")
}).catch((error) => {
    console.log("Check connection string")
    console.log(error)
})

app.get('/', (req, res) => {
    res.send("Welcome to backend server")
})
app.get('/json', (req, res) => {
    res.json({ server: "Welcome to backend", url: "localhost", port: PORT })
})
app.get('/static', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'))
})

// app.post('/signup', async (req, res) => {
//     var { firstname, lastname, email } = await req.body
//     console.log(firstname,lastname,email)
//     try {
//         var newUser = new User({
//             firstname:firstname,
//             lastname:lastname,
//             email:email
//         })
//         newUser.save()
//         console.log("User Added Successfully")
//         res.status(200).send("User Added Successfully")
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

// (OR)

app.post('/signup', (req, res) => {
    try {
        var newUser = new User(req.body)
        newUser.save()
        console.log("User Added Successfully")
        res.status(200).send("User Added Successfully")
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/getsignup', async (req, res) => {
    try {
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
        console.log("All data fetched")
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
})

app.post('/login', async (req, res) => {
    var { email, password } = req.body
    try {
        var existingUser = await User.findOne({ email: email })
        if ( existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "Incorrect password", isloggedIn: false })
            }
            else {
                    res.json({ message: "Login successful", isloggedIn: true })
            }
        }
        else{
            res.json({message:"Incorrect mail", isloggedIn: false})
        }
    }
    catch (err) {
            console.log(err);
        }
    })

app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
})
