import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Browse, Home, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const {user} = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Switch>
        {/* <Route exact path={ROUTES.SIGN_IN}> */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        {/* </Route> */}
        {/* <Route exact path={ROUTES.SIGN_UP}> */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        {/* </Route> */}
        {/* <Route exact path={ROUTES.BROWSE}> */}
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        {/* </Route> */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
        {/* <Route exact path={ROUTES.HOME}> */}

        {/* </Route> */}
      </Switch>
    </Router>
  );
}
