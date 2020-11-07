import React from 'react';
import { Link } from 'react-router-dom';
import Header from './codePieces/Header';
import Logout from './loginandregister/components/Logout';

function Menu() {
    console.log(localStorage.getItem('token'));
    const userToken =  localStorage.getItem('token')
     return (
         <>
          {(!userToken) ? null:
        <div className = 'menu'>
            <nav>
                <Link className = 'menu-link' to = '/userhome'>
                    Home
                </Link>
                <Link className = 'menu-link' to = '/addpiece'>
                    Add Piece
                </Link>

                <Link className = 'menu-link' to = '/pieces'>
                    Pieces Feed
                </Link>
                    <Logout /> 
            </nav>
            
        </div>
        
    }

    <Header />
        </>
     )
  }
export default Menu;