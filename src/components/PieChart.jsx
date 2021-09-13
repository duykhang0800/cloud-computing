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

        this.state = {
            labels: [],
            cinemaId: [],
            dataSet1: [],
            dataSet2: []
        }
    }

    async fectchCinema() {
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

                this.setState({ labels: labels, cinemaId: id });
                console.log(this.state.labels);
                console.log(this.state.cinemaId)
            })
        this.fetchRecords();
    }

    async fetchRecords() {
        var idArray = this.state.cinemaId;
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

                this.setState({ dataSet1: total1, dataSet2: total2 });
                console.log(this.state.dataSet1);
                console.log(this.state.dataSet2);
            })
        this.createChart();
    }

    createChart() {
        // var Chart = require('chart.js');
        var ctx = document.getElementById('pieChart');
        // console.log("These are the labels: ", this.state.labels);
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Total tickets for Galaxy Nguyen Trai', 'Total tickets for Galaxy Nguyen Du'],
                datasets: [{
                    label: 'Number of Votes',
                    data: [this.state.dataSet1, this.state.dataSet2],
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


    componentDidMount() {
        this.fectchCinema();
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
                                <canvas id="pieChart" width="400px" height="400px"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}