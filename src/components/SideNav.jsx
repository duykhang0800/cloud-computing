import React from 'react'
import '../css/SideNav.css'
import { Icon } from '@iconify/react';
import { Link, Redirect } from 'react-router-dom';


var content = {
    width: '100px',
    zIndex: 100,
    position: 'fixed',
}
export default class SideNav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            redirected: false
        }
    }

    logOut() {
       if(this.state.redirected) {
           return <Redirect to={'/login'}/>;
       }
    }

    onClick() {
        this.setState({redirected: true});
    }

    handleMouseClick = (e) => {
        e.preventDefault();

        var hamburger = document.getElementById("nav-icon");

        document.querySelector(".side-nav-list").classList.toggle("slide-in");
        document.querySelector(".hamburger").classList.toggle("close");
    }

    render() {
        return (
            <div style={content}>
                {this.logOut()}
                <nav class="side-nav">
                    <div id="nav-icon" class="hamburger" onClick={this.handleMouseClick}>
                        <span class="bar"></span>
                    </div>
                    <ul class="side-nav-list">
                        <li href="#" class="nav-link">
                            <Icon icon="bx:bxs-dashboard" />
                            <span class="mx-2">Home</span>
                        </li>
                        <li href="#" class="nav-link">
                            <Icon icon="bx:bx-conversation" />
                            <span class="mx-2">Contact</span>
                        </li>
                        <li href="#" class="nav-link">
                            <Icon icon="bx:bx-log-out" />
                            <span class="mx-2" onClick={this.onClick.bind(this)}>Log out</span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}