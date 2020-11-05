import React, { Component } from 'react';
import loginImg from '../../../assets/login.svg';






export class Login extends Component {
        state = {
            
        }
  render() {
     return (
        <div className = 'container' ref = { this.props.containerRef }>
        <div className = 'header'>
            <h1>Login</h1>
        </div>
        <div className = 'content'>
            <div className = 'image'>
                <img src = {loginImg} alt = 'Login'/>
            </div>
            <div className = 'form'>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                        <input type="text"
                            name = 'username'
                            placeholder = 'username'/>
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
                Login
            </button>
        </div>
        </div>
     )
  }
}
// export default Login;