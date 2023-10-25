import React from "react";

import {ReactComponent as ErrorAlertIcon} from "../../../../../../../../../../../../Assets/svg/errorAlert.svg";

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "accountName") {
    setQuery({...query, accountName: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, accountName: false})
    else setFieldError({...fieldError, accountName: true})
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
  if (frontendSlug === "accountName" && fieldError?.accountName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}


export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "accountName") {
    if (fieldError?.accountName) return `${componentClassName} error-accountName-active`
    else if (!fieldError?.accountName && query?.accountName !== "") return `${componentClassName} error-accountName-success`
    else return componentClassName
  } else return componentClassName
}

export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "accountName") return query?.accountName
  else return undefined
}


export const handleClick = (frontendSlug, accountNameBackend, query, setQuery, fieldError, setFieldError, setResponseMessage, responseMessage, activeLanguage, changeAccountNameFormAlert, setActiveAccountName, setBrowseProfileActive, changeAccountName, userEmail, setActiveDropdownForm, setActiveDropdownFormContent) => {
  if(frontendSlug === "submit") {
    if(accountNameBackend === query?.accountName) {
      window.scrollTo(0, 0)
      setResponseMessage({...responseMessage, error: activeLanguage === "English" ? changeAccountNameFormAlert?.error?.labelEng : changeAccountNameFormAlert?.error?.labelHr})

      let timeout = setTimeout(() => {
        setResponseMessage(null)
        setQuery({...query, accountName: ""})
        setFieldError({...fieldError, accountName: false})
      }, 3000)

      return () => clearTimeout(timeout)
    }

    else {
      window.scrollTo(0, 0)
      setResponseMessage({...responseMessage, success: activeLanguage === "English" ? changeAccountNameFormAlert?.success?.labelEng : changeAccountNameFormAlert?.success?.labelHr})
      setActiveAccountName(query?.accountName)
      setBrowseProfileActive(query?.accountName)

      let timeout = setTimeout(() => {
        changeAccountName({
          newAccountName: query?.accountName,
          email: userEmail,
          activeLanguage,
          initialAccountName: accountNameBackend
        })
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }
  else if(frontendSlug === "back") {
    setActiveDropdownForm(null)
    setActiveDropdownFormContent(null)
  }
  else return null
}
