import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'


import Comment from './comments/Comment';



const Comments = (props) => {
    const { numOfComments, commentsList } = props;

	return (
	    <div className="comment-section" key="comment-icons-container">
			<div className="comments-section-wrapper">
				<p className="comments-number">{ numOfComments } comments</p>
					<FontAwesomeIcon icon = { faComments } />
			</div>
                { commentsList ?
                    commentsList.map((comment, index) => {
                        return <Comment key = {index} comment = { comment } />
                    
                }) : null}
                
		</div>
	);
}
;

export default Comments;