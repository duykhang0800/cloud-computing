import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import DataTable, { createTheme } from 'react-data-table-component';
// import file from '/';
import { readString } from 'react-papaparse';
import SortIcon from "@material-ui/icons/ArrowDownward";

var json = {
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
};

createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'white',
        disabled: 'rgba(0,0,0,.12)',
    },
    header: {
        backgroundColor: "red"
    }
});

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
    header: {
        style: {
            fontSize: '22px',
            color: "black",
            backgroundColor: 'red',
            minHeight: '56px',
            paddingLeft: '16px',
            paddingRight: '8px',
        },
    },
    headRow: {
        style: {
            backgroundColor: 'aqua',
            minHeight: '56px',
            borderBottomWidth: '1px',
            borderBottomColor: 'yellow',
            borderBottomStyle: 'solid',
        },
        denseStyle: {
            minHeight: '32px',
        },
    },
};

const data = [
    {
        id: 1,
        year: '1982',
        title: 'Conan the Barbarian'
    },
    {
        id: 2,
        title: 'The Lords of the Rings',
        year: '1986'
    },
    {
        id: 3,
        title: 'Stars War',
        year: '1977'
    }
];
const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
];

const newColumns = [
    {
        name: 'Cinema Name',
        selector: 'cinema',
        sortable: true
    },
    {
        name: 'Total Sale',
        selector: 'totalSale',
        sortable: true
    },
    {
        name: 'Ticket Sold',
        selector: 'ticketSold',
        sortable: true
    }
];

const newData = [
    {
        totalSale: 9000,
        ticketSold: 6,
        cinema: 'Galaxy 1'
    },
    {
        totalSale: 5000,
        ticketSold: 5,
        cinema: 'Galaxy 3'
    }
]

export default class CsvReader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            rows: [],
            selected: false
        }
    }

    fetchRecords() {
        const recordUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/records";
        var data = [];

        fetch(recordUrl)
            .then(res => res.json())
            .then(res => {
                res.filter(d => {
                    var dataSet = {
                        cinema: d.cinema.name,
                        totalSale: d.totalSale,
                        ticketSold: d.ticketSold
                    };
                    data.push(dataSet);
                })
                console.log("This is my data: ")
                this.setState({ data: data });
                console.log(this.state.data);
            })
    }

    componentDidMount() {
        this.fetchRecords();
    }

    async handleChange(selectedRows) {
        // console.log(selectedRows[0]);
        await this.setState({ rows: selectedRows });
        this.setState({ selected: true });
        console.log("State data: ", this.state.rows.selectedRows);
        // for (let i = 0; i < this.state.rows.selectedRows.length; i++) {
        //     console.log(this.state.rows.selectedRows[i]);
        // }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.selected === false) {
            alert("You haven't selected anything yet");
        } else {
            if (this.state.rows.selectedRows.length > 0) {
                console.log("These are the records that will be sent: ");
                for (let i = 0; i < this.state.rows.selectedRows.length; i++) {
                    console.log(this.state.rows.selectedRows[i]);
                }
            } else {
                alert("You haven't selected anything yet");
            }
        }
    }

    render() {
        return (
            <div>
                {/* <input
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileUpload}
                    /> */}
                <div style={{ height: '500px', paddingTop: '60px' }}>
                    <DataTable
                        pagination
                        highlightOnHover
                        columns={newColumns}
                        data={this.state.data}
                        defaultSortField="Cinema Name"
                        sortIcon={<SortIcon />}
                        // customStyles={customStyles}
                        selectableRows
                        // onSelectedRowsChange={({ selectedRows }) => {
                        //     console.log(selectedRows);
                        //     this.setState({rows: selectedRows});
                        //     console.log("State data: ", this.state.rows);
                        // }}
                        onSelectedRowsChange={this.handleChange.bind(this)}
                    />
                </div>
                <button class="btn btn-primary btn-lg text-white" style={{ width: '100px', height: '50px', marginTop: '160px' }} type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        );
    }
}