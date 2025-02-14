// ppg.js - Handles PPG waveform display and sensor updates

// Initialize PPG Chart
const ctx = document.getElementById("ppgChart").getContext("2d");
const ppgChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: Array(50).fill(""), // Placeholder X-axis
        datasets: [{
            label: "PPG Signal",
            borderColor: "yellow",
            data: Array(50).fill(0), // Placeholder Y-axis
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        animation: false,
        scales: {
            x: { display: false },
            y: { min: 0, max: 120 } // Adjust PPG range as needed
        }
    }
});

// Function to update PPG graph (Replace with real sensor data)
const updatePPG = () => {
    
    let newRate = Math.floor(Math.random() * 40 + 60); // Simulated PPG Rate
    document.getElementById("ppgRate").innerText = newRate;
    
    let newVoltage = (Math.random() * 40 + 60).toFixed(2); // Simulated PPG data
    let timestamp = new Date().toLocaleTimeString();

    ppgChart.data.datasets[0].data.shift();
    ppgChart.data.datasets[0].data.push(newVoltage);
    ppgChart.update();

    document.getElementById("voltage").innerText = newVoltage + " V";
    document.getElementById("timestamp").innerText = timestamp;
};

// Function to update sensor values (Replace with real data)
const updateSensors = () => {
    document.getElementById("heartRate").innerText = Math.floor(Math.random() * 40 + 60);
    document.getElementById("temperature").innerText = (Math.random() * 2 + 36).toFixed(1);
    document.getElementById("ecg").innerText = Math.floor(Math.random() * 40 + 60);
};

// Simulated Data Updates (Replace with actual Raspberry Pi data)
setInterval(updatePPG, 500); // Update PPG every 500ms
setInterval(updateSensors, 1000); // Update sensors every second
