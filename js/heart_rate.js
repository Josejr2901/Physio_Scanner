// heart_rate.js - Handles Heart Rate graph display and sensor updates

// Initialize Heart Rate Chart
const ctx = document.getElementById("heartRateChart").getContext("2d");
const heartRateChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: Array(50).fill(""), // Placeholder X-axis
        datasets: [{
            label: "Heart Rate",
            borderColor: "blue",
            data: Array(50).fill(70), // Placeholder Y-axis (Resting heart rate)
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        animation: false,
        scales: {
            x: { display: false },
            y: { min: 50, max: 130 } // Adjust range for heart rate readings
        }
    }
});

// Function to update Heart Rate graph (Replace with real sensor data)
const updateHeartRate = () => {

    let newRate = Math.floor(Math.random() * 30 + 70); // Simulated Heart Rate
    document.getElementById("heartRateValue").innerText = newRate;

    heartRateChart.data.datasets[0].data.shift();
    heartRateChart.data.datasets[0].data.push(newRate);
    heartRateChart.update();

    document.getElementById("heartRateValue").innerText = newRate;
    document.getElementById("timestamp").innerText = timestamp;
};

// Function to update sensor values (Replace with real data)
const updateSensors = () => {
    document.getElementById("ecg").innerText = Math.floor(Math.random() * 40 + 60);
    document.getElementById("temperature").innerText = (Math.random() * 2 + 36).toFixed(1);
    document.getElementById("ppg").innerText = Math.floor(Math.random() * 40 + 60);
};

// Simulated Data Updates (Replace with actual Raspberry Pi data)
setInterval(updateHeartRate, 1000); // Update Heart Rate every second
setInterval(updateSensors, 1000); // Update sensors every second
