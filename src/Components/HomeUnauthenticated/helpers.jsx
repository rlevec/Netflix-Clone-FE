import React, {useCallback, useEffect} from "react";
import {routes} from "../../Routes/routes.js";
import {setRegisteredMail} from "../../Redux/Slices/registeredMail.js";
import {setSignUpMail} from "../../Redux/Slices/signUpMailSlice.js";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ReactComponent as AngleRight} from "../../Assets/svg/angleRight.svg"
import {ReactComponent as ErrorAlertIcon} from "../../Assets/svg/errorAlert.svg";


export const isButtonDisabled = (query, fieldError) => {
  let isAnyQueryPropertyValueEmpty = Object.entries(query)?.some(([key, val]) => val === "")
  let isAnyFieldErrorTrue = Object.entries(fieldError)?.some(([key, val]) => val)
  if (isAnyQueryPropertyValueEmpty || isAnyFieldErrorTrue) return true
  else return false
}


//render div separator border
export const renderBorder = () => <div className="home_unauthenticated-fraction-separator"></div>

//generate dom element with dynamic targetRoute and dispatch actions based on whether user is registered on the BE
export const useHandleUserExistance = (query, classNameText, classNameSvg, englishTranslation, croatianTranslation, fieldError, isFetchedUsers) => {
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const dispatch = useDispatch()

  let emailsArray = []

  Object?.keys(isFetchedUsers)?.forEach((key) => emailsArray?.push(key))

  let exists = !!emailsArray?.find((el) => el === query?.email)

  let targetRoute = exists ? routes?.clientRoutes?.staticLoginRoute : routes?.clientRoutes?.staticSignUpRoute
  let invokeDispatchSequence = () => dispatch(exists ? setRegisteredMail({registeredMail: query?.email}) : setSignUpMail({signUpMail: query?.email}))

  return (
    <Link to={targetRoute}>
      <button
        onClick={() => {
          invokeDispatchSequence();
          window.scrollTo(0, 0)
        }}
        disabled={isButtonDisabled(query, fieldError)}
      >
        <div
          className={classNameText}>{activeLanguage === "English" ? englishTranslation : croatianTranslation}</div>
        <div className={classNameSvg}><AngleRight/></div>
      </button>
    </Link>
  )
}

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "email") {
    setQuery({...query, email: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, email: false})
    else setFieldError({...fieldError, email: true})
  } else return null
}

const handleErrorContainer = (errorEng, errorHr, activeLanguage) => {
  let error

  if (activeLanguage === "English") error = errorEng
  else error = errorHr

  return (
    <div className="field_error-icon-container">
      <div className="field_error-icon"><ErrorAlertIcon/></div>
      <div className="field_error-content">{error}</div>
    </div>
  )
}

export const handleFieldError = (frontendSlug, fieldError, errorEng, errorHr, activeLanguage) => {
  if (frontendSlug === "email" && fieldError?.email) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}

export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "email") {
    if (fieldError?.email) return `${componentClassName} error-active`
    else if (!fieldError?.email && query?.email !== "") return `${componentClassName} error-success`
    else return componentClassName
  } else return componentClassName
}

export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "email") return query?.email
  else return undefined
}

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
export const useHandlePrefixRouteNavigator = () => {
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name

  const navigate = useNavigate()

  const handlePrefixRouteNavigator = useCallback(() => {
    navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}`, {replace: true})
  }, [activeLanguage])

  useEffect(() => {
    handlePrefixRouteNavigator()
  }, [handlePrefixRouteNavigator])
}