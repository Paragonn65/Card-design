 const userInput = document.getElementById('input-number');
 const addBtn = document.getElementById('btn-add');
 const substractionBtn = document.getElementById('btn-subtract');
 const multiplyBtn = document.getElementById('btn-multiply');
 const divideBtn = document.getElementById('btn_divide');

 const currentResultOutput=document.getElementById('current-result');
 const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result,text){
    currentResultOutput.textContent=result;
    currentCalculationOutput.textContent = text; 
}