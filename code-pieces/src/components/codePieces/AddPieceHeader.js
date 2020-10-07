import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


function AddPieceHeader() {
     return (
        <div className = 'header'>
                <div className = 'add-piece-sub'>
                    <FontAwesomeIcon icon={ faPlusSquare } className = 'sub-icon' />
                    <p>
                        Macaroon cheesecake candy canes powder oat cake sugar plum halvah soufflé. Fruitcake topping soufflé bear claw tootsie.
                    </p>

                </div>

                
        </div>
     )
  }
export default AddPieceHeader;