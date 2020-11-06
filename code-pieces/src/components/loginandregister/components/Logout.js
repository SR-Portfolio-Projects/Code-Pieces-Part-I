import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Logout extends Component {

    state = {
        loggedIn: {
            token : null
        }
    }


    logOut = e => {

        
        console.log(localStorage.getItem('token'));
        const userToken = localStorage.getItem('token')
        this.state.loggedIn.token = userToken
        if(!userToken){
            alert("you are not logged in")
        } else{
            alert("You are being Logged Out")
            localStorage.removeItem('token');
            this.props.history.push('/');
        }
    };


  render() {
    console.log(this.props)
     return (
        <>
        <Link onClick = { this.logOut }>
            Logout
          </Link>
        </>
     )
  }
}
export default Logout;