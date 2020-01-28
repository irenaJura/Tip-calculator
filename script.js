// store html elements to variables
const each = document.getElementById("each");
let totalTip = document.getElementById("totalTip");
let tip = document.getElementById("tip");
const button = document.getElementById("calculate");

// validate input
function calculateTip() {
    // get values from user
    let billAmt = document.getElementById("billamt").value;
    let service = document.getElementById("serviceQual").value;
    let peopleNum = document.getElementById("peopleamt").value;
        if (billAmt === "" || service === 0) {
            alert("Please enter values");
            return;
        }
        // check if number of people empty or less or equal to 1
        if (peopleNum === "" || peopleNum <= 1) {
            peopleNum = 1;
            each.style.display = "none";
        } else {
            each.style.display = "block";
        }
        let total = (billAmt * service) / peopleNum;
        // round to two decimals
        total = Math.round(total * 100) / 100;
        // make sure it always has two digits after decimal point
        total = total.toFixed(2);
        // display the tip
        totalTip.style.display = "block";
        tip.innerHTML = total;
}

button.addEventListener("click", calculateTip);

