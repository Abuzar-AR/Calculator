const display = document.getElementById("display");

function appendNumber(num) {
  if (display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + op;
  } else {
    display.innerText += op;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
}
function backspace() {
    if (display.innerText.length === 1 || display.innerText === "Error") {
      display.innerText = "0";
    } else {
      display.innerText = display.innerText.slice(0, -1);
    }
  }

document.addEventListener("keydown", function (event) {
    const key = event.key;
  
    if (!isNaN(key)) {
      appendNumber(key);
    } else if ("+-*/".includes(key)) {
      appendOperator(key);
    } else if (key === "Enter" || key === "=") {
      event.preventDefault();
      calculate();
    } else if (key === "Backspace") {
      event.preventDefault();
      backspace();
    } else if (key === "Escape") {
      clearDisplay();
    } else if (key === ".") {
      appendNumber(".");
    }
  });
    
