import React from 'react'
import Chart from 'chart.js/auto';
import '../css/Cards.css'
import '../css/Home.css'

const style = {
    width: "400px",
    height: "400px",
    border: "5px solid black",
    backgroundColor: "white",
    zIndex: 2
}

const chartData = [
    {
        x: 10,
        y: 20
    },
    {
        x: 5,
        y: 1
    },
    {
        x: 15,
        y: 15
    }
]

export default class PieChart extends React.Component {

    constructor(props) {
        super(props)
    }


    componentDidMount() {
        // var Chart = require('chart.js');
        var ctx = document.getElementById('pieChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Number of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    parsing: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                radius: '40%'
            }
        });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="column">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Description:</a>
                    <p>This is a Pie Chart, supposedly</p>
                </div>
                <div class="column">
                    <div class="cards-list">
                        <div class="card 1">
                            <div class="card-image">
                                <canvas id="pieChart" width="400px" height="400px"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}