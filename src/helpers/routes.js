import React from "react";
import { Route, Redirect } from "react-router-dom";

// If there is a user, redirect them to the loggedInPath,
// If there is no user, then redirect them to the children which will be different components.

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest}) {
    return (
        <Route
            { ...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect 
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    )
                }

                return null;
            }}
        />
    )
}