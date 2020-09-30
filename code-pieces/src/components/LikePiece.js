import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons'

const LikePiece = (props) => {
	const { likePiece, numberOfLikes, liked } = props;

	return (
		<div className="like-section" key="likes-icons-container">
			<div onClick={likePiece} className="like-section-wrapper">
				<p className="like-number">{ numberOfLikes } likes</p>
					<FontAwesomeIcon color = { liked === true ? "red" : "black"}
									 icon={faThumbsUp}
					/>
			</div>
		</div>
	);
};

export default LikePiece;