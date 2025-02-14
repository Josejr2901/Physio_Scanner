// dashboard.js - Handles Real-Time Graph Updates

// Create chart configurations
const createChart = (canvasId, label, borderColor) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(50).fill(''), // Placeholder X-axis
            datasets: [{
                label: label,
                borderColor: borderColor,
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
                y: { min: 0, max: 140 }
            }
        }
    });
};

// Initialize charts
const ecgChart = createChart('ecgChart', 'ECG Signal', 'green');
const ppgChart = createChart('ppgChart', 'PPG Signal', 'yellow');
const tempChart = createChart('temperatureChart', 'Temperature', 'red');
const heartRateChart = createChart('heartRateChart', 'Heart Rate', 'blue');

// Function to update charts with real data (to be replaced with Raspberry Pi data)
const updateChart = (chart, newValue) => {
    chart.data.datasets[0].data.shift();
    chart.data.datasets[0].data.push(newValue);
    chart.update();
};

// Simulated data updates (Replace with actual sensor values from Raspberry Pi)
setInterval(() => {
    let ecgValue = Math.floor(Math.random() * 40 + 60); // Fake ECG data
    let ppgValue = Math.floor(Math.random() * 40 + 60); // Fake PPG data
    let tempValue = (Math.random() * 2 + 36).toFixed(1); // Fake Temperature (36-38°C)
    let heartRateValue = Math.floor(Math.random() * 30 + 70); // Fake Heart Rate (70-100 BPM)

    document.getElementById("ecgValue").innerText = ecgValue;
    document.getElementById("ppgValue").innerText = ppgValue;
    document.getElementById("tempValue").innerText = tempValue + "°C";
    document.getElementById("heartRateValue").innerText = heartRateValue + " BPM";

    updateChart(ecgChart, ecgValue);
    updateChart(ppgChart, ppgValue);
    updateChart(tempChart, tempValue);
    updateChart(heartRateChart, heartRateValue);
}, 1000); // Updates every second
