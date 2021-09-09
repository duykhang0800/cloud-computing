import React from 'react'
import Chart from 'chart.js/auto';
import '../css/Home.css'
import '../css/Cards.css'

const style = {
    width: "50%",
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
            newData: [],
            cinemaId: []
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

    fetchRecords() {
        var idArray = this.state.cinemaId;
        const saleArray = [];
        console.log(idArray);
        const recordUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/records";
        fetch(recordUrl)
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
                        saleArray.push(d.totalSale);
                    }
                });

                this.setState({ newData: saleArray });
                console.log(this.state.newData);
            })
    }


    componentDidMount() {
        // this.fetchCinema(function() {
        //     this.fetchRecords()
        // }.bind(this))
        this.fetchCinema()
        const fetchUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/records"
        const url = "https://api.publicapis.org/entries"
        // fetch(fetchUrl, {
        //     // method: 'GET',
        //     // mode: 'cors',
        //     // headers: {
        //     //     'Access-Control-Allow-Origin': '*'
        //     // }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         var labels = data.map(function (e) {
        //             return e.cinema.name;
        //         });
        //         // console.log(labels)
        //         var data = data.map(function (e) {
        //             return e.totalSale
        //         });
        //         // console.log(data)
        //         this.setState({ newLabels: labels, newData: data })
        //         console.log(this.state.newLabels)
        //         console.log(this.state.newData)
        //     })

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

        const newData = [{ x: 'Jan', net: 100, cogs: 50, gm: 50 }, { x: 'Feb', net: 120, cogs: 55, gm: 75 }];
        var chart = document.getElementById("barChart2");
        var newChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb'],
                datasets: [{
                    label: 'Net sales',
                    data: newData,
                    parsing: {
                        yAxisKey: 'net'
                    },
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'Cost of goods sold',
                    data: newData,
                    parsing: {
                        yAxisKey: 'cogs'
                    },
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Gross margin',
                    data: newData,
                    parsing: {
                        yAxisKey: 'gm'
                    },
                    backgroundColor: [

                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [

                        'rgba(255, 206, 86, 1)',
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
        })
    }

    render() {
        return (
            <div class="container-fluid" style={style}>
                <div class="column">
                    <div class="cards-list">
                        <div class="card 1">
                            <div class="card-image">
                                <canvas id="barChart1" width="400px" height="400px"></canvas>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="column">

                    <div class="cards-list">
                        <div class="card 1">
                            <div class="card-image">
                                <canvas id="barChart2" width="400px" height="400px"></canvas>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}