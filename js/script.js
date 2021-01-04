function getHistory(){
    //obtener valor del historial
    return document.getElementById("history-value").innerText;
}   

function printHistory(num){
     document.getElementById("history-value").innerText = num;

}


function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutuput(num){
    if( num == ""){
        //si se recibe cadena vaci por el boton de borrado
        document.getElementById("output-value").innerText = "";
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en")//convertir numero a formato local (comas)
    return value;
}

function limpiar(){
    printHistory("");
    printOutuput("");
}
//regex
function reverseNumberFormat(num){
 return Number(num.replace(/,/g,""));
}

function retroceder(){
    var output = reverseNumberFormat(getOutput()).toString();
    if(output){
        //si output tiene valor
        output = output.substr(0,output.length-1);
        printOutuput(output);
    }
}

function numero(numero){
    var output = reverseNumberFormat(getOutput());

    if (output != NaN){//Not a number
        //si putput es un numero
        output = output + numero;
        printOutuput(output); 
    }
}

function operador(operador){
    var output = getOutput(); //obtener datos de output
    var history = getHistory(); //obtener datos de history
    if(output == "" && history != ""){
        if(isNaN(history.length-1)){
            //revisa si hay caracter al final del string
            history = history.substring(0,history.length-1);//traer string sin caracter
        }
        
    }
    if (output != "")
    {
        output = reverseNumberFormat(output);
    }
    history = history + output;
    if (operador == "="){
        var result = eval(history);
        printOutuput(result);
        printHistory("");
    }else{
        history = history + operador; //concatenar operador con history
        printHistory(history);
        printOutuput("");
    }

}

