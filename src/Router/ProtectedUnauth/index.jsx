import React from "react";

import {Navigate} from "react-router-dom";

import {useSelector} from "react-redux";
import {routes} from "../../Routes/routes.js";

import {handleFullPrefix} from "./helpers.js";

export default function ProtectedUnauth({children}) {
  const userEmail = useSelector((state) => state?.userMail?.userMail)
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name

  const renderNavigateComponent = () => <Navigate to={`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.root}`} replace={true}/>

  let isUserLogged = false

  if(userEmail) isUserLogged = true
  else isUserLogged = false


  return !isUserLogged ? renderNavigateComponent() : children
}