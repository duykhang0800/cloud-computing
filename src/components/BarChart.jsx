import React from 'react'
import Chart from 'chart.js/auto';

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

export default class BarChart extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        var jsonfile = {
            "jsonarray": [{
                "name": "Joe",
                "age": 12
            }, {
                "name": "Tom",
                "age": 14
            }, {
                "name": "Jerry",
                "age": 5
            }]
        };

        var labels = jsonfile.jsonarray.map(function (e) {
            return e.name;
        });
        var data = jsonfile.jsonarray.map(function (e) {
            return e.age;
        });;

        // var Chart = require('chart.js');
        var ctx = document.getElementById('barChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Votes',
                    data: data,
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
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                skipNull: true
            }
        });
    }

    render() {
        return (
            <div class="container" style={style}>
                <canvas id="barChart" width="400px" height="400px"></canvas>
            </div>
        )
    }
}