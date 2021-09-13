import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";
import '../css/Login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            submitted: false,
            user: undefined
        }
    }

    handleChange(e) {
        let obj = [];
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    reDirecting() {
        if (this.state.myuser !== undefined) {
            return <Redirect to={"" + this.state.user.userName} />
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {email, password} = this.state;
        if(email && password) {
            // eslint-disable-next-line no-restricted-globals
            history.push("/");
        } else {
            alert("Something is missing lol");
        }
    }

    getInfo() {
        const getUrl = "";
        fetch(getUrl)
        .then(res => res.json())
        .then(data => {
            var user = data.find(e => e.email === this.state.email);
            if(user !== undefined) {
                if(this.state.password === user.password) {
                    this.setState({user: user});
                    alert("You have logged in successfully");
                } else {
                    alert("Wrong password, sucker!");
                }
            } else {
                alert("This user doesn't even exist, you lost your mind?");
            }
        })
    }

    render() {
        return (
            <div className="login-page">
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
                                            <div class="input-group-prepend"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span></div><input class="form-control" type="email" required="" placeholder="Email" />
                                            <div class="input-group-append"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span></div><input class="form-control" type="password" required="" placeholder="Password" />
                                            <div class="input-group-append"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <Link to={'/home'}>
                                            <button class="btn btn-primary btn-lg text-white" style={{ width: '100%' }} type="button">Log in</button>
                                        </Link>
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