var x; // Declare interval variable globally to access it within both functions

// Function to start the countdown


function sendDistanceToServer(distance) {
    fetch('https://your-server-endpoint.com/api/distance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ distance: distance })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Function to stop the countdown
function stop() {
    // Clear the countdown interval
    if (x) {
        clearInterval(x);
    }
    fetch('http://esp32.local/off', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function start() {
    // Start the countdown
    fetch('http://esp32.local/on', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// document.getElementById("endTime").addEventListener("change", startCountdown);