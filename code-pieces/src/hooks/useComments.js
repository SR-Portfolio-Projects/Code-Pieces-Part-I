import { useState } from 'react'



export const useComments = () => {
    const [commentsOpen, setCommentsOpen] = useState(false)


    const handleClick = () => {
		console.log('clicked');
		setCommentsOpen({commentsOpen: !commentsOpen})
		console.log(commentsOpen);
		
    }
    

        return [ commentsOpen, setCommentsOpen, handleClick];

}