const country = ["Afghanistan","Albania","Algeria","India","Brazil","Brunei","Canada","China","Denmark","Germany"];

const generateBtn = document.getElementById("countryGenerateBtn");
const countrys = document.querySelector(".country");

//generator random number
generateRandomNumber = () => {
    return Math.floor(Math.random()*country.length);
}

//generate random color
generateBtn.addEventListener("click", () => {
    countrys.textContent = country[generateRandomNumber()];
})