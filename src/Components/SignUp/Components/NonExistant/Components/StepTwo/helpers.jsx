import React from "react";

import {ReactComponent as ErrorAlertIcon} from "../../../../../../Assets/svg/errorAlert.svg";
import {ReactComponent as ShowPassword} from "../../../../../../Assets/svg/passwordOn.svg";
import {ReactComponent as HidePassword} from "../../../../../../Assets/svg/passwordOff.svg";

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "email") {
    setQuery({...query, email: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, email: false})
    else setFieldError({...fieldError, email: true})
  } else if (frontendSlug === "password") {
    setQuery({...query, password: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, password: false})
    else setFieldError({...fieldError, password: true})
  }
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
  else if (frontendSlug === "password" && fieldError?.password) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}

export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "email") {
    if (fieldError?.email) return `${componentClassName} error-active`
    else if (!fieldError?.email && query?.email !== "") return `${componentClassName} error-success`
    else return componentClassName
  } else if (frontendSlug === "password") {
    if (fieldError?.password) return `${componentClassName} error-password-active`
    else if (!fieldError?.password && query?.password !== "") return `${componentClassName} error-password-success`
    else return componentClassName
  }
}

export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "email") return query?.email
  else if (frontendSlug === "password") return query?.password
  else return undefined
}

export const handleInputType = (frontendSlug, type, showPassword) => {
  if (frontendSlug === "password") {
    if (showPassword?.password) return "text"
    else return type
  }
  else return type
}

export const handlePasswordIcon = (frontendSlug, showPassword, setShowPassword) => {
  if (frontendSlug === "password") {
    if (showPassword?.password) return <div
      onClick={() => setShowPassword({...showPassword, password: !showPassword?.password})}
      className="password-show-container">
      <ShowPassword/></div>
    else return <div
      onClick={() => setShowPassword({...showPassword, password: !showPassword?.password})}
      className="password-show-container">
      <HidePassword/></div>
  }
  else return null
}