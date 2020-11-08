import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../styles/landing.scss';
import { Login, Register } from '../index';
import LoginOrRegister from './LoginOrRegister';


class Landing extends Component{

  state = {
    isLogginActive: true,
  }

  changeState() {
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render(){
    const { isLogginActive} = this.state;
    const current = isLogginActive ? <p>Dont't have an account yet? <br/>Click Here To Register</p> : <p>Already Signed Up? <br/> Click Here To Login </p>;
    const currentActive = isLogginActive ? "Login" : "Register";
  return (
    <div className="App">
      <div className="login-register">
                <div className="container">

                  {isLogginActive && <Route  component={ Login } containerRef = {(ref) => this.current = ref} /> }
                  {!isLogginActive && <Route  component={ Register } containerRef = {(ref) => this.current = ref} />}

                </div>
              
              <Route path="/" render = { (props) => {
                  return (
                      <div>
                      <LoginOrRegister {...props} current = { current } 
                                  currentActive={currentActive}
                                  containerRef = {ref => this.logInOrRegister = ref} 
                                  onClick = { this.changeState.bind(this)} />
                                  </div>
                                
                  )
              }} />
          </div>
      
    </div>
  );
}
}



export default Landing;
