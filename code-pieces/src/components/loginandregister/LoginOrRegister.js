import React from 'react';

const LoginOrRegister = props => {
    return (
      <div
        className="logInOrRegister"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };

  export default LoginOrRegister
  