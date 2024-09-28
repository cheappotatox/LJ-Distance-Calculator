function calculateLongJumpDistance() {
    const userSpeed = parseFloat(document.getElementById("userSpeed").value);

    if (isNaN(userSpeed) || userSpeed <= 0) {
        alert("Please enter a valid positive numeric value for your approach velocity.");
        return;
    }

    const userLength = parseFloat(document.getElementById("userLength").value);

    if (isNaN(userLength) || userLength <= 0) {
        alert("Please enter a valid positive numeric value for the length of your greater trochanter.");
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
            kMin = 0.97;
            kMax = 0.99;
            break;
        case "neutral":
            kMin = 0.99;
            kMax = 1.01;
            break;
        case "power":
            kMin = 1.01;
            kMax = 1.03;
            break;
        default:
            alert("Invalid jumper type selected.");
            return;
    }

    const g = 9.80665; // acceleration due to gravity in m/s^2
    const sin42 = 0.66913; // approximate value of sin(42 degrees)

    const term1 = Math.pow(userSpeed, 2) * sin42 / g;
    const term2 = userLength * sin42;

    const longJumpDistanceMin = (term1 + term2) * kMin;
    const longJumpDistanceMax = (term1 + term2) * kMax;

    document.getElementById("result").innerHTML = `Your predicted long jump range: ${longJumpDistanceMin.toFixed(2)} m to ${longJumpDistanceMax.toFixed(2)} m`;
}
