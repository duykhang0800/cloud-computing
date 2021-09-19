import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";
import '../css/Login.css';
import { Link, Redirect } from 'react-router-dom';
import passwordHash from 'password-hash';

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            submitted: false,
            user: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let obj = [];
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    reDirecting() {
        if (this.state.submitted) {
            console.log("Redirecting");
            return <Redirect to={'/home/' + this.state.email} />
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Submit function called");
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            // eslint-disable-next-line no-restricted-globals
            history.push("/");
        } else {
            alert("Something is missing lol");
        }
    }

    getInfo() {
        var password = this.state.password;
        var input = {
            email: this.state.email,
            password: this.state.password
        };
        console.log("User's credentials: ", input);
        // var hashed = passwordHash.generate(password, ['salt']);
        // console.log("Hashed password: ", hashed);
        const postUrl = "http://ec2-54-255-149-72.ap-southeast-1.compute.amazonaws.com/login";
        const response = fetch(postUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data === true) {
                    alert("You have successfully logged in");
                    this.setState({submitted: true});
                } else {
                    alert("Wrong email or password!");
                }
            })
    }

    render() {
        return (
            <div className="login-page">
                {this.reDirecting()}
                <Particles params={particlesConfig} className="particles-container" />
                <div class="Modal" style={{ paddingTop: "0px", zIndex: 1 }}>
                    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Sign In</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span></div>
                                            <input class="form-control" type="email" name="email" required="" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                                            <div class="input-group-append"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span></div>
                                            <input class="form-control" type="password" name="password" required="" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                                            <div class="input-group-append"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        {/* <Link to={'/home'}>
                                            
                                        </Link> */}
                                        <button class="btn btn-primary btn-lg text-white" style={{ width: '100%' }} type="button" onClick={this.getInfo.bind(this)}>Log in</button>
                                    </div>
                                </form>
                                <hr style={{ backgroundColor: '#bababa' }} />
                                <p class="text-center">Or&nbsp;<a class="text-decoration-none" href="#">Forget password</a></p>
                                <p class="text-center">Don't have an account? &nbsp;
                                    <Link to={'/signup'}>
                                        <a class="text-decoration-none" data-dismiss="modal" data-toggle="modal" data-target="#signin" href="#">Sign Up</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}