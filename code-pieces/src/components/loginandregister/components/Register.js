import React, { Component } from 'react';
import loginImg from '../../../assets/login.svg';


export class Register extends Component {
    state = {
    }
  render() {
     return (
        <div className = 'container' ref = { this.props.containerRef }>
        <div className = 'header'>
            <h1>Register</h1>
        </div>
        <div className = 'content'>
            <div className = 'image'>
                <img src = {loginImg} alt = 'Register'/>
            </div>
            <div className = 'form'>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                        <input type="text"
                            name = 'username'
                            placeholder = 'username'/>
                </div> 

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                        <input type="email"
                               name = 'email'
                               placeholder = 'email'/>
                </div>
                 

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input type="password"
                               name = 'password'
                               placeholder = 'password'/>
                </div>
               
            </div>
        </div>
        <div className="footer">
            <button type = 'button' className="btn">
                Register
            </button>
        </div>
        </div>
     )
  }
}
