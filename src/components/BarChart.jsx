import React from 'react'
import Chart from 'chart.js/auto';
import '../css/Home.css'
import '../css/Cards.css'
import { CompareArrowsOutlined } from '@material-ui/icons';

const style = {
    // backgroundColor: "grey",
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

        this.state = {
            newLabels: [],
            data1: [],
            cinemaId: [],
            data2: []
        }
    }

    async fetchCinema() {
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

                this.setState({ newLabels: labels, cinemaId: id });
                console.log(this.state.newLabels);
                console.log(this.state.cinemaId);
            });
        this.fetchRecords();
    }

    async fetchRecords() {
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var idArray = this.state.cinemaId;
        const saleArray1 = [];
        const saleArray2 = [];

        var totalMoney1 = 0;
        var totalMoney2 = 0;
        console.log(idArray);
        const recordUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/records";
        await fetch(recordUrl)
            .then(res => res.json())
            .then(json => {
                // var records = data.map(function (e) {
                //     if (e.cinema.cid === idArray[0]) {
                //         return e.totalSale;
                //     };
                // })

                json.filter(d => {
                    // console.log("This is the cinema id: ", d.cinema.cid)
                    // console.log("This is cinema total sale: ", d.totalSale)
                    if (d.cinema.cid === idArray[0]) {
                        saleArray1.push(d.totalSale);
                    } else {
                        if (d.cinema.cid === idArray[1]) {
                            saleArray2.push(d.totalSale);
                        }
                    }

                    for (let i = 0; i < saleArray1.length; i++) {
                        totalMoney1 += saleArray1[i];
                    }

                    for (let j = 0; j < saleArray2.length; j++) {
                        totalMoney2 += saleArray2[j]
                    }

                });

                console.log("This is the total sale of cinema 1: ", totalMoney1);
                console.log("This is the total sale of cinema 2: ", totalMoney2)
                this.setState({ data1: totalMoney1, data2: totalMoney2 });

            })
        this.createChart();
    }

    createChart() {
        var jsonfile = {
            "jsonarray": [
                {
                    "name": "Joe",
                    "age": 12
                },
                {
                    "name": "Tom",
                    "age": 14
                },
                {
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
        var ctx = document.getElementById('barChart1');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.state.newLabels,
                datasets: [{
                    label: 'Total Sale of each cinema in a year',
                    data: [this.state.data1, this.state.data2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
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

    componentDidMount() {
        this.fetchCinema()
    }

    render() {
        return (
            <div class="container">
                <div class="column">
                    <h1 class='heading' style={{ fontSize: 50, color: '#d7dce0' }}><u>Description:</u></h1>
                    <p class='paragraph' style={{ fontSize: 50, color: '#d7dce0'}}>
                        Total sale of each cinema in a year
                    </p>
                </div>
                <div class="column">
                    <div class="cards-list">
                        <div class="card 1" style={{ width: "600px", height: "400px" }}>
                            <div class="card-image">
                                <canvas id="barChart1" width="600px" height="400px"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}