const statLabels = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
const statValues = [35, 55, 40, 50, 50, 90]; // These are the base stats of Pikachu

// Configuring the Radar Chart
const ctx = document.getElementById('pokemonRadarChart').getContext('2d');
const pokemonRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: statLabels,
        datasets: [{
            label: 'Pikachu Stats',
            data: statValues,
            backgroundColor: 'rgba(255, 193, 7, 0.2)', // Light yellow for the background
            borderColor: 'rgba(255, 193, 7, 1)', // Yellow border color
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 193, 7, 1)', // Points color
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
        }]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100, // Maximum value for the stats
                stepSize: 20
            },
            gridLines: {
                color: 'rgba(255, 193, 7, 0.2)', // Light yellow grid
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});