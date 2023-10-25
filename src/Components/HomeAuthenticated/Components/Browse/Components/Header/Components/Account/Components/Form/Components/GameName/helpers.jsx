import React from "react";


import {ReactComponent as ErrorAlertIcon} from "../../../../../../../../../../../../Assets/svg/errorAlert.svg";
import {setUserMail} from "../../../../../../../../../../../../Redux/Slices/userMailSlice.js";


export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError, validationVisa, validationMaster, validationAmex, validationMaestro, min, max, activeForm, type) => {
  if (frontendSlug === "gameHandle") {
    setQuery({...query, gameName: eventTargetValue})
    let regex = new RegExp(validation)
    setFieldError({...fieldError, gameName: false})
  } else return null
}


export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "gameHandle") return query?.gameName
  else return undefined
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
  if (frontendSlug === "gameHandle" && fieldError?.gameName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}


export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "gameHandle") {
    if (fieldError?.gameName) return `${componentClassName} error-gameHandle-active`
    else if (!fieldError?.gameName && query?.gameName !== "") return `${componentClassName} error-gameHandle-success`
    else return componentClassName
  } else return componentClassName
}


export const handleClick = (frontendSlug, changeGameName, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, query, setQuery, fieldError, setFieldError, responseMessage, setResponseMessage, changeGameNameFormAlert, gameNameBackend) => {
  if (frontendSlug === "submit") {
    if (gameNameBackend === query?.gameName) {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        error: activeLanguage === "English" ? changeGameNameFormAlert?.error?.labelEng : changeGameNameFormAlert?.error?.labelHr
      })

      let timeout = setTimeout(() => {
        setQuery({...query, gameName: ""})
        setFieldError({fieldError, gameName: false})
        setResponseMessage({...responseMessage, error: null})
      }, 3000)

      return () => clearTimeout(timeout)
    } else {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        success: activeLanguage === "English" ? changeGameNameFormAlert?.success?.labelEng : changeGameNameFormAlert?.success?.labelHr
      })

      let timeout = setTimeout(() => {
        setResponseMessage({...responseMessage, success: null})

        changeGameName({
          newGameName: query?.gameName,
          email: userEmail,
          activeLanguage,
          initialAccountName: dropdownAccountSlugActive
        })
      }, 3000)

      return () => clearTimeout(timeout)
    }
  } else if (frontendSlug === "back") {
    setActiveDropdownForm(null)
    setActiveDropdownFormContent(null)
  } else return null
}