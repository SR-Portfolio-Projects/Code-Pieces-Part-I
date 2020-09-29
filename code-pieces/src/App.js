import React, { Component } from 'react';

import Pieces from './components/Pieces';


import './App.css';


class App extends Component {
  state = {
    pieces: [
      {
        id: '1',
        title: 'React Is Fun',
        content: 'Cupcake sesame snaps jelly beans. Toffee sweet roll marzipan marzipan carrot cake biscuit gingerbread cake ice cream.',
        user: {
          userId: '9',
          displayName: 'Shannon Reed',
          email: 'shannon@email.com'
        },
        stars: 34,
        comments: 2000,
      },
      {
        id: '2',
        title: 'Computer Science: Fun or Not',
        content: 'Sweet roll dessert tiramisu muffin dragée apple pie candy marshmallow carrot cake.',
        user: {
          userId: '6',
          displayName: 'Keon Bell',
          email: 'keon@email.com'
        },
        stars: 87,
        comments: 5000,
      },
    ],
  };

  handleCreate = piece => {
    const { pieces } = this.state;
    this.setState({ pieces: [...pieces, piece] });
  };

  render() {
    const { pieces } = this.state;

    return (
      <div className="App">
          <h1>Code Pieces</h1>
          <Pieces pieces={pieces} onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
