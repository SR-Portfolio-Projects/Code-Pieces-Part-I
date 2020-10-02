import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons'


import Comment from './comments/Comment';



const Comments = (props) => {
	const { numOfComments, commentsList } = props;
	const [commentsOpen, setCommentsOpen] = useState(false)
	console.log(commentsList.length);

	const handleClick = () => {
		console.log('clicked');
		setCommentsOpen({commentsOpen: !commentsOpen})
		console.log(commentsOpen);
		
	}

	return (
	    <div className="comment-section-container" key="comment-container">

			<div className = 'comments-button' onClick = { handleClick }>
						<p className="comments-number">{ numOfComments } comments</p>
						<FontAwesomeIcon icon = { faComments } />
			</div>

				{ commentsList.length && (

					<div className = {`comments ${commentsOpen ? 'show' : 'hide'}`}>
						<div className = 'close-comments-button' onClick = { handleClick }>
							<FontAwesomeIcon icon = { faTimes } />
                  		</div>

						{commentsList.map((comment, index) => (

                            <div className = 'comment-list-item' key = {index} >
								<Comment comment = { comment } />
                            </div>

                        ))}
						<input></input>

						

					</div>
				)}
                
		</div>
	);
};

export default Comments;