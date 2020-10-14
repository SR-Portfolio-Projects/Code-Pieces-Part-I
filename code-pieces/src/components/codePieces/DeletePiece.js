import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeletePiece = ({deletePiece}) => {
  // console.log(pieces)

    return (
      <div className = 'delete'>
        
          <FontAwesomeIcon onClick = {deletePiece}
				                   icon={faTrashAlt}
	        />
       
      </div>
    );
  }

export default DeletePiece;

