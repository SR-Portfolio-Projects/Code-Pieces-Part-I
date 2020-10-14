import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const EditPiece = (props) => {
	// const {  } = props;

	return (
		<div className="edit" key="edit-icon-container">
		    <Link to = '/editpieceform'>
            <FontAwesomeIcon
                    icon={faEdit}
            />
          </Link>
		
		</div>
	);
};

export default EditPiece;