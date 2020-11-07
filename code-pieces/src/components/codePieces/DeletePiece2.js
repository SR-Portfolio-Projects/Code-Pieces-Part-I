import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeletePiece2 = ({ deletePiece, clickedPiece}) => {
  // console.log(pieces)

    return (
      <div className = 'delete'>
        
          <FontAwesomeIcon onClick = {() => deletePiece(clickedPiece.id) } 
				                   icon={faTrashAlt}
	        />
       
      </div>
    );
  }

export default DeletePiece2;

