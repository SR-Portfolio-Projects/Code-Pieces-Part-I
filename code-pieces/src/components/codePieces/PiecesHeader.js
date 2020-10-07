import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUserSecret, faPeopleCarry } from '@fortawesome/free-solid-svg-icons'


function PiecesHeader() {
     return (
        <div className = 'header'>
            <h1>Code Pieces</h1>

            <div className = 'sub-info'>
                <div className = 'sub'>
                    <FontAwesomeIcon icon={ faCode } className = 'sub-icon' />
                    <p>
                        Macaroon cheesecake candy canes powder oat cake sugar plum halvah soufflé. Fruitcake topping soufflé bear claw tootsie.
                    </p>

                </div>

                <div className = 'sub'>
                    <FontAwesomeIcon icon={ faUserSecret } className = 'sub-icon' />
                    <p>
                        Discoverd some secerts, had a really meaningful ahhaa moment. Share your thoughts and feelings and help other developers.
                    </p>
                    
                </div>

                <div className = 'sub'>
                    <FontAwesomeIcon icon={ faPeopleCarry } className = 'sub-icon' />
                    <p>
                        Need some ideas or help with something post it here and directly connect with other developers who would love to help.
                    </p>
                    
                </div>
            </div>
        </div>
     )
  }
export default PiecesHeader;