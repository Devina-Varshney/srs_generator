// $(document).ready(function () {
//     dynamicload();
// });

function dynamicload() {
    $("#txtNoOfRec").focus();
    $("#btnNoOfRec").click(function () {
        $("#AddControll").empty();
        var NoOfRec = $("#txtNoOfRec").val();
        if (NoOfRec > 0 && NoOfRec<=6) {
            createControll(NoOfRec);
        } else {
            alert("Value of number of processes must be less than or equal to 6");
        }
    });    
}
function createControll(NoOfRec) {
    if(NoOfRec>=1){
        var x = document.getElementsByClassName("dfdprocess1");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=2){
        var x = document.getElementsByClassName("dfdprocess2");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=3){
        var x = document.getElementsByClassName("dfdprocess3");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=4){
        var x = document.getElementsByClassName("dfdprocess4");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=5){
        var x = document.getElementsByClassName("dfdprocess5");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=6){
        var x = document.getElementsByClassName("dfdprocess6");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
}

function stddynamicload() {
    $("#txtNoOfRecstd").focus();
    $("#btnNoOfRecstd").click(function () {
        $("#AddControll").empty();
        var NoOfRec = $("#txtNoOfRecstd").val();
        if (NoOfRec > 0 && NoOfRec<=10) {
            stdcreateControll(NoOfRec);
        } else {
            alert("Value of number of Transitions must be less than or equal to 10");
        }
    });    
}
function stdcreateControll(NoOfRec) {
    if(NoOfRec>=1){
        var x = document.getElementsByClassName("stdtransition1");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=2){
        var x = document.getElementsByClassName("stdtransition2");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=3){
        var x = document.getElementsByClassName("stdtransition3");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=4){
        var x = document.getElementsByClassName("stdtransition4");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=5){
        var x = document.getElementsByClassName("stdtransition5");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=6){
        var x = document.getElementsByClassName("stdtransition6");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=7){
        var x = document.getElementsByClassName("stdtransition7");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=8){
        var x = document.getElementsByClassName("stdtransition8");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=9){
        var x = document.getElementsByClassName("stdtransition9");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
    if(NoOfRec>=10){
        var x = document.getElementsByClassName("stdtransition10");
        x[0].style.display = 'block';
        x[1].style.display = 'block';
        x[2].style.display = 'block';
    }
}