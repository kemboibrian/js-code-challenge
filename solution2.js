//Speed detector check

function checkCarSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint); // to calculate derimit point(s)
        if (points >= 12) {
            console.log("License suspended"); // since dermit points exceed 12
        } else {
            console.log("Points:", points); // to show demerit points
        }
    }
}
checkCarSpeed() // checks speed

// for instance
checkCarSpeed(80); // Should print: "Points:2"
