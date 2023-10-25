import React from "react";

import {ReactComponent as CreditCard} from "../../../../Assets/svg/creditCard.svg";

import {ReactComponent as ErrorAlertIcon} from "../../../../Assets/svg/errorAlert.svg";


//handle credit card image to render on the credit card field based on the validated regex
export const handleCreditCardImageToRender = (query, paymentImages, validationVisa, validationAmex, validationMaster, validationMaestro) => {
  let visaRegex = new RegExp(validationVisa)
  let amexRegex = new RegExp(validationAmex)
  let masterRegex = new RegExp(validationMaster)
  let maestroRegex = new RegExp(validationMaestro)
  const imageToRender = (frontendSlug) => {
    const objectToMatch = paymentImages?.find((el) => el?.frontendSlug === frontendSlug)

    return <div className="card-field-image-container"><img src={objectToMatch?.image} alt={objectToMatch?.alt}/>
    </div>
  }

  if (visaRegex?.test(query?.cardNumber)) return imageToRender("visa")
  if (amexRegex?.test(query?.cardNumber)) return imageToRender("amex")
  if (masterRegex?.test(query?.cardNumber)) return imageToRender("master")
  if (maestroRegex?.test(query?.cardNumber)) return imageToRender("maestroCard")
  else return <div className="card-field-image-container"><CreditCard/></div>
}

//handle disable button based on query/fieldError state values
export const handleIsButtonDisabled = (query, fieldError) => {
  if (query?.cardNumber === "" || query?.firstName === "" || query?.lastName === "" || fieldError?.cardNumber || fieldError?.firstName || fieldError?.lastName) return true
  else return false
}


//handle button actions based on the BE data match
//match mail to an account on the BE
//check whether firstName && lastName && cardNumber queries match ones on the BE for the matcthed account
//if so, set mail to the state, pop success message, and redirect to knownMailForm
//if not,reset state values, pop error message
export const handleButtonActions = (frontendSlug, setCurrentActiveForm, isFetchedUsers, query, setQuery, fieldError, setFieldError, setGeneratedEmail, setFormSuccess, formSuccess, setFormError, formError) => {
  if (frontendSlug === "cancel") setCurrentActiveForm("knownMailForm")
  else if (frontendSlug === "findAccount") {


    let emailMatched = null

    Object.entries(isFetchedUsers)?.forEach(([key, val]) => {
      if (val?.firstName === query?.firstName && val?.lastName === query?.lastName && val?.cardNumber === query?.cardNumber) emailMatched = key
    })

    if (emailMatched) {
      setGeneratedEmail(emailMatched)
      setFormSuccess({...formSuccess, mailMatch: true})
      setTimeout(() => {
        setFormSuccess({...formSuccess, mailMatch: false})
        setCurrentActiveForm("knownMailForm")
      }, 3000)
    } else {
      setFormError({...formError, nonMatch: true})
      setTimeout(() => {
        setFormError({...formError, nonMatch: false})
        setQuery({...query, firstName: "", lastName: "", cardNumber: ""})
        setFieldError({...fieldError, firstName: false, lastName: false, cardNumber: false})
      }, 3000)
    }
  }
}


export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError, validationVisa, validationMaster, validationAmex, validationMaestro) => {
  if (frontendSlug === "cardNumber") {
    setQuery({...query, cardNumber: eventTargetValue})

    let visaRegex = new RegExp(validationVisa)
    let masterRegex = new RegExp(validationMaster)
    let amexRegex = new RegExp(validationAmex)
    let maestroRegex = new RegExp(validationMaestro)

    if (visaRegex.test(eventTargetValue) || masterRegex.test(eventTargetValue) || amexRegex.test(eventTargetValue) || maestroRegex.test(eventTargetValue)) {
      setFieldError({
        ...fieldError,
        cardNumber: false
      })
    } else {
      setFieldError({
        ...fieldError,
        cardNumber: true
      })
    }
  } else if (frontendSlug === "firstName") {
    setQuery({...query, firstName: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, firstName: false})
    else setFieldError({...fieldError, firstName: true})
  } else if (frontendSlug === "lastName") {
    setQuery({...query, lastName: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, lastName: false})
    else setFieldError({...fieldError, lastName: true})
  } else return null
}


export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "cardNumber") return query?.cardNumber
  else if (frontendSlug === "firstName") return query?.firstName
  else if (frontendSlug === "lastName") return query?.lastName
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
  if (frontendSlug === "cardNumber" && fieldError?.cardNumber) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "firstName" && fieldError?.firstName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "lastName" && fieldError?.lastName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}


export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "cardNumber") {
    if (fieldError?.cardNumber) return `${componentClassName} error-cardNumber-active`
    else if (!fieldError?.cardNumber && query?.cardNumber !== "") return `${componentClassName} error-cardNumber-success`
    else return componentClassName
  } else if (frontendSlug === "firstName") {
    if (fieldError?.firstName) return `${componentClassName} error-firstName-active`
    else if (!fieldError?.firstName && query?.firstName !== "") return `${componentClassName} error-firstName-success`
    else return componentClassName
  } else if (frontendSlug === "lastName") {
    if (fieldError?.lastName) return `${componentClassName} error-lastName-active`
    else if (!fieldError?.lastName && query?.lastName !== "") return `${componentClassName} error-lastName-success`
    else return componentClassName
  } else return componentClassName
}