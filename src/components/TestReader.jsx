import React from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import file from './project.csv';
import { readString } from 'react-papaparse';

export default class TestReader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [],
            data: []
        }
    }


    componentDidMount() {
        const papaConfig = {
            complete: (results, file) => {
                console.log("Parsing complete: ", results, file);
            },
            download: true,
            error: (error, file) => {
                console.log("Error while parsing: ", error, file);
            }
        };

        const data = readString(file);
        setTimeout(() => {
            console.log("Started reading")
            for (var key in data[0]) {
                console.log("Got some data here")
                console.log(data[0][key]);
            }
            //console.log(data)
            console.log("Finished reading")
        }, 2000)


    }

    render() {
        return (
            <div>
                <DataTable
                    pagination
                    highlightOnHover
                    columns={this.state.columns}
                    data={this.state.data}
                />
            </div>
        )
    }
}