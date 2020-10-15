import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
     return (
        <div className = 'menu'>
            <nav>
                {/* <Link className = 'menu-link' to = '/'>
                    Homepage
                </Link> */}
                <Link className = 'menu-link' to = '/addpiece'>
                    Add Piece
                </Link>

                <Link className = 'menu-link' to = '/'>
                    Pieces Feed
                </Link>

                {/* <Link className = 'menu-link' to = '/addpiece'>
                    My Pieces
                </Link> */}
            </nav>
        </div>
     )
  }
export default Menu;