const numberButtons = document.querySelectorAll("[data-number]");
const operandButtons = document.querySelectorAll("[data-operand]");
const delButton = document.querySelector("[data-del]");
const dotButton = document.querySelector("[data-dot]");
const resetButton = document.querySelector("[data-reset]");
const equalButton = document.querySelector("[data-equal]");
const result = document.getElementById("result");
let resultValue = "0";
const numberMap = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operandMap = ["+", "-", "÷", "×"];

console.log(numberButtons);
for (let index = 0; index < 10; index++) {
  const element = numberButtons[index];
  element.addEventListener("click", function () {
    addNumber(index);
  });
}

for (let index = 0; index < 4; index++) {
  const element = operandButtons[index];
  element.addEventListener("click", function () {
    addOperand(index);
  });
}

delButton.addEventListener("click", delFunction);
resetButton.addEventListener("click", resetFunction);
equalButton.addEventListener("click", calcResult);
dotButton.addEventListener("click", addDot);

function addNumber(index) {
  if (afterEqualFlag) {
    resultValue = "";
    result.innerHTML = resultValue;
    afterEqualFlag = false;
  }
  const number = numberMap[index];
  if (resultValue === "0") {
    resultValue = "";
  }
  resultValue += number;
  result.innerHTML = resultValue;
  operandFlag = false;
}

let preOperand = "";
let operandFlag = false;

function addOperand(index) {
  afterEqualFlag = false;
  const operand = operandMap[index];
  if (operandFlag === false) {
    resultValue += operand;
    result.innerHTML = resultValue;
    operandFlag = true;
  } else {
    resultValue = resultValue.slice(0, resultValue.length - 1);
    resultValue += operand;
    result.innerHTML = resultValue;
    console.log(resultValue);
    operandFlag = true;
  }
}

function delFunction() {
  if (afterEqualFlag) {
    resetFunction();
    afterEqualFlag = false;
  }
  resultValue = resultValue.slice(0, resultValue.length - 1);
  result.innerHTML = resultValue;
  if (operandFlag) {
    operandFlag = false;
  } else {
    operandFlag = true;
  }
  console.log(resultValue);
}
function resetFunction() {
  afterEqualFlag = false;
  resultValue = "";
  result.innerHTML = resultValue;
}

let afterEqualFlag = false;

function calcResult() {
  let preNum = 0,
    num = 0,
    lastOperand = "+";
  let operandPos = 0;
  while (true) {
    const operand = findFirstOperand();
    num = Number(resultValue.slice(0, operand));
    console.log(num);
    if (lastOperand === "+") {
      preNum += num;
    }
    if (lastOperand === "-") {
      console.log(1);
      preNum -= num;
    }
    if (lastOperand === "÷") {
      preNum /= num;
    }
    if (lastOperand === "×") {
      preNum *= num;
    }
    lastOperand = resultValue[operand];
    resultValue = resultValue.slice(operand + 1, resultValue.length);
    console.log(lastOperand);
    console.log(preNum);
    console.log(resultValue);

    if (operand === Infinity) {
      break;
    }
  }
  preNum = Math.round(preNum * 10000) / 10000;
  result.innerHTML = "=" + preNum;
  resultValue = preNum;
  afterEqualFlag = true;
}

function findFirstOperand() {
  let operandPos = [];
  operandPos.push(resultValue.indexOf("+"));
  operandPos.push(resultValue.indexOf("-"));
  operandPos.push(resultValue.indexOf("÷"));
  operandPos.push(resultValue.indexOf("×"));
  let min = Infinity;
  for (let index = 0; index < operandPos.length; index++) {
    const element = operandPos[index];
    if (element > 0 && element < min) {
      min = element;
    }
  }
  return min;
}

function addDot() {
  resultValue += ".";
  result.innerHTML = resultValue;
}
