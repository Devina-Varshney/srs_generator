function storeSRS() {
  var constraint1 = document.getElementById("con1").value;
  var constraint2 = document.getElementById("con2").value;
  var constraint3 = document.getElementById("con3").value;
  var constraint4 = document.getElementById("con4").value;
  var constraint5 = document.getElementById("con5").value;
  var constraint6 = document.getElementById("con6").value;
  var organizationName = document.getElementById("organizationName").value;
  var projectName = document.getElementById("projectName").value;
  var projectScope = document.getElementById("projectScope").value;
  var notProjectScope = document.getElementById("notProjectScope").value;

  var definition1 = document.getElementById("def1").value;
  var description1 = document.getElementById("des1").value;
  var definition2 = document.getElementById("def2").value;
  var description2 = document.getElementById("des2").value;
  var definition3 = document.getElementById("def3").value;
  var description3 = document.getElementById("des3").value;

  var perspective = document.getElementById("pers").value;

  var requirement1 = document.getElementById("req1").value;
  var requirement2 = document.getElementById("req2").value;
  var requirement3 = document.getElementById("req3").value;
  var requirement4 = document.getElementById("req4").value;
  var requirement5 = document.getElementById("req5").value;
  var requirement6 = document.getElementById("req6").value;

  var system1 = document.getElementById("sys1").value;
  var intro1 = document.getElementById("introd1").value;
  var purpose1 = document.getElementById("pur1").value;
  var input1 = document.getElementById("in1").value;
  var process1 = document.getElementById("proc1").value;
  var output1 = document.getElementById("out1").value;
  var system2 = document.getElementById("sys2").value;
  var intro2 = document.getElementById("introd2").value;
  var purpose2 = document.getElementById("pur2").value;
  var input2 = document.getElementById("in2").value;
  var process2 = document.getElementById("proc2").value;
  var output2 = document.getElementById("out2").value;
  var system3 = document.getElementById("sys3").value;
  var intro3 = document.getElementById("introd3").value;
  var purpose3 = document.getElementById("pur3").value;
  var input3 = document.getElementById("in3").value;
  var process3 = document.getElementById("proc3").value;
  var output3 = document.getElementById("out3").value;

  var user1 = document.getElementById("user1").value;
  var descriptionuser1 = document.getElementById("desc1").value;
  var user2 = document.getElementById("user2").value;
  var descriptionuser2 = document.getElementById("desc2").value;
  var user3 = document.getElementById("user3").value;
  var descriptionuser3 = document.getElementById("desc3").value;

  var reference1 = document.getElementById("ref1").value;
  var descriptionreference1 = document.getElementById("descrip1").value;
  var reference2 = document.getElementById("ref2").value;
  var descriptionreference2 = document.getElementById("descrip2").value;
  var reference3 = document.getElementById("ref3").value;
  var descriptionreference3 = document.getElementById("descrip3").value;

  var name1 = document.getElementById("name1").value;
  var aliase1 = document.getElementById("al1").value;
  var used1 = document.getElementById("use1").value;
  var info1 = document.getElementById("info1").value;
  var dictionarydescription1 = document.getElementById("description1").value;
  var name2 = document.getElementById("name2").value;
  var aliase2 = document.getElementById("al2").value;
  var used2 = document.getElementById("use2").value;
  var info2 = document.getElementById("info2").value;
  var dictionarydescription2 = document.getElementById("description2").value;

  var assump1 = document.getElementById("as1").value;
  var descriptionassump1 = document.getElementById("de1").value;
  var assump2 = document.getElementById("as2").value;
  var descriptionassump2 = document.getElementById("de2").value;
  var assump3 = document.getElementById("as3").value;
  var descriptionassump3 = document.getElementById("de3").value;

  var perf1 = document.getElementById("perf1").value;
  var perfdescription1 = document.getElementById("descr1").value;
  var perf2 = document.getElementById("perf2").value;
  var perfdescription2 = document.getElementById("descr2").value;
  var perf3 = document.getElementById("perf3").value;
  var perfdescription3 = document.getElementById("descr3").value;

  var design1 = document.getElementById("design1").value;
  var designdescription1 = document.getElementById("defit1").value;
  var design2 = document.getElementById("design2").value;
  var designdescription2 = document.getElementById("defit2").value;

  var stand1 = document.getElementById("stand1").value;
  var standdescription1 = document.getElementById("descript1").value;
  var stand2 = document.getElementById("stand2").value;
  var standdescription2 = document.getElementById("descript2").value;
  var stand3 = document.getElementById("stand3").value;
  var standdescription3 = document.getElementById("descript3").value;

  var reliability = document.getElementById("reliability").value;
  var security = document.getElementById("security").value;
  var maintainability = document.getElementById("maintainability").value;
  var portability = document.getElementById("portability").value;

  var dfdinput1 = document.getElementById("dfdin1").value;
  var dfdprocess1 = document.getElementById("dfdproc1").value;
  var dfdoutput1 = document.getElementById("dfdout1").value;
  var dfdinput2 = document.getElementById("dfdin2").value;
  var dfdprocess2 = document.getElementById("dfdproc2").value;
  var dfdoutput2 = document.getElementById("dfdout2").value;
  var dfdinput3 = document.getElementById("dfdin3").value;
  var dfdprocess3 = document.getElementById("dfdproc3").value;
  var dfdoutput3 = document.getElementById("dfdout3").value;
  var dfdinput4 = document.getElementById("dfdin4").value;
  var dfdprocess4 = document.getElementById("dfdproc4").value;
  var dfdoutput4 = document.getElementById("dfdout4").value;
  var dfdinput5 = document.getElementById("dfdin5").value;
  var dfdprocess5 = document.getElementById("dfdproc5").value;
  var dfdoutput5 = document.getElementById("dfdout5").value;
  var dfdinput6 = document.getElementById("dfdin6").value;
  var dfdprocess6 = document.getElementById("dfdproc6").value;
  var dfdoutput6 = document.getElementById("dfdout6").value;

  var stdfrom1 = document.getElementById("stdfrom1").value;
  var stdto1 = document.getElementById("stdto1").value;
  var stdtrans1 = document.getElementById("stdtrans1").value;
  var stdfrom2 = document.getElementById("stdfrom2").value;
  var stdto2 = document.getElementById("stdto2").value;
  var stdtrans2 = document.getElementById("stdtrans2").value;
  var stdfrom3 = document.getElementById("stdfrom3").value;
  var stdto3 = document.getElementById("stdto3").value;
  var stdtrans3 = document.getElementById("stdtrans3").value;
  var stdfrom4 = document.getElementById("stdfrom4").value;
  var stdto4 = document.getElementById("stdto4").value;
  var stdtrans4 = document.getElementById("stdtrans4").value;
  var stdfrom5 = document.getElementById("stdfrom5").value;
  var stdto5 = document.getElementById("stdto5").value;
  var stdtrans5 = document.getElementById("stdtrans5").value;
  var stdfrom6 = document.getElementById("stdfrom6").value;
  var stdto6 = document.getElementById("stdto6").value;
  var stdtrans6 = document.getElementById("stdtrans6").value;
  var stdfrom7 = document.getElementById("stdfrom7").value;
  var stdto7 = document.getElementById("stdto7").value;
  var stdtrans7 = document.getElementById("stdtrans7").value;
  var stdfrom8 = document.getElementById("stdfrom8").value;
  var stdto8 = document.getElementById("stdto8").value;
  var stdtrans8 = document.getElementById("stdtrans8").value;
  var stdfrom9 = document.getElementById("stdfrom9").value;
  var stdto9 = document.getElementById("stdto9").value;
  var stdtrans9 = document.getElementById("stdtrans9").value;
  var stdfrom10 = document.getElementById("stdfrom10").value;
  var stdto10 = document.getElementById("stdto10").value;
  var stdtrans10 = document.getElementById("stdtrans10").value;

  const dataSRS = {
    constraints: [
      { const: constraint1 },
      { const: constraint2 },
      { const: constraint3 },
      { const: constraint4 },
      { const: constraint5 },
      { const: constraint6 },
    ],
    organizationName: organizationName,
    projectName: projectName,
    projectScope: projectScope,
    notProjectScope: notProjectScope,
    definitions: [
      { definition: definition1, description: description1 },
      { definition: definition2, description: description2 },
      { definition: definition3, description: description3 },
    ],
    references: [
      { reference: reference1, description: descriptionreference1 },
      { reference: reference2, description: descriptionreference2 },
      { reference: reference3, description: descriptionreference3 },
    ],
    perspective: perspective,
    requirements: [
      { req: requirement1 },
      { req: requirement2 },
      { req: requirement3 },
      { req: requirement4 },
      { req: requirement5 },
      { req: requirement6 },
    ],
    processes: [
      {
        system: system1,
        intro: intro1,
        purpose: purpose1,
        input: input1,
        process: process1,
        output: output1,
      },
      {
        system: system2,
        intro: intro2,
        purpose: purpose2,
        input: input2,
        process: process2,
        output: output2,
      },
      {
        system: system3,
        intro: intro3,
        purpose: purpose3,
        input: input3,
        process: process3,
        output: output3,
      },
    ],
    users: [
      { user: user1, description: descriptionuser1 },
      { user: user2, description: descriptionuser2 },
      { user: user3, description: descriptionuser3 },
    ],
    dictionary: [
      {
        name: name1,
        aliase: aliase1,
        used: used1,
        description: dictionarydescription1,
        info: info1,
      },
      {
        name: name2,
        aliase: aliase2,
        used: used2,
        description: dictionarydescription2,
        info: info2,
      },
    ],
    assumptions: [
      { assumption: assump1, description: descriptionassump1 },
      { assumption: assump2, description: descriptionassump2 },
      { assumption: assump3, description: descriptionassump3 },
    ],
    performance: [
      { requirement: perf1, description: perfdescription1 },
      { requirement: perf2, description: perfdescription2 },
      { requirement: perf3, description: perfdescription3 },
    ],
    designconstraint: [
      { constraint: design1, description: designdescription1 },
      { constraint: design2, description: designdescription2 },
    ],
    standards: [
      { standard: stand1, description: standdescription1 },
      { standard: stand2, description: standdescription2 },
      { standard: stand3, description: standdescription3 },
    ],
    reliability: reliability,
    security: security,
    maintainability: maintainability,
    portability: portability,
    dfdprocesses: [
      { input: dfdinput1, process: dfdprocess1, output: dfdoutput1 },
      { input: dfdinput2, process: dfdprocess2, output: dfdoutput2 },
      { input: dfdinput3, process: dfdprocess3, output: dfdoutput3 },
      { input: dfdinput4, process: dfdprocess4, output: dfdoutput4 },
      { input: dfdinput5, process: dfdprocess5, output: dfdoutput5 },
      { input: dfdinput6, process: dfdprocess6, output: dfdoutput6 },
    ],
    stdtransitions: [
      { from: stdfrom1, to: stdto1, transition: stdtrans1 },
      { from: stdfrom2, to: stdto2, transition: stdtrans2 },
      { from: stdfrom3, to: stdto3, transition: stdtrans3 },
      { from: stdfrom4, to: stdto4, transition: stdtrans4 },
      { from: stdfrom5, to: stdto5, transition: stdtrans5 },
      { from: stdfrom6, to: stdto6, transition: stdtrans6 },
      { from: stdfrom7, to: stdto7, transition: stdtrans7 },
      { from: stdfrom8, to: stdto8, transition: stdtrans8 },
      { from: stdfrom9, to: stdto9, transition: stdtrans9 },
      { from: stdfrom10, to: stdto10, transition: stdtrans10 },
    ],
  };

  $.ajax({
    type: "POST",
    url: "/start",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(dataSRS),
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
}

//Working

// $(document).ready(function(){

//     $.ajax({
//         type: "POST",
//         url: "https://svk-software-project.herokuapp.com/start",
//         dataType: "json",
//         contentType: "application/json; charset=utf-8",
//         data: JSON.stringify({
//             "constraints": [{
//                 "const": "123"
//             }, {
//                 "const": "456"
//             }],
//             "organizationName": "ABC",
//             "projectName": "DEF",
//             "projectScope": "GHI",
//             "notProjectScope": "JKL",
//             "definitions": [{
//                 "definition": "123",
//                 "description": "456"
//             }, {
//                 "definition": "789",
//                 "description": "012"
//             }],
//             "references": "jhdba",
//             "perspective": "bjadbsa",
//             "requirements": [{
//                 "req": "r1"
//             }, {
//                 "req": "r2"
//             }],
//             "processes": [{
//                 "input": "i1",
//                 "process": "p1",
//                 "output": "o1"
//             }],
//             "users": [{
//                 "user": "u1",
//                 "description": "d1"
//             }]
//         }),
//         success: function(data){
//             console.log(data);
//         },
//         error: function(xhr,status,error){
//             console.log(error);
//         }
//     });
// });

// $.ajax({
//     type: "POST",
//     url: "http://localhost:3000/start",
//     data: { organizationName: "ABC" },
//     success: function(data) {
//       console.log('Check ', data);
//     },
//     error: function(jqXHR, textStatus, err) {
//         console.log('text status '+textStatus+', err '+err)
//     }
// });

// $.post('/start', {
//                     "constraints": [{
//                         "const": "Check"
//                     }, {
//                         "const": "456"
//                     }],
//                     "organizationName": "ABC",
//                     "projectName": "DEF",
//                     "projectScope": "GHI",
//                     "notProjectScope": "JKL",
//                     "definitions": [{
//                         "definition": "123",
//                         "description": "456"
//                     }, {
//                         "definition": "789",
//                         "description": "012"
//                     }],
//                     "references": "jhdba",
//                     "perspective": "bjadbsa",
//                     "requirements": [{
//                         "req": "r1"
//                     }, {
//                         "req": "r2"
//                     }],
//                     "processes": [{
//                         "input": "i1",
//                         "process": "p1",
//                         "output": "o1"
//                     }],
//                     "users": [{
//                         "user": "u1",
//                         "description": "d1"
//                     }]
// })

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://svk-software-project.herokuapp.com/srs";

// $(document).ready(function(){
//     $.ajax({
//         type: "POST",
//         url: proxyurl + url,
//         data: JSON.stringify({
//             "constraints": [{
//                 "const": "123"
//             }, {
//                 "const": "456"
//             }],
//             "organizationName": "ABC",
//             "projectName": "DEF",
//             "projectScope": "GHI",
//             "notProjectScope": "JKL",
//             "definitions": [{
//                 "definition": "123",
//                 "description": "456"
//             }, {
//                 "definition": "789",
//                 "description": "012"
//             }],
//             "references": "jhdba",
//             "perspective": "bjadbsa",
//             "requirements": [{
//                 "req": "r1"
//             }, {
//                 "req": "r2"
//             }],
//             "processes": [{
//                 "input": "i1",
//                 "process": "p1",
//                 "output": "o1"
//             }],
//             "users": [{
//                 "user": "u1",
//                 "description": "d1"
//             }]
//         }),
//         success: function(data){
//             console.log(data);
//         },
//         error: function(xhr,status,error){
//             console.log(error);
//         },
//         dataType: "json",
//         contentType: "application/json; charset=utf-8"
//     });
// });
