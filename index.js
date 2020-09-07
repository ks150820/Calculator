function getHistory(){
    return document.getElementById("history").innerText;
}
function printHistory(num){
    return document.getElementById("history").innerText=num;
}

function getOutput(){
    return document.getElementById("result").innerText;
}
function printOutput(num){
   if(num==" "){
    return document.getElementById("result").innerText=num;
   }else{
    return document.getElementById("result").innerText=getFormattedNumber(num);
   }
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");

    return value;
}

function ReverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var numbers=document.getElementsByClassName("number");
for(var i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function(){
        var output=ReverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}

var operators=document.getElementsByClassName("operator");
for(var i=0;i<operators.length;i++){
    operators[i].addEventListener("click",function(){
            if(this.id=="clear"){
                printHistory("");
                printOutput("");
            }
            else if(this.id=="backspace"){
                var output=ReverseNumberFormat(getOutput()).toString();
                if(output){
                    output=output.substr(0,output.length-1);
                    printOutput(output);
                }
            }else{
                var output=getOutput();
                var history=getHistory();
                if(output=="" && history!=""){
                    if(isNaN(history[history.length-1])){
                        history=history.substr(0,history.length-1);
                    }
                }
                if(output!="" || history!=""){
                    output=output==""?output:ReverseNumberFormat(output);
                    history=history+output;
                    if(this.id=="="){
                        var resulted=eval(history);
                        printOutput(resulted);
                        printHistory("");
                    }else{
                        history=history+this.id;
                        printHistory(history);
                        printOutput(" ");
                    }
                }
            }
            
    });
}


