import React from 'react';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import CsvReader from '../components/CsvReader';
import SideNav from '../components/SideNav';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import { lightTheme, darkTheme } from '../js/theme';
import { GlobalStyles } from '../js/global';
import { ThemeProvider } from "styled-components";
import '../css/FontAnimate.css'

const fetchUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/records"

const button = {
    zIndex: 200,
    right: '120px',
    top: '10px'
}

export default class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            email: ''
        }
    }

    setProps() {
        const { match: { params } } = this.props;
        this.setState({ email: params.email });
    }

    componentDidMount() {
        this.setProps();
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
        return <Redirect to="/"></Redirect>;
    }

    render() {
        // this.onFocusFunction()
        return (
            <div>
                <div class="header">
                    <h2>Welcome {this.state.email}
                        {/* <button class="btn btn-light" style={button} id="btn" onClick={this.toggleTheme}>Create</button> */}
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
                    {/* <a href="" target="_blank" rel="noopener noreferrer">Movie Theater CRM</a> */}
                    <div class="text-container">
                        <div class="letter">M</div>
                        <div class="letter">o</div>
                        <div class="letter">v</div>
                        <div class="letter">i</div>
                        <div class="letter">e</div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <div class="letter">T</div>
                        <div class="letter">h</div>
                        <div class="letter">e</div>
                        <div class="letter">a</div>
                        <div class="letter">t</div>
                        <div class="letter">e</div>
                        <div class="letter">r</div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <div class="letter">C</div>
                        <div class="letter">R</div>
                        <div class="letter">M</div>
                    </div>
                    <p><i class="arrow down"></i></p>
                </div>
                <div class="page ss">
                    <h1 class='heading' style={{ fontSize: 70, marginBottom: '30px' }}><u>Project Overview:</u></h1>
                    <p class='paragraph' style={{ fontSize: 30 }}>
                        From the increase of the cinema, we decided to create the CRM for cinema to manage the ticket and cost of cinema.
                    </p>
                    <p class='paragraph' style={{ fontSize: 30 }}>
                        CRM is all about giving businesses the tools they need to retain customers and achieve long-term sales growth.
                    </p>
                    <p class='paragraph' style={{ fontSize: 30 }}>
                        CRM software systems may be seen as your primary checkout for everything that counts when dealing with your company's consumers, such as complaints or purchase history, as well as sales trends and sales
                    </p>
                </div>
                <div class="page sc" id="wrapper"
                // onClick={this.handleMouseMove}
                // onClick={this.handleMouseLeave}
                // onMouseOut={this.handleMouseOut}
                >
                    <PieChart />
                </div>
                <div class="page th">
                    <BarChart />
                </div>
                <div class="page fr">
                <div class="text-container">
                        <div class="letter">C</div>
                        <div class="letter">R</div>
                        <div class="letter">M</div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <div class="letter">D</div>
                        <div class="letter">A</div>
                        <div class="letter">T</div>
                        <div class="letter">A</div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <div class="letter">T</div>
                        <div class="letter">A</div>
                        <div class="letter">B</div>
                        <div class="letter">L</div>
                        <div class="letter">E</div>
                    </div>
                    <p><i class="arrow down"></i></p>
                </div>
                <div class="page ls">
                    <CsvReader />
                </div>
            </div>
        )
    }
}