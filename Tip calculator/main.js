// getting all the element using queryselector and getElementById

const billAmount = document.getElementById("billAmount");
const tip_selection = document.getElementById("tip_selection");
const yesSplit = document.getElementById("yesSplit");
const noSplit = document.getElementById("noSplit");
const numberOfPeople = document.getElementById("peopleNumber");
const calculateTip = document.querySelector(".calculateTip");
const personInput = document.querySelector(".personInput");
const person_tip = document.querySelector(".person_tip");
const person_bill = document.querySelector(".person_bill");
const totalTipResult = document.querySelector("#totalTipResult");
const personTipResult = document.querySelector("#personTipResult");
const totalBillResult = document.querySelector("#totalBillResult");
const personBillResult = document.querySelector("#personBillResult");

// function to calculate the total tip 

function calculateTotalTip() {
  const res = Math.round(
    (Number(tip_selection.value) / 100) * Number(billAmount.value)
  );
  return res;
}

// function to calculate the per person tip 

function calculatePersonTip() {
  const res = Math.round(
    ((Number(tip_selection.value) / 100) * Number(billAmount.value)) /
      Number(numberOfPeople.value)
  );
  return res;
}

// function to calculate the total bill amount 

function calculateTotalBill() {
 const tip = calculateTotalTip();
 const res = Number(billAmount.value)+tip;
  return res;
}

// function to calculate the per person bill amount 

function calculatePersonBill() {
  const tip = calculateTotalBill();
  const res = tip / (Number(numberOfPeople.value));
  return res;
}
// function for calculating the tip
function tipCalculation() {
  calculateTotalTip();
  const res1 = calculateTotalTip();
  totalTipResult.innerHTML = `Rs. ${res1}`;
  calculatePersonTip();
  const res2 = calculatePersonTip();
  personTipResult.innerHTML = `Rs. ${res2}`;
  calculateTotalBill();
  const res3 = calculateTotalBill();
  totalBillResult.innerHTML = `Rs. ${res3}`;
  calculatePersonBill();
  const res4 = calculatePersonBill();
  personBillResult.innerHTML = `Rs. ${res4}`;
  billAmount.value="";
  tip_selection.value="";
  numberOfPeople.value="";
}

// logic for getting the value of radio buttons for yes and no
function yesSplitting() {
  if (yesSplit.checked) {
    personInput.style.display = "block";
    person_tip.style.opacity = "1";
    person_bill.style.opacity = "1";
  }
}
function noSplitting() {
  if (noSplit.checked) {
    personInput.style.display = "none";
    person_tip.style.opacity = "0";
    person_bill.style.opacity = "0";
  }
}
yesSplit.addEventListener("click", function () {
  yesSplitting();
});
noSplit.addEventListener("click", function () {
  noSplitting();
});

// logic for calculating the tip for the bill

calculateTip.addEventListener("click", function (e) {
  e.preventDefault();
  tipCalculation();
});
