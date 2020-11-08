import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, render: Render, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          Render ? (
            Render(props)
          ) : Component ? (
            <Component {...props}/>
        ) : null
        ) : (
          <Redirect to="/" />
        )

        }
    />
  );


export default PrivateRoute;