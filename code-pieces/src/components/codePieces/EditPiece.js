import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const EditPiece = (props) => {
	const { likePiece, numberOfLikes, liked } = props;

	return (
		<div className="edit-section" key="edit-icon-container">
			{/* <div onClick = { updatePiece(id) } className="edit-section-wrapper">
				<p className="like-number">Edit</p>
					<FontAwesomeIcon color = { liked === true ? "red" : "black"}
									 icon={faEdit}
					/>
			</div> */}
		</div>
	);
};

export default EditPiece;