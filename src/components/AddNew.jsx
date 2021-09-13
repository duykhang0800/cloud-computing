import React from 'react';

export default class AddNew extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="newCard shadow mb-3">
                        <div className="newCard-header py-3">
                            <p className="text-primary m-0 font-weight-bold">User Settings</p>
                        </div>
                        <div className="newCard-body">
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="username">
                                                <strong>Username</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                // placeholder={this.state.user.userName}
                                                // value={this.state.userName}
                                                // onChange={this.handleChange.bind(this)}
                                                disabled
                                                name="userName"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <strong>Email Address</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="email"
                                            // placeholder={this.state.user.email}
                                            // value={this.state.email}
                                            // name="email"
                                            // onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="first_name">
                                                <strong>First Name</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                            // placeholder={this.state.user.firstName}
                                            // value={this.state.firstName}
                                            // name="firstName"
                                            // onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="last_name">
                                                <strong>Last Name</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                            // placeholder={this.state.user.lastName}
                                            // value={this.state.lastName}
                                            // name="lastName"
                                            // onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-sm" type="submit"
                                    // onClick={this.handleUpdate.bind(this)}
                                    >
                                        Save Settings</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="newCard shadow">
                        <div className="newCard-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Contact Settings</p>
                        </div>
                        <div className="newCard-body">
                            <form>
                                <div className="form-group"><label htmlFor="address"><strong>Address</strong></label><input className="form-control" type="text" placeholder="Sunset Blvd, 38" name="address" /></div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="city"><strong>City</strong></label><input className="form-control" type="text" placeholder="Los Angeles" name="city" /></div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group"><label htmlFor="country"><strong>Country</strong></label><input className="form-control" type="text" placeholder="USA" name="country" /></div>
                                    </div>
                                </div>
                                <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="newCard shadow" visible="false">
                        <div className="newCard-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Private Information</p>
                        </div>
                        <div className="newCard-body" >
                            <form>
                                <div className="form-row">

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <strong>Last Password</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                            // value={this.state.password}
                                            // name="password"
                                            // onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="first_name">
                                                <strong>New Password</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                            // value={this.state.npassword}
                                            // name="npassword"
                                            // onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="first_name">
                                                <strong>Confirm New Password</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                            // value={this.state.cnpassword}
                                            // name="cnpassword"
                                            // onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-sm" type="submit"
                                    // onClick={this.handleChangePassword.bind(this)}
                                    >Change Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}