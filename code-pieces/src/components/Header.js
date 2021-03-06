import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUserSecret, faPeopleCarry } from '@fortawesome/free-solid-svg-icons'


function Header() {
     return (
        <div className = 'header'>
            <h1>Code Pieces</h1>
            {/* <h3>A place to meet new developers while sharing and learning tips and tricks.</h3> */}

            <div className = 'sub-info'>
                <div className = 'sub'>
                    <FontAwesomeIcon icon={ faCode } className = 'sub-icon' />
                    <p>
                         Talk about meaningful experiences, share jokes, ask questions if coding is invloved it belongs here.
                    </p>

                </div>

                <div className = 'sub'>
                    <FontAwesomeIcon icon={ faUserSecret } className = 'sub-icon' />
                    <p>
                        Want to discoverd some secerts? Had a meaningful ahhaa moment? Share your thoughts and feelings and help other developers.
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
export default Header;