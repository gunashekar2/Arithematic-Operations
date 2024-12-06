// if their is any history in local storage it will give this
historyFromLS= localStorage.getItem("history");
document.getElementById('history').innerHTML = historyFromLS;



 
 function clearHistory(){
    localStorage.setItem("history",""); 
    window.location.reload();
    
 }
 
 function calculate() {
    let numA = document.getElementById('numA').value;
    let numB = document.getElementById('numB').value;
    let operation = document.getElementById('operation').value;
    let res; 
    let iscorrect =true; 

    if(numA== null || numA === ""){
        document.getElementById('numAError').innerHTML="Inputs cannot be left blank.";
        iscorrect = false;
    }
    else if(!numA.match(/^[0-9]+$/)){
        document.getElementById('numAError').innerHTML="Please enter valid numbers.";
        iscorrect = false;
    }
    else{
        document.getElementById('numAError').innerHTML="";
    }
    if(numB == null || numB == ""){
        document.getElementById('numBError').innerHTML="Inputs cannot be left blank.";
        iscorrect = false;
    }
    else if(!numB.match(/^[0-9]+$/)){
        document.getElementById('numBError').innerHTML="Please enter valid numbers.";
        iscorrect = false;
    }
    else{
        document.getElementById('numBError').innerHTML="";
    }
    if(operation == "empty"){
        document.getElementById('operationError').innerHTML="Select Any one Operation.";
        iscorrect = false;
    }
    else{
        document.getElementById('operationError').innerHTML="";
    }

    if(iscorrect){
       let  op = "";
        if(operation == "Addition"){        
            res =Number(numA)+Number(numB);
            op ="+";
        }
        else if(operation == "Substraction"){
            res =Number(numA)-Number(numB);
            op ="-";
        }
        else if(operation == "Multiplication"){
            res = Number(numA)*Number(numB);
            op ="*";

        }
        else if(operation == "Division"){
            if(numB == 0){
               document.getElementById('operationError').innerHTML="Division by zero is not allowed.";
            }
            res = Number(numA)/Number(numB);
            op ="/";
        }
        innerTxt=` ${numA} ${op} ${numB} = ${res}`;
        document.getElementById('result').innerHTML =innerTxt;
        historyFromLS= localStorage.getItem("history");
        document.getElementById('history').innerHTML = historyFromLS;

        localStorage.setItem("history",innerTxt+"<br>"+historyFromLS);
        document.getElementById('history').innerHTML = localStorage.getItem("history");
    }
    
    
 }



