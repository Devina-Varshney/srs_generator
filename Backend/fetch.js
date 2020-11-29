const proxyurl = "https://cors-anywhere.herokuapp.com/";
const loc = "localhost:3000"
// const hosted = "https://svk-software-project.herokuapp.com"
const url = "/srs";
 // site that doesn’t send Access-Control-*

fetch(url).then(function(response) {   //proxyurl + url
  return response.json();
}).then(function(json) {

  if (json.constraint[0] != undefined) {
    document.getElementById('const1').innerHTML=json.constraint[0]
  }
  if (json.constraint[1] != undefined) {
    document.getElementById('const2').innerHTML=json.constraint[1]
  }
  if (json.constraint[2] != undefined) {
    document.getElementById('const3').innerHTML=json.constraint[2]
  }
  if (json.constraint[3] != undefined) {
    document.getElementById('const4').innerHTML=json.constraint[3]
  }
  if (json.constraint[4] != undefined) {
    document.getElementById('const5').innerHTML=json.constraint[4]
  }
  if (json.constraint[5] != undefined) {
    document.getElementById('const6').innerHTML=json.constraint[5]
  }

  if (json.orgName != undefined) {
    document.getElementById('orgname').innerHTML=json.orgName
  }
  if (json.proName != undefined) {
    document.getElementById('proname').innerHTML=json.proName
    document.getElementById('proname2').innerHTML=json.proName
    document.getElementById('proname3').innerHTML=json.proName
    document.getElementById('proname4').innerHTML=json.proName
    document.getElementById('proname5').innerHTML=json.proName
    document.getElementById('proname6').innerHTML=json.proName
    document.getElementById('proname7').innerHTML=json.proName
    document.getElementById('proname8').innerHTML=json.proName
    document.getElementById('proname9').innerHTML=json.proName
  }
  if (json.proScope != undefined) {
    document.getElementById('proscope').innerHTML=json.proScope
  }
  if (json.notProScope != undefined) {
    document.getElementById('notproscope').innerHTML=json.notProScope
  }
  if (json.definition[0] != undefined) {
    document.getElementById('def1').innerHTML=json.definition[0][0]
    document.getElementById('des1').innerHTML=json.definition[0][1]
  }
  if (json.definition[1] != undefined) {
    document.getElementById('def2').innerHTML=json.definition[1][0]
    document.getElementById('des2').innerHTML=json.definition[1][1]
  }
  if (json.definition[2] != undefined){
    document.getElementById('def3').innerHTML=json.definition[2][0]
    document.getElementById('des3').innerHTML=json.definition[2][1]
  }
  if (json.refer[0] != undefined){
    document.getElementById('ref1').innerHTML=json.refer[0][0]
    document.getElementById('refdescrip1').innerHTML=json.refer[0][1]
  }
  if (json.refer[1] != undefined){
    document.getElementById('ref2').innerHTML=json.refer[1][0]
    document.getElementById('refdescrip2').innerHTML=json.refer[1][1]
  }
  if (json.refer[2] != undefined){
    document.getElementById('ref3').innerHTML=json.refer[2][0]
    document.getElementById('refdescrip3').innerHTML=json.refer[2][1]
  }
  if (json.pers != undefined) {
    document.getElementById('pers').innerHTML=json.pers
  }
  if (json.requirement[0] != undefined){
    document.getElementById('req1').innerHTML=json.requirement[0]
  }
  if (json.requirement[1] != undefined){
    document.getElementById('req2').innerHTML=json.requirement[1]
  }
  if (json.requirement[2] != undefined){
    document.getElementById('req3').innerHTML=json.requirement[2]
  }
  if (json.requirement[3] != undefined){
    document.getElementById('req4').innerHTML=json.requirement[3]
  }
  if (json.requirement[4] != undefined){
    document.getElementById('req5').innerHTML=json.requirement[4]
  }
  if (json.requirement[5] != undefined){
    document.getElementById('req6').innerHTML=json.requirement[5]
  }
  if (json.process[0] != undefined) {
    document.getElementById('sys1').innerHTML=json.process[0][0]
    document.getElementById('intro1').innerHTML=json.process[0][1]
    document.getElementById('pur1').innerHTML=json.process[0][2]
    document.getElementById('in1').innerHTML=json.process[0][3]
    document.getElementById('proc1').innerHTML=json.process[0][4]
    document.getElementById('out1').innerHTML=json.process[0][5]
  }
  if (json.process[1] != undefined) {
    document.getElementById('sys2').innerHTML=json.process[1][0]
    document.getElementById('intro2').innerHTML=json.process[1][1]
    document.getElementById('pur2').innerHTML=json.process[1][2]
    document.getElementById('in2').innerHTML=json.process[1][3]
    document.getElementById('proc2').innerHTML=json.process[1][4]
    document.getElementById('out2').innerHTML=json.process[1][5]
  }
  if (json.process[2] != undefined) {
    document.getElementById('sys3').innerHTML=json.process[2][0]
    document.getElementById('intro3').innerHTML=json.process[2][1]
    document.getElementById('pur3').innerHTML=json.process[2][2]
    document.getElementById('in3').innerHTML=json.process[2][3]
    document.getElementById('proc3').innerHTML=json.process[2][4]
    document.getElementById('out3').innerHTML=json.process[2][5]
  }
  if (json.user[0] != undefined) {
    document.getElementById('user1').innerHTML=json.user[0][0]
    document.getElementById('desc1').innerHTML=json.user[0][1]
  }
  if (json.user[1] != undefined) {
    document.getElementById('user2').innerHTML=json.user[1][0]
    document.getElementById('desc2').innerHTML=json.user[1][1]
  }
  if (json.user[2] != undefined) {
    document.getElementById('user3').innerHTML=json.user[2][0]
    document.getElementById('desc3').innerHTML=json.user[2][1]
  }
  if (json.dict[0] != undefined) {
    document.getElementById('name11').innerHTML=json.dict[0][0]
    document.getElementById('name12').innerHTML=json.dict[0][0]
    document.getElementById('aliase1').innerHTML=json.dict[0][1]
    document.getElementById('used1').innerHTML=json.dict[0][2]
    document.getElementById('dictdescrip1').innerHTML=json.dict[0][3]
    document.getElementById('info1').innerHTML=json.dict[0][4]
  }
  if (json.dict[1] != undefined) {
    document.getElementById('name21').innerHTML=json.dict[1][0]
    document.getElementById('name22').innerHTML=json.dict[1][0]
    document.getElementById('aliase2').innerHTML=json.dict[1][1]
    document.getElementById('used2').innerHTML=json.dict[1][2]
    document.getElementById('dictdescrip2').innerHTML=json.dict[1][3]
    document.getElementById('info2').innerHTML=json.dict[1][4]
  }
  if (json.assumption[0] != undefined) {
    document.getElementById('assump1').innerHTML=json.assumption[0][0]
    document.getElementById('assumpdescrip1').innerHTML=json.assumption[0][1]
  } 
  if (json.assumption[1] != undefined) {
    document.getElementById('assump2').innerHTML=json.assumption[1][0]
    document.getElementById('assumpdescrip2').innerHTML=json.assumption[1][1]
  } 
  if (json.assumption[2] != undefined) {
    document.getElementById('assump3').innerHTML=json.assumption[2][0]
    document.getElementById('assumpdescrip3').innerHTML=json.assumption[2][1]
  } 
  if (json.perform[0] != undefined) {
    document.getElementById('perf1').innerHTML=json.perform[0][0]
    document.getElementById('perfdescrip1').innerHTML=json.perform[0][1]
  }
  if (json.perform[1] != undefined) {
    document.getElementById('perf2').innerHTML=json.perform[1][0]
    document.getElementById('perfdescrip2').innerHTML=json.perform[1][1]
  }
  if (json.perform[2] != undefined) {
    document.getElementById('perf3').innerHTML=json.perform[2][0]
    document.getElementById('perfdescrip3').innerHTML=json.perform[2][1]
  }
  if (json.design[0] != undefined) {
    document.getElementById('design1').innerHTML=json.design[0][0]
    document.getElementById('designdescrip1').innerHTML=json.design[0][1]
  }
  if (json.design[1] != undefined) {
    document.getElementById('design2').innerHTML=json.design[1][0]
    document.getElementById('designdescrip2').innerHTML=json.design[1][1]
  }
  if (json.stand[0] != undefined) {
    document.getElementById('stand1').innerHTML=json.stand[0][0]
    document.getElementById('standdescrip1').innerHTML=json.stand[0][1]
  }
  if (json.stand[1] != undefined) {
    document.getElementById('stand2').innerHTML=json.stand[1][0]
    document.getElementById('standdescrip2').innerHTML=json.stand[1][1]
  }
  if (json.stand[2] != undefined) {
    document.getElementById('stand3').innerHTML=json.stand[2][0]
    document.getElementById('standdescrip3').innerHTML=json.stand[2][1]
  }
  if (json.reliability != undefined) {
    document.getElementById('reliability').innerHTML=json.reliability
  }
  if (json.security != undefined) {
    document.getElementById('security').innerHTML=json.security
  }
  if (json.maintainability != undefined) {
    document.getElementById('maintainability').innerHTML=json.maintainability
  }
  if (json.portability != undefined) {
    document.getElementById('portability').innerHTML=json.portability
  }
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});



// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then((contents) => {
//     document.getElementById('here').innerHTML=contents
// })
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

// fetch(proxyurl + url).then((response)=>{
//     document.getElementById('here').innerHTML=response.constraint
//   }).catch((err)=>{
//       console.log('rejected', err);
//   });

// $( document ).ready(function() {
  
//     // GET REQUEST
//     $("#allUsers").click(function(event){
//       event.preventDefault();
//       ajaxGet();
//     });
    
//     // DO GET
//     function ajaxGet(){
//       $.ajax({
//         type : "GET",
//         url : "localhost:3000/srs",
//         success: function(result){
//           $('#getResultDiv ul').empty();
//           $.each(result, function(i, user){
//             //$('#getResultDiv .list-group').append(user)
//           });
//           console.log("Success: ", result);
//         },
//         error : function(e) {
//           $("#getResultDiv").html("<strong>Error</strong>");
//           console.log("ERROR: ", e);
//         }
//       });  
//     }
//   })