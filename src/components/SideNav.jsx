import React from 'react'
import '../css/SideNav.css'
import { Icon } from '@iconify/react';


var content = {
    width: '100px',
    zIndex: 100,
    position: 'fixed',
}
export default class SideNav extends React.Component {

    handleMouseClick = (e) => {
        e.preventDefault();

        var hamburger = document.getElementById("nav-icon");

        document.querySelector(".side-nav-list").classList.toggle("slide-in");
        document.querySelector(".hamburger").classList.toggle("close");
    }

    render() {
        return (
            <div style={content}>
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
                            <Icon icon="bx:bx-user-check" />
                            <span class="mx-2">Profile</span>
                        </li>
                        <li href="#" class="nav-link">
                            <Icon icon="bx:bx-conversation" />
                            <span class="mx-2">Contact</span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}