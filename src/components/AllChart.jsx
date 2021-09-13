import React from 'react';
import Chart from 'chart.js/auto';
import '../css/Cards.css';
import '../css/Home.css';

var allLabels = [];
var allId = [];
var data1 =[];
var data2 =[];

async function fectchCinema() {
    const cinemaUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/cinemas"
    await fetch(cinemaUrl)
        .then(res => res.json())
        .then(data => {
            var labels = data.map(function (e) {
                return e.name;
            });

            var id = data.map(function (e) {
                return e.cid;
            });

            // this.setState({ labels: labels, cinemaId: id });
            // console.log(this.state.labels);
            // console.log(this.state.cinemaId)
            allLabels = labels;
            allId = id;
        })
    fetchRecords();
}

async function fetchRecords() {
    var idArray = allId;
    const tickets1 = [];
    const tickets2 = [];
    var total1 = 0;
    var total2 = 0;
    console.log(idArray);
    const recordUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/records";
    await fetch(recordUrl)
        .then(res => res.json())
        .then(json => {
            json.filter(d => {
                if (d.cinema.cid === idArray[0]) {
                    tickets1.push(d.ticketSold);
                } else {
                    if (d.cinema.cid === idArray[1]) {
                        tickets2.push(d.ticketSold);
                    }
                }
            })

            // console.log(tickets1);
            // console.log(tickets2);

            for (let i = 0; i < tickets1.length; i++) {
                total1 += tickets1[i];
            }

            for (let j = 0; j < tickets2.length; j++) {
                total2 += tickets2[j];
            }

            // this.setState({ dataSet1: total1, dataSet2: total2 });
            // console.log(this.state.dataSet1);
            // console.log(this.state.dataSet2);
            data1 = total1;
            data2 = total2;
        })
    console.log("This is data 1: ", data1);
    console.log("This is data 2: ", data2);
    createChart();
}

function createChart() {
    // var Chart = require('chart.js');
    var ctx = document.getElementById('newPieChart');
    // console.log("These are the labels: ", this.state.labels);
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total tickets for Galaxy Nguyen Trai', 'Total tickets for Galaxy Nguyen Du'],
            datasets: [{
                label: 'Number of Votes',
                data: [data1, data2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
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

export default class NewPieChart extends React.Component {

    createChart() {
        // var Chart = require('chart.js');
        console.log("This is data 1: ", data1);
        console.log("This is data 2: ", data2);
        var ctx = document.getElementById('newPieChart');
        // console.log("These are the labels: ", this.state.labels);
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Total tickets for Galaxy Nguyen Trai', 'Total tickets for Galaxy Nguyen Du'],
                datasets: [{
                    label: 'Number of Votes',
                    data: [data1, data2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
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

    async componentDidMount() {
        await fectchCinema();
        // this.createChart();
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="column">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Description:</a>
                    <p>Total ticket sold of each cinema</p>
                </div>
                <div class="column">
                    <div class="cards-list">
                        <div class="card 1">
                            <div class="card-image">
                                <canvas id="newPieChart" width="400px" height="400px"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}