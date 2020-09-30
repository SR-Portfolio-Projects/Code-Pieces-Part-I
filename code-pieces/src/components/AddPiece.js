import React, { useState } from "react";


const AddPiece = ({addPiece}) => {
  const [title, setTitle] = useState();
	const [content, setContent] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const newPiece = {
      id: Date.now().toString(),
      title: title,
      content: content,
      imageUrl:"https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",

      user: {
        userId: '1',
        userImage: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
        displayName: 'Robin Love',
        email: 'robin@email.com'
      },
      likes: 0,
      comments: 0,
      createdAt: new Date(),
    }

    addPiece(newPiece);

    setTitle('');
    setContent('');
  };


  const handleChange = e => {
    e.preventDefault();

		const inputValue = e.target.value;

		switch (e.target.name) {
			case "title":
				setTitle(inputValue);
				break;
			case "content":
				setContent(inputValue);
				break;
			default:
				break;
		}
  };

  


    return (
      <div className = 'form'>
        <h2>Add Your Code Piece</h2>
        <form onSubmit={handleSubmit} className="AddPiece">

          <input className = 'title'
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleChange}
          />
          <textarea className = ''
                    rows='10'
                    type="text"
                    name="content"
                    placeholder="Body"
                    value={content}
                    onChange={handleChange}>
          </textarea>
          <button className="create" 
                type="submit" 
                >Create Piece</button>
        </form>
      </div>
    );
  }

export default AddPiece;

