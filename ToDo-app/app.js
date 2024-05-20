let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let btn = document.querySelector("#btn");
let showData = document.querySelector("#showData");
let visitorID = 1000;

btn.onclick = () => {
  let newDate = new Date();
  let date = newDate.toLocaleDateString();
  let time = newDate.toLocaleTimeString();

  visitorID++;
  let NewvisitorRow = document.createElement("tr");
  showData.append(NewvisitorRow);
  NewvisitorRow.innerHTML = `<td>${visitorID}</td><td>${input1.value}</td><td>${input2.value}</td><td>${date}</td><td>${time}</td>`;

  NewvisitorRow.innerHTML = `${tablnmbr}x${i}= ${tablnmbr * i}`;
};
