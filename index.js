const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthResultEl = document.getElementById("length-output");
const volumeResultEl = document.getElementById("volume-output");
const massResultEl = document.getElementById("mass-output");

convertBtn.addEventListener("click", function () {
  let inputValue = parseFloat(inputEl.value);

  let lengthInMeters = (inputValue * 0.3048).toFixed(3);

  let lengthInFeet = (inputValue * 3.28084).toFixed(3);

  let volumeInLiters = (inputValue * 0.264172).toFixed(3);

  let volumeInGallons = (inputValue * 3.78541).toFixed(3);

  let massInKilograms = (inputValue * 2.20462).toFixed(3);

  let massInPounds = (inputValue * 0.453592).toFixed(3);

  lengthResultEl.textContent = `${inputValue} meters = ${lengthInFeet} feet | ${inputValue} feet = ${lengthInMeters} meters.`;
  volumeResultEl.textContent = `${inputValue} liters = ${volumeInGallons} gallons | ${inputValue} gallons = ${volumeInLiters} liters.`;
  massResultEl.textContent = `${inputValue} kilos = ${massInPounds} pounds | ${inputValue} pounds = ${massInKilograms} kilos.`;

});