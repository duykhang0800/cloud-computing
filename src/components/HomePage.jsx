import React from 'react';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import CsvReader from '../components/CsvReader';
import SideNav from '../components/SideNav';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

const fetchUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/records"

export default class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
        }
    }

    handleMouseMove = (e) => {
        this.setState({ isShown: false })
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

        // let timeout;
        // (() => {
        //     clearTimeout(timeout);
        //     timeout = setTimeout(() => this.setState({ isShown: true }), 3000);
        // })();
    };

    handleMouseLeave = () => {
        document.documentElement.style.setProperty("--scale", 1);
        document.documentElement.style.setProperty("--x", 0);
        document.documentElement.style.setProperty("--y", 0);
    };

    handleMouseOut = () => {
        document.documentElement.style.setProperty("--scale", 1);
        document.documentElement.style.setProperty("--x", 0);
        document.documentElement.style.setProperty("--y", 0);
    }

    // onFocusFunction() {
    //     document.getElementsByTagName("div")[3].setAttribute("style", "--scale: 1");
    // }

    // async componentDidMount() {
    //     this.focusListener = this.navigation.addListener('didFocus', () => {
    //         this.onFocusFunction()
    //     })
    // }

    // componentWillUnmount() {
    //     document.documentElement.style.setProperty("--scale", 1);
    // }

    // handleMouseHover = () => {
    //     if (this.state.isShown === true) {
    //         return;
    //     } else {
    //         this.setState({ isShown: true })
    //         console.log("Click to cancel")
    //     }
    // }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    logOut() {
        console.log("Clicked");
        return <Redirect to="/"></Redirect>
    }

    render() {
        // this.onFocusFunction()
        return (
            <div>
                <div class="header">
                    <h2>RMIT (Remember to fcking put a logo here)
                        <Link to={'/login'}>
                            <button class="btn btn-light" id="btn" onClick={this.logOut}>Log out</button>
                        </Link>
                    </h2>

                    <div class="progress-container">
                        <div class="progress-bar" id="myBar"></div>
                    </div>
                </div>
                <SideNav />
                <div class="page fs">
                    <a href="" target="_blank" rel="noopener noreferrer">Movie Theater CRM</a>
                    <p><i class="arrow down"></i></p>
                </div>
                <div class="page ss">
                    <a href="" target="_blank" rel="noopener noreferrer">Put some information here pls</a>
                </div>
                <div class="page sc" id="wrapper"
                    onClick={this.handleMouseMove}
                    // onClick={this.handleMouseLeave}
                    onMouseOut={this.handleMouseOut}>

                    <PieChart />

                    {this.state.isShown === true && (
                        <div style={{ zIndex: 5 }}>
                            <p>Click to cancel</p>
                        </div>
                    )}
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