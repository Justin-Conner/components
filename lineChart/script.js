const ctx = document.getElementById('lineChart').getContext('2d');

const data = {
    labels: ['1/1/23', '1/2/23', '1/3/23', '1/4/23', '1/5/23'],
    datasets: [
        {
            label: 'Weight',
            borderColor: 'red',
            data: [245, 244, 243.1, 242.2, 244]
        },
        {
            label: 'BMI',
            borderColor: 'green',
            data: [31, 32, 33, 34, 30]
        },
        {
            label: 'Body Fat',
            borderColor: 'blue',
            data: [12, 13, 11, 13, 14]
        },
        {
            label: 'Body Water',
            borderColor: 'orange',
            data: [57, 61, 62, 62, 57]
        }
    ]
};

const lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
