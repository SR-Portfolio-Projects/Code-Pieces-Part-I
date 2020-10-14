import React from "react";

const Comment = ({ comment }) => {
    const { username, text } = comment;
  

	return (
	    <div>
            <p>{ text } <span> Comment By:{ username} </span></p>
			
		</div>
	);
};

export default Comment;