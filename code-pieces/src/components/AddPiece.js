import React, { Component } from 'react';

class AddPiece extends Component {
  state = { title: '', content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onCreate } = this.props;
    const { title, content } = this.state;

    const piece = {
      id: Date.now().toString(),
      title,
      content,
      user: {
        userId: '1',
        displayName: 'Robin Love',
        email: 'robin@email.com'
      },
      stars: 0,
      comments: 0,
      createdAt: new Date(),
    }

    onCreate(piece);

    this.setState({ title: '', content: '' });
  };

  render() {
    const { title, content } = this.state;
    return (
      <div className = 'form'>
        <h2>Add Your Code Piece</h2>
      <form onSubmit={this.handleSubmit} className="AddPiece">
        <input className = 'title'
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <textarea
          rows='10'
          type="text"
          name="content"
          placeholder="Body"
          value={content}
          onChange={this.handleChange}
        ></textarea>
        <input className="create" type="submit" value="Create Piece" />
      </form>
      </div>
    );
  }
}

export default AddPiece;
