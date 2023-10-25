import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {routes} from "../../Routes/routes.js";


const handleFullPrefix = (activeLanguage, geoLocationCountry) => {
  let newGeoLocationCountry
  let newActiveLanguage

  if (geoLocationCountry !== "") {
    if (geoLocationCountry === "Croatia") newGeoLocationCountry = "hr"
    else newGeoLocationCountry = "en"
  }
  if (activeLanguage !== "") {
    if (activeLanguage === "Hrvatski") newActiveLanguage = "hr"
    else if (activeLanguage === "English") newActiveLanguage = "en"
    else newActiveLanguage = "en"
  }

  let fullPrefix = () => {
    if (newGeoLocationCountry === newActiveLanguage) return newActiveLanguage
    else return `${newGeoLocationCountry}-${newActiveLanguage}`
  }

  return fullPrefix()
}


//handle navigation and replacing history
export const useHandlePrefixRouteNavigator = (relativePath) => {
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name

  const navigate = useNavigate()

  const handlePrefixRouteNavigator = useCallback(() => {

    if (relativePath === routes?.clientRoutes?.staticLoginRoute) {
      navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticLoginRoute}`, {replace: false})
    }
    if(relativePath === routes?.clientRoutes?.staticSignUpRoute) {
      navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticSignUpRoute}`, {replace: false})
    }
    if(relativePath === routes?.clientRoutes?.staticLoginHelpRoute) {
      navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticLoginHelpRoute}`, {replace: false})
    }
    if(relativePath === routes?.clientRoutes?.staticBrowseRoute) {
      navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticBrowseRoute}`, {replace: true})
    }
  }, [activeLanguage])

  useEffect(() => {
    handlePrefixRouteNavigator()
  }, [handlePrefixRouteNavigator])
}