import React from "react";

import {ReactComponent as ShowPassword} from "../../../../Assets/svg/passwordOn.svg";
import {ReactComponent as HidePassword} from "../../../../Assets/svg/passwordOff.svg";
import {ReactComponent as ErrorAlertIcon} from "../../../../Assets/svg/errorAlert.svg";


//disable button based on the query/fieldError state values
export const handleIsButtonDisabled = (query, fieldError) => {
  if (query?.newPassword === "" || query?.confirmNewPassword === "" || fieldError?.newPassword || fieldError?.confirmNewPassword) return true
  else return false
}

//handle password type based on the state value
export const handleInputType = (frontendSlug, type, showPassword) => {
  if (frontendSlug === "newPassword") {
    if (showPassword?.newPassword) return "text"
    else return type
  } else if (frontendSlug === "confirmNewPassword") {
    if (showPassword?.confirmNewPassword) return "text"
    else return type
  } else return type
}


//handle password icon based on the state value
export const handlePasswordIcon = (frontendSlug, showPassword, setShowPassword) => {
  if (frontendSlug === "newPassword") {
    if (showPassword?.newPassword) return <div
      onClick={() => setShowPassword({...showPassword, newPassword: !showPassword?.newPassword})}
      className="password-show-container">
      <ShowPassword/></div>
    else return <div
      onClick={() => setShowPassword({...showPassword, newPassword: !showPassword?.newPassword})}
      className="password-show-container">
      <HidePassword/></div>
  }
  else if (frontendSlug === "confirmNewPassword") {
    if (showPassword?.confirmNewPassword) return <div
      onClick={() => setShowPassword({...showPassword, confirmNewPassword: !showPassword?.confirmNewPassword})}
      className="password-show-container">
      <ShowPassword/></div>
    else return <div
      onClick={() => setShowPassword({...showPassword, confirmNewPassword: !showPassword?.confirmNewPassword})}
      className="password-show-container">
      <HidePassword/></div>
  }
}

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "newPassword") {
    setQuery({...query, newPassword: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, newPassword: false})
    else setFieldError({...fieldError, newPassword: true})
  } else if (frontendSlug === "confirmNewPassword") {
    setQuery({...query, confirmNewPassword: eventTargetValue})
    if (eventTargetValue === query?.newPassword) setFieldError({...fieldError, confirmNewPassword: false})
    else setFieldError({...fieldError, confirmNewPassword: true})
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


//render error container by frontendSlug
export const handleFieldError = (frontendSlug, fieldError, errorEng, errorHr, activeLanguage) => {
  if (frontendSlug === "newPassword" && fieldError?.newPassword) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "confirmNewPassword" && fieldError?.confirmNewPassword) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}

export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "newPassword") {
    if (fieldError?.newPassword) return `${componentClassName} error-newPassword-active`
    else if (!fieldError?.newPassword && query?.newPassword !== "") return `${componentClassName} error-newPassword-success`
    else return componentClassName
  } else if (frontendSlug === "confirmNewPassword") {
    if (fieldError?.confirmNewPassword) return `${componentClassName} error-confirmNewPassword-active`
    else if (!fieldError?.confirmNewPassword && query?.confirmNewPassword !== "") return `${componentClassName} error-confirmNewPassword-success`
    else return componentClassName
  }
  else return componentClassName
}


export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "newPassword") return query?.newPassword
  else if (frontendSlug === "confirmNewPassword") return query?.confirmNewPassword
  else return undefined
}
