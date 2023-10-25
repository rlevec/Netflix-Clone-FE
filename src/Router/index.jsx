import React from "react";

import {routes} from "../Routes/routes.js";

import {createBrowserRouter} from "react-router-dom";

import HomeUnauthenticated from "../Components/HomeUnauthenticated/index.jsx";
import HomeAuthenticated from "../Components/HomeAuthenticated/index.jsx";
import SignUp from "../Components/SignUp/index.jsx";
import Login from "../Components/Login/index.jsx";
import ForgotEmailPassword from "../Components/ForgotEmailPassword/index.jsx";
import ProtectedAuth from "./ProtectedAuth/index.jsx";
import ProtectedUnauth from "./ProtectedUnauth/index.jsx";

const domRoutes = [
  {
    //path: CONST?.routes?.invalidRoute,
    //element: <RoutingError/>,
  },
  {
    path: "*",
    element: <div style={{color: "white"}}>404 PAGE</div>
  },
  {
    path: "/",
    element: (
      <ProtectedAuth>
        <HomeUnauthenticated/>
      </ProtectedAuth>
    ),
  },
  {
    path: routes?.clientRoutes?.dynamicHomeRoute,
    element: (
      <ProtectedAuth>
        <HomeUnauthenticated/>
      </ProtectedAuth>
    ),
  },
  {
    path: routes?.clientRoutes?.dynamicSignUpRoute,
    element: (
      <ProtectedAuth>
        <SignUp/>
      </ProtectedAuth>
    ),
  },
  {
    path: routes?.clientRoutes?.dynamicLoginRoute,
    element: (
      <ProtectedAuth>
        <Login/>
      </ProtectedAuth>
    ),
  },
  {
    path: routes?.clientRoutes?.dynamicLoginHelpRoute,
    element: (
      <ProtectedAuth>
        <ForgotEmailPassword/>
      </ProtectedAuth>
    )
  },
  {
    path: routes?.clientRoutes?.dynamicBrowseRoute,
    element: (
      <ProtectedUnauth>
        <HomeAuthenticated/>
      </ProtectedUnauth>
    )
  }
]


export const router = createBrowserRouter(domRoutes);