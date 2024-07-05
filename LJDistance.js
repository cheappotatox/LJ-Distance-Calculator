function calculateLongJumpDistance() {
    const userSpeed = parseFloat(document.getElementById("userSpeed").value);

    if (isNaN(userSpeed) || userSpeed <= 0) {
        alert("Please enter a valid positive numeric value for your approach velocity.");
        return;
    }

    const userLength = parseFloat(document.getElementById("userLength").value);

    if (isNaN(userLength) || userLength <= 0) {
        alert("Please enter a valid positive numeric value for your apparent leg length.");
        return;
    }

    const jumperType = document.querySelector('input[name="jumperType"]:checked');
    if (!jumperType) {
        alert("Please select your jumper type.");
        return;
    }

    let kMin, kMax;
    switch (jumperType.value) {
        case "speed":
            kMin = 1.00;
            kMax = 1.04;
            break;
        case "neutral":
            kMin = 1.04;
            kMax = 1.08;
            break;
        case "power":
            kMin = 1.08;
            kMax = 1.12;
            break;
        default:
            alert("Invalid jumper type selected.");
            return;
    }

    const g = 9.807; // acceleration due to gravity in m/s^2
    const sin67_5 = 0.92388; // approximate value of sin(67.5 degrees)
    const sin45 = 0.7071; // approximate value of sin(45 degrees)

    const term1 = Math.pow(userSpeed * sin67_5, 2) / g * sin45;
    const term2 = userLength * sin67_5;

    const longJumpDistanceMin = (term1 + term2) * kMin * 0.95;
    const longJumpDistanceMax = (term1 + term2) * kMax * 0.95;

    document.getElementById("result").innerHTML = `Your estimated long jump range: ${longJumpDistanceMin.toFixed(2)} m to ${longJumpDistanceMax.toFixed(2)} m`;
}
