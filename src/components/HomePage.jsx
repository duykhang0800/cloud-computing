import React from 'react'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import CsvReader from '../components/CsvReader'
import '../css/HomePage.css'

export default class HomePage extends React.Component {
    handleMouseMove = (e) => {
        e.preventDefault();
        const el = document.getElementById("wrapper");
        const d = el.getBoundingClientRect();
        let x = e.clientX - (d.left + Math.floor(d.width / 2));
        let y = e.clientY - (d.top + Math.floor(d.height / 2));
        // Invert values
        x = x - x * 2;
        y = y - y * 2;
        document.documentElement.style.setProperty("--scale", 1.6);
        document.documentElement.style.setProperty("--x", x / 2 + "px");

        document.documentElement.style.setProperty("--y", y / 2 + "px");
    };

    handleMouseLeave = () => {
        document.documentElement.style.setProperty("--scale", 1);
        document.documentElement.style.setProperty("--x", 0);
        document.documentElement.style.setProperty("--y", 0);
    };

    render() {
        return (
            <div>
                <div class="page fs">
                    <a href="" target="_blank" rel="noopener noreferrer">Movie Theater CRM</a>
                    <p><i class="arrow down"></i></p>
                </div>
                <div class="page ss">
                    <a href="" target="_blank" rel="noopener noreferrer">Put some information here pls</a>
                </div>
                <div class="page sc" id="wrapper" onMouseMove={this.handleMouseMove}
                    onClick={this.handleMouseLeave}>
                    <PieChart />
                </div>
                <div class="page th">
                    <BarChart />
                </div>
                <div class="page fr">
                    <CsvReader />
                </div>
            </div>
        )
    }
}