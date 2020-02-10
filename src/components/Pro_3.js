import React, { Component } from 'react'

export default class Pro_3 extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };
    }
    render() {
        return (
            <form>
                {this.state.isLoggedIn ? (
                    <React.Fragment>
                    <h3>Welcome</h3>
                    <p>You are logged in!</p>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                    <h3>Login</h3>
                    <label htmlFor="username">Username</label><br/>
                    <input type="text" id="username" /><br/>
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" id="password" /><br/>
                    <input type="submit" value="Login" />
                    </React.Fragment>
                )}
            </form>
        )
    }
}
