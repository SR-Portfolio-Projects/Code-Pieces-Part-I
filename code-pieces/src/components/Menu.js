import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './loginandregister/components/Logout';


function Menu() {
    console.log(localStorage.getItem('token'));
    const userToken =  localStorage.getItem('token')
     return (
         <>
          {(userToken) ? 
        <div className = 'menu'>
            <nav>
                <Link className = 'menu-link' to = '/'>
                    Homepage
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
        : null
    }
        </>
     )
  }
export default Menu;