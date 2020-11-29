const express = require('express')
const router = new express.Router()
const port = process.env.PORT || 3000
const Data = require('../models/data')
require('../mongoose')
// app.get('',(req,res) => {
//     res.render('index')
// })

//app.use(express.json())

// router.get('', (req,res) => {
//     res.send("Hello")
// })

router.post('/start', async (req,res) => {
    const data = new Data(req.body)
    try {
        const value = await data.save()
        res.status(201).send(value)
    } catch (e) {
        res.send(400).send()
    }
    // data.save().then(() => {
    //     res.status(201).send(data)
    // }).catch((e) => {
    //     res.status(404).send(e)
    // })
})

router.get('/srs', async (req,res) => {
    try {
        //res.send({"constraint":["one","two"]})
        const count = await Data.count()
        const client = await Data.find({})
        //res.send(client[count-1])
        if(!client) {
            return res.status(404).send()
        }
        const constraint = []
        for (const con of client[count-1].constraints) {
            if(con.const != "") {
                constraint.push(con.const)
            }
        }
        const definition = []
        for (const def of client[count-1].definitions) {
            if(def.definition != "" && def.description != "") {
                definition.push([def.definition,def.description])
            }
        }
        const requirement = []
        for (const require of client[count-1].requirements) {
            if(require.req != "") {
                requirement.push(require.req)
            }
        }
        const process = []
        for (const proc of client[count-1].processes) {
            if(proc.system != "" && proc.intro != "" && proc.purpose != "" && proc.input != "" && proc.process != "" && proc.output != "") {
                process.push([proc.system,proc.intro,proc.purpose,proc.input,proc.process,proc.output])
            }
        }
        const user = []
        for (const use of client[count-1].users) {
            if(use.user != "" && use.description != "") {
                user.push([use.user,use.description])
            }
        }
        const refer = []
        for (const ref of client[count-1].references) {
            if(ref.reference != "" && ref.description != "") {
                refer.push([ref.reference,ref.description])
            }
        }
        const dict = []
        for (const dic of client[count-1].dictionary){
            if(dic.name != "" && dic.aliase != "" && dic.used != "" && dic.description != "" && dic.info != ""){
                dict.push([dic.name,dic.aliase,dic.used,dic.description,dic.info])
            }
        }
        const assumption = []
        for (const assump of client[count-1].assumptions) {
            if (assump.assumption != "" && assump.description != "") {
                assumption.push([assump.assumption,assump.description])
            }
        }
        const perform = []
        for (const perf of client[count-1].performance){
            if (perf.requirement != "" && perf.description != "") {
                perform.push([perf.requirement,perf.description])
            }
        }
        const design = []
        for (const des of client[count-1].designconstraint) {
            if (des.constraint != "" && des.description != "") {
                design.push([des.constraint,des.description])
            }
        }
        const stand = []
        for (const stan of client[count-1].standards) {
            if(stan.standard != "" && stan.description != "") {
                stand.push([stan.standard,stan.description])
            }
        }
        const dfd = []
        for (const pro of client[count-1].dfdprocesses){
            if(pro.input != "" && pro.process != "" && pro.output != "") {
                dfd.push([pro.input,pro.process,pro.output])
            }
        }
        const std = []
        for (const s of client[count-1].stdtransitions){
            if(s.from != ""  && s.to != "" && s.transition != ""){
                std.push([s.from,s.to,s.transition])
            }
        }
        const orgName = client[count-1].organizationName
        const proName = client[count-1].projectName
        const proScope = client[count-1].projectScope
        const notProScope = client[count-1].notProjectScope
        const pers = client[count-1].perspective
        const reliability = client[count-1].reliability
        const security = client[count-1].security
        const maintainability = client[count-1].maintainability
        const portability = client[count-1].portability

        const data = {
            constraint,
            orgName,
            proName,
            proScope,
            notProScope,
            definition,
            refer,
            pers,
            requirement,
            process,
            user,
            dict,
            assumption,
            perform,
            design,
            stand,
            reliability,
            security,
            maintainability,
            portability,
            dfd,
            std
        }
        res.send(data)
    } catch (e) {
        res.status(500).send()
    }
    // Data.find({}).then((client) => {   
    //     const constraint = []
    //     for (const con of client[0].constraints) {
    //         constraint.push(con.const)
    //     }
    //     const definition = []
    //     for (const def of client[0].definitions) {
    //         definition.push([def.definition,def.description])
    //     }
    //     const requirement = []
    //     for (const require of client[0].requirements) {
    //         requirement.push(require.req)
    //     }
    //     const process = []
    //     for (const proc of client[0].processes) {
    //         process.push([proc.input,proc.process,proc.output])
    //     }
    //     const user = []
    //     for (const use of client[0].users) {
    //         user.push([use.user,use.description])
    //     }
    //     const orgName = client[0].organizationName
    //     const proName = client[0].projectName
    //     const proScope = client[0].projectScope
    //     const notProScope = client[0].notProjectScope
    //     const ref = client[0].references
    //     const pers = client[0].perspective
    //     const data = {
    //         constraint,
    //         orgName,
    //         proName,
    //         proScope,
    //         notProScope,
    //         definition,
    //         ref,
    //         pers,
    //         requirement,
    //         process,
    //         user
    //     }

    //     res.send(data)

    // }).catch((e) => {
    //     res.send(e)
    // })
})

module.exports = router
