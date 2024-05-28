const express = require ('express')
const bodyParser = require ('body-parser')

const app = express()

app.use = (express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

//Backend stuff
app.get ('/',(req,res) => {
    res.send("Hello World!")
})
//Backend stuff

app.listen (port, () =>[
    console.log `Port opened at ${port}`
])