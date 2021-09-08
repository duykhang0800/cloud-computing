import React from 'react'
import '../css/SideNav.css'


var content = {
    width: '100px',
    zIndex: 100,
    position: 'fixed'
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
                        <li class="side-nav-item">
                            <a class="side-nav-link" href="">Hamburger?</a>
                        </li>
                        <li class="side-nav-item">
                            <a class="side-nav-link" href="">Hamburger!</a>
                        </li>
                        <li class="side-nav-item">
                            <a class="side-nav-link" href="">About</a>
                        </li>
                        <li class="side-nav-item">
                            <a class="side-nav-link" href="">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}