import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../assets/particlesConfig.json';
import '../css/Login.css'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div class="login-page">
            <Particles params={particlesConfig} className="particles-container" />
            <div class="Modal">
                <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Sign Up Now</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                        <div class="modal-body">
                            <div class="text-center"><button class="btn btn-primary text-left" style={{ width: '100%' }} type="button"><i class="fa fa-facebook"></i>&nbsp; Continue with Facebook</button></div>
                            <div class="text-center mt-2"><button class="btn btn-light text-left border-dark" style={{ width: '100%' }} type="button"><i class="fa fa-google"></i>&nbsp; Continue with Google</button></div>
                            <form class="mt-4">
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="text-primary input-group-text"><i class="fa fa-user-o"></i></span></div><input class="form-control" type="text" required="" placeholder="Full Name" />
                                        <div class="input-group-append"></div>
                                    </div>
                                </div>
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
                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" required="" checked="" /><label class="form-check-label" for="formCheck-1">I agree all the terms and conditions.</label></div>
                                </div>
                                <div class="form-group"><button class="btn btn-primary btn-lg text-white" style={{ width: '100%' }} type="button">Sign Up</button></div>
                            </form>
                            <hr style={{ backgroundColor: '#bababa' }} />
                            <p class="text-center">Already have an Account?&nbsp;
                                <Link to={'/login'}>
                                    <a class="text-decoration-none" data-dismiss="modal" data-toggle="modal" data-target="#signup" href="#">Log In</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;