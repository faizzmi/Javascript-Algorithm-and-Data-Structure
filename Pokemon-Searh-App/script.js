let ctx = document.getElementById("radarChart").getContext('2d');

let myRadarChart = new Chart(ctx,
    {
        type: 'radar',
        data: {
            labels: ['HP','Attack','Defense','Special Attack', 'Special Defense','Speed'],
            dataset: [{
                label: 'Pikachu',
                data: [35,55,40,50,50,90],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 0, 1)',
                borderWidth: 2,
            }]
        },
        options: {
            scale: {
                pointLabels: {
                    fontSize: 14,
                }
            }
        }
    }
)