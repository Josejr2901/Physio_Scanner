// temperature.js - Handles Temperature graph display and sensor updates

// Initialize Temperature Chart
const ctx = document.getElementById("temperatureChart").getContext("2d");
const temperatureChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: Array(50).fill(""), // Placeholder X-axis
        datasets: [{
            label: "Temperature",
            borderColor: "red",
            data: Array(50).fill(37), // Placeholder Y-axis (Typical human body temperature)
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        animation: false,
        scales: {
            x: { display: false },
            y: { min: 35, max: 42 } // Adjust range for body temperature readings
        }
    }
});

// Function to update Temperature graph (Replace with real sensor data)
const updateTemperature = () => {

    let newTemp = (Math.random() * 2 + 36).toFixed(1); // Simulated Temperature
    document.getElementById("temperatureValue").innerText = newTemp;

    temperatureChart.data.datasets[0].data.shift();
    temperatureChart.data.datasets[0].data.push(newTemp);
    temperatureChart.update();

    document.getElementById("tempValue").innerText = newTemp;
    document.getElementById("timestamp").innerText = timestamp;
};

// Function to update sensor values (Replace with real data)
const updateSensors = () => {
    document.getElementById("heartRate").innerText = Math.floor(Math.random() * 40 + 60);
    document.getElementById("ecg").innerText = Math.floor(Math.random() * 40 + 60)
    document.getElementById("ppg").innerText = Math.floor(Math.random() * 40 + 60);
};

// Simulated Data Updates (Replace with actual Raspberry Pi data)
setInterval(updateTemperature, 1000); // Update Temperature every second
setInterval(updateSensors, 1000); // Update sensors every second
