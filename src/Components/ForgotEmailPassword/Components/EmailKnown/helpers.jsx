//handle disable button based on query/fieldError state values
import React from "react";

import {ReactComponent as ErrorAlertIcon} from "../../../../Assets/svg/errorAlert.svg";

export const handleIsButtonDisabled = (query, fieldError) => {
  if (query?.email === "" || fieldError?.email) return true
  else return false
}

//if user exists, redirect to active form for password reset
//else generate form error, reset query/field error values of the email property
export const handleButtonActions = (isFetchedUsers, query, setQuery, fieldError, setFieldError, setCurrentActiveForm, formError, setFormError) => {
  let emailsArray = []

  Object?.keys(isFetchedUsers)?.forEach((key) => emailsArray?.push(key))

  let exists = !!emailsArray?.find((el) => el === query?.email)

  if (exists) setCurrentActiveForm("formActive")
  else {
    setFormError({...formError, nonExistant: true})
    setQuery({...query, email: ""})
    setFieldError({...fieldError, email: false})
    setTimeout(() => {
      setFormError({...formError, nonExistant: false})
    }, 3000)
    return null
  }
}


export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
if (frontendSlug === "email") {
    setQuery({...query, email: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, email: false})
    else setFieldError({...fieldError, email: true})
  }
  else return null
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
  if (frontendSlug === "email") return query?.newPassword
  else return undefined
}