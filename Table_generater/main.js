let tableNumber = document.querySelector("#tableNumber");
let tableLength = document.querySelector("#tablerange");
let Btn = document.querySelector("#Btn");

let resultBox = document.querySelector(".result-Box");

// console.log(resultBox.innerText);

// console.log(tableNumber.value);
// console.log(Btn.innerText);
function genrateTable() {
  resultBox.innerText = "";
  for (let i = 1; i <= tableLength.value; i++) {
    resultBox.innerText =
      resultBox.innerText +
      `${tableNumber.value} x ${i} = ${tableNumber.value * i} \n`;
  }
}
Btn.onclick = () => {
  genrateTable();
};
