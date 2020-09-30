import React from "react";

const Comment = ({ comment }) => {
    const { id, username, text } = comment;
  

	return (
	    <div>
            <p>{ text }</p>
			
		</div>
	);
};

export default Comment;