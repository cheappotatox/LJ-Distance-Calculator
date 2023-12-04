function calculateAdjustedTopSpeed() {
    const userTime = parseFloat(document.getElementById("userTime").value);

    if (isNaN(userTime) || userTime <= 0) {
        alert("Please enter a valid positive numeric value for the 100m time.");
        return;
    }

    const splitTime = parseFloat(document.getElementById("splitTime").value);

    if (isNaN(splitTime) || splitTime <= 0) {
        alert("Please enter a valid positive numeric value for the 60m time.");
        return;
    }

    if (splitTime > userTime) {
        alert("60m time cannot be greater than 100m time!");
        return;
    }

    let adjustedSpeed;

    if (60 / splitTime >= 100 / userTime) {
        adjustedSpeed = 60 / splitTime;
    } else {
        const estimatedTopSpeed = userTime > 16 ?
            100 / userTime * Math.pow(1.02, 2) :
            100 / userTime * Math.pow(((18 - userTime) / 100 + 1), 2);

        adjustedSpeed = estimatedTopSpeed * (2 * (splitTime / userTime) - 0.3);
    }

    document.getElementById("result").innerHTML = `Your estimated top speed is: ${adjustedSpeed.toFixed(3)} m/s`;
}