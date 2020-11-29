const express = require('express')
const app = express()
require('./mongoose')
const port = process.env.PORT || 3000
// const Data = require('./models/data')
const dataRoute = require('./routes/data')
const bodyParser = require("body-parser")
const path = require('path')
require('dotenv').config()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())
app.use(bodyParser.json());
app.use(dataRoute)

app.use(express.static("Backend"));
  
app.get("", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build/indexmain.html"));
});

app.get("/mainsrs", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/srs/mainsrs.html"));
});

app.get("/DFD", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/diagrams/DFD.html"));
});

app.get("/STD", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/diagrams/STD.html"));
});


// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
  
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "client","build","indexmain.html"));
//     });
//   }


// const path = require('path')
// const hbs = require('hbs')

// const publicDirectoryPath = path.join(__dirname,'./public/')
// const viewsPath = path.join(__dirname,'./views')

// app.set('view engine', 'hbs')
// app.set('views',viewsPath)

// app.use(express.static(publicDirectoryPath))

// app.get('',(req,res) => {
//     res.render('index')
// })

//app.use(express.json())

// app.post('/start', (req,res) => {
//     const data = new Data(req.body)
//     data.save().then(() => {
//         res.status(201).send(data)
//     }).catch((e) => {
//         res.status(404).send(e)
//     })
// })

// app.get('/srs', (req,res) => {
//     Data.find({}).then((client) => {   
//         const constraint = []
//         for (const con of client[0].constraints) {
//             constraint.push(con.const)
//         }
//         const definition = []
//         for (const def of client[0].definitions) {
//             definition.push([def.definition,def.description])
//         }
//         const requirement = []
//         for (const require of client[0].requirements) {
//             requirement.push(require.req)
//         }
//         const process = []
//         for (const proc of client[0].processes) {
//             process.push([proc.input,proc.process,proc.output])
//         }
//         const user = []
//         for (const use of client[0].users) {
//             user.push([use.user,use.description])
//         }
//         const orgName = client[0].organizationName
//         const proName = client[0].projectName
//         const proScope = client[0].projectScope
//         const notProScope = client[0].notProjectScope
//         const ref = client[0].references
//         const pers = client[0].perspective
//         const data = {
//             constraint,
//             orgName,
//             proName,
//             proScope,
//             notProScope,
//             definition,
//             ref,
//             pers,
//             requirement,
//             process,
//             user
//         }

//         res.send(data)

//     }).catch((e) => {
//         res.send(e)
//     })
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
