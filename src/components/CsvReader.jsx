import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import DataTable, { createTheme } from 'react-data-table-component';
import file from '../project.csv';
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
        title: 'Conan the Barbarian', 
        year: '1982' 
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

function CsvReader() {

    // const [columns, setColumns] = useState([]);
    // const [data, setData] = useState([]);

    // process CSV data
    // const processData = dataString => {
    //     const dataStringLines = dataString.split(/\r\n|\n/);
    //     const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

    //     const list = [];
    //     for (let i = 1; i < dataStringLines.length; i++) {
    //         const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    //         if (headers && row.length == headers.length) {
    //             const obj = {};
    //             for (let j = 0; j < headers.length; j++) {
    //                 let d = row[j];
    //                 if (d.length > 0) {
    //                     if (d[0] == '"')
    //                         d = d.substring(1, d.length - 1);
    //                     if (d[d.length - 1] == '"')
    //                         d = d.substring(d.length - 2, 1);
    //                 }
    //                 if (headers[j]) {
    //                     obj[headers[j]] = d;
    //                 }
    //             }

    //             // remove the blank rows
    //             if (Object.values(obj).filter(x => x).length > 0) {
    //                 list.push(obj);
    //             }
    //         }
    //     }

    //     // prepare columns list from headers
    //     const columns = headers.map(c => ({
    //         name: c,
    //         selector: c,
    //     }));

    //     setData(list);
    //     setColumns(columns);
    // }

    // handle file upload
    // const handleFileUpload = e => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = (evt) => {
    //         /* Parse data */
    //         const bstr = evt.target.result;
    //         const wb = XLSX.read(bstr, { type: 'binary' });
    //         /* Get first worksheet */
    //         const wsname = wb.SheetNames[0];
    //         const ws = wb.Sheets[wsname];
    //         /* Convert array of arrays */
    //         const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
    //         processData(data);
    //     };
    //     reader.readAsBinaryString(file);
    // }

    // useEffect(() => {
    //     console.log("Component called");
    //     //const file = require("./project.csv");
    //     //console.log(file);
    //     // const reader = new FileReader();
    //     // reader.onload = (evt) => {
    //     //     const bstr = evt.target.result;
    //     //     const wb = XLSX.read(bstr, {type: 'binary'});
    //     //     const wsname = wb.SheetNames[0];
    //     //     const ws = ws.Sheets[wsname];
    //     //     const data = XLSX.utils.sheet_to_csv(ws, {header: 1});
    //     //     processData(data);
    //     // };
    //     // reader.readAsBinaryString(file);
    //     const papaConfig = {
    //         complete: (results, file) => {
    //             console.log("Parsing complete: ", results, file);
    //         },
    //         download: true,
    //         error: (error, file) => {
    //             console.log("Error while parsing: ", error, file);
    //         }
    //     };

    //     const data = readString(file, papaConfig);

    //     // console.log(data);
    //     // console.log(json);
    //     // //processData(data);
    //     // // for(var key in data[0]) {
    //     // //     console.log(data[0][key]);
    //     // // }
    //     // for(var key in json) {
    //     //     for (var key1 in json[key]) {
    //     //         console.log(json[key][key1])
    //     //     }
    //     //  }
    // })

    const handleChange = (selectedRows) => {
        console.log(selectedRows)
    }

    return (
        <div>
            <h3>Read CSV file in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
            {/* <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
            /> */}
            <DataTable
                pagination
                highlightOnHover
                columns={columns}
                data={data}
                defaultSortField="title"
                sortIcon={<SortIcon/>}
                // customStyles={customStyles}
                selectableRows
                // onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
                onSelectedRowsChange={handleChange}
            />
        </div>
    );
}

export default CsvReader;