const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumber() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber) {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${resultBeforeCalc} + ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
    }

addBtn.addEventListener('click', add);











