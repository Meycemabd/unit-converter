
const inputField = document.getElementById("eingabe-converter")
const meter = document.getElementById("meter")
const liter = document.getElementById("liter")
const kilogram = document.getElementById("Kilograms")



function length(){
    const inputValue = parseFloat(inputField.value)
    if (isNaN(inputValue)) {
        alert("Bitte geben Sie eine gültige Zahl ein.");
        return;
    }
    const meterTofeet = (inputValue * 3.28084).toFixed(3)
    const feetTometer = (inputValue / 3.28084).toFixed(3)
    const gallonToliter = (inputValue * 0.264172).toFixed(3)
    const literTogallon = (inputValue * 3.78541 ).toFixed(3)
    const kiloTopound = (inputValue* 2.20462).toFixed(3)
    const poundTokilo = (inputValue / 2.20462).toFixed(3)
    meter.textContent = `${inputValue} Meters = ${meterTofeet} feet | ${inputValue} feet = ${feetTometer} Meters`
    liter.textContent = `${inputValue} Liters = ${gallonToliter} Gallons | ${inputValue} Gallons = ${literTogallon} Liters` 
    kilogram.textContent = `${inputValue} Kilograms = ${kiloTopound} Pound | ${inputValue} Pound = ${poundTokilo} Kilograms`

    }