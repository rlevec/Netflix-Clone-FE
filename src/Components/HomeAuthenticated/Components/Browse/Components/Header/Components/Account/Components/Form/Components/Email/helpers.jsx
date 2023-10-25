import {setUserMail} from "../../../../../../../../../../../../Redux/Slices/userMailSlice.js";

import React from "react";

import {ReactComponent as ErrorAlertIcon} from "../../../../../../../../../../../../Assets/svg/errorAlert.svg";


export const handleClick = (frontendSlug, setActiveForm, setActiveFormContent, changeEmail, query, userEmail, activeLanguage, dispatch, changeEmailFormAlert, responseMessage, setResponseMessage, setQuery, fieldError, setFieldError) => {
  if(frontendSlug === "submit") {
    if(userEmail === query?.email) {
      window.scrollTo(0, 0)

      setResponseMessage({...responseMessage, error: activeLanguage === "English" ? changeEmailFormAlert?.error?.labelEng : changeEmailFormAlert?.error?.labelHr})

      let timeout = setTimeout(() => {
        setQuery({...query, email: ""})
        setFieldError({fieldError, email: false})
        setResponseMessage({...responseMessage, error: null})
      }, 3000)

      return () => clearTimeout(timeout)
    }
    else {
      window.scrollTo(0, 0)

      setResponseMessage({...responseMessage, success: activeLanguage === "English" ? changeEmailFormAlert?.success?.labelEng : changeEmailFormAlert?.success?.labelHr})

      let timeout = setTimeout(() => {
        changeEmail({
          newEmail: query?.email,
          email: userEmail,
          activeLanguage
        })?.unwrap()?.then((response) => {
          if(response) {
            dispatch(setUserMail({userEmail: null}))
            setActiveForm(null)
            setActiveFormContent(null)
          }
        }).catch((error) => {
        })
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }
  else if(frontendSlug === "back") {
    setActiveForm(null)
    setActiveFormContent(null)
  }
  else return null
}

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError, validationVisa, validationMaster, validationAmex, validationMaestro, min, max, activeForm, type) => {
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
  if (frontendSlug === "email") return query?.email
  else return undefined
}