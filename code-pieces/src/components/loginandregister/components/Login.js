import React, { Component } from 'react';
import loginImg from '../../../assets/login.svg';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';







export class Login extends Component {
    state = {
        credentials: {
          username: '',
          password: ''
        }
      };

      handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

            login = e => {
                e.preventDefault();
                console.log(this.state.credentials);
                axiosWithAuth()
                .post('/login', this.state.credentials)
                .then(res => {
                    localStorage.setItem('token', res.data.payload);
                    this.props.history.push('/pieces');
                })
                .catch(err => console.log(err));
            };



  render() {
    console.log(this.props)
     return (
        <div className = 'container' ref = { this.props.containerRef }>
        <div className = 'header'>
            <h1>Login</h1>
        </div>
        <form onSubmit={this.login}>
        <div className = 'content'>
            <div className = 'image'>
                <img src = {loginImg} alt = 'Login'/>
            </div>
            <div className = 'form'>
            
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                        <input type="text"
                            name = 'username'
                            placeholder = 'username'
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                </div>   

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input type="password"
                               name = 'password'
                               placeholder = 'password'
                               value={this.state.credentials.password}
                               onChange={this.handleChange}
                        />
                </div>
               
            </div>
        </div>
        <div className="footer">
            <button type = 'submit' className="btn">
                Login
            </button>
        </div>
        </form>
        </div>
     )
  }
}
