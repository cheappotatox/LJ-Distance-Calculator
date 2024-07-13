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
            kMin = 1.02;
            kMax = 1.04;
            break;
        case "neutral":
            kMin = 1.04;
            kMax = 1.06;
            break;
        case "power":
            kMin = 1.06;
            kMax = 1.08;
            break;
        default:
            alert("Invalid jumper type selected.");
            return;
    }

    const g = 9.80665; // acceleration due to gravity in m/s^2
    const sin69 = 0.93358; // approximate value of sin(69 degrees)
    const sin42 = 0.66913; // approximate value of sin(42 degrees)

    const term1 = Math.pow(userSpeed * sin69, 2) / g * sin42;
    const term2 = userLength * sin69;

    const longJumpDistanceMin = (term1 + term2) * kMin;
    const longJumpDistanceMax = (term1 + term2) * kMax;

    document.getElementById("result").innerHTML = `Your estimated long jump range: ${longJumpDistanceMin.toFixed(2)} m to ${longJumpDistanceMax.toFixed(2)} m`;
}
