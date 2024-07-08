let btn = document.getElementById("btn");
let clearBtn = document.getElementById("clearBtn");
let result = document.getElementById("result");

function ageFinder() {
  let currentYear = document.getElementById("currentYear").value;
  let birthYear = document.getElementById("birthYear").value;
  let ageCalculate = currentYear - birthYear;
  result.innerText = `you are ${ageCalculate} year's old now`;
}

function clearResult() {
  document.getElementById("currentYear").value = "";
  document.getElementById("birthYear").value = "";
  result.innerText = "";
}
// ageFinder();
