// ecg.js - Handles ECG waveform display and sensor updates

// Initialize ECG Chart
const ctx = document.getElementById("ecgChart").getContext("2d");
const ecgChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: Array(50).fill(""), // Placeholder X-axis
        datasets: [{
            label: "ECG Signal",
            borderColor: "red",
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
            y: { min: -5, max: 5 } // Adjust range as needed
        }
    }
});

// Function to update ECG graph (Replace with real sensor data)
const updateECG = () => {

    let newRate = Math.floor(Math.random() * 40 + 60); // Simulated ECG Rate
    document.getElementById("ecgRate").innerText = newRate;
    
    let newVoltage = (Math.random() * 10 - 5).toFixed(2); // Simulated ECG voltage (-5 to 5)
    let timestamp = new Date().toLocaleTimeString();

    ecgChart.data.datasets[0].data.shift();
    ecgChart.data.datasets[0].data.push(newVoltage);
    ecgChart.update();

    document.getElementById("voltage").innerText = newVoltage + " V";
    document.getElementById("timestamp").innerText = timestamp;
};

// Function to update sensor values (Replace with real data)
const updateSensors = () => {
    document.getElementById("heartRate").innerText = Math.floor(Math.random() * 40 + 60);
    document.getElementById("temperature").innerText = (Math.random() * 2 + 36).toFixed(1);
    document.getElementById("ppg").innerText = Math.floor(Math.random() * 40 + 60);
};

// Simulated Data Updates (Replace with actual Raspberry Pi data)
setInterval(updateECG, 500); // Update ECG every 500ms
setInterval(updateSensors, 1000); // Update sensors every second
