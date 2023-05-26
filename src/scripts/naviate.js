const singleInput = document.getElementById("singleInput");
const multiInput = document.getElementById("selection");

function getUserInput() {
    let boost = 0;
    if (multiInput.style.display === "none") {
        boost = parseInt(document.getElementById("singleInput").value) / 100 // /100 to make it %;
    }
    else if (singleInput.style.display === "none") {
        let features = document.getElementById("selection");
        console.log(features.childElementCount)
        for (let i = 0; i < features.childElementCount; i++) {
            if (features.children[i].checked) {
                boost += 2
            }

        }
        boost = boost / 100
    } 
    const users = parseInt(document.getElementById("users").value);
    const hours = parseInt(document.getElementById("hours").value) * 50 // *50 to make it per year;
    const revit = parseInt(document.getElementById("revit").value) / 100
    const wage = parseInt(document.getElementById("wage").value);
    
    let licenseCost = 1160
    if (users > 1) {
        licenseCost = 1500
    }
    console.log(boost, users, hours*revit, wage, licenseCost)
    calculateROI(boost, users, hours*revit, wage, licenseCost)
}

function calculateROI(boost, users, hours, wage, licenseCost) {
    const grossROI = (boost * users * hours * wage)
    const netROI = grossROI - licenseCost;
    const netROIHours = netROI / wage
    document.getElementById("savings").textContent = "Total Savings: €" + Math.round(netROI)
    document.getElementById("savingsHours").textContent = "Total Savings (hrs): " + Math.round(netROIHours)
}

function changeDisplay() {
    if (singleInput.style.display === "none") {
        singleInput.style.display  = "inline-block";
        multiInput.style.display  = "none";
    }
    else if (multiInput.style.display === "none") {
        multiInput.style.display  = "inline-block";
        singleInput.style.display  = "none";
    }

}