import React from "react";

import {ReactComponent as CreditCard} from "../../../../../../../../../../../../Assets/svg/creditCard.svg";
import {ReactComponent as ErrorAlertIcon} from "../../../../../../../../../../../../Assets//svg/errorAlert.svg";


import {setSignUpMail} from "../../../../../../../../../../../../Redux/Slices/signUpMailSlice.js";
import {setRegisteredMail} from "../../../../../../../../../../../../Redux/Slices/registeredMail.js";

import {routes} from "../../../../../../../../../../../../Routes/routes.js";
import {setUserMail} from "../../../../../../../../../../../../Redux/Slices/userMailSlice.js";


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

//render card image in field based on the validated cardNumber query
export const handleCreditCardImageToRender = (query, activeForm, paymentImages, validationVisa, validationAmex, validationMaster, validationMaestro) => {
  let visaRegex = new RegExp(validationVisa)
  let amexRegex = new RegExp(validationAmex)
  let masterRegex = new RegExp(validationMaster)
  let maestroRegex = new RegExp(validationMaestro)
  const imageToRender = (frontendSlug) => {
    const objectToMatch = paymentImages?.find((el) => el?.frontendSlug === frontendSlug)

    return <div className="card-field-image-container"><img src={objectToMatch?.image} alt={objectToMatch?.alt}/>
    </div>
  }

  if (activeForm === "creditDebitCard") {
    if (visaRegex?.test(query?.cardNumber)) return imageToRender("visa")
    if (amexRegex?.test(query?.cardNumber)) return imageToRender("amex")
    if (masterRegex?.test(query?.cardNumber)) return imageToRender("master")
    else return <div className="card-field-image-container"><CreditCard/></div>
  } else if (activeForm === "maestroCard") {
    if (maestroRegex?.test(query?.cardNumber)) return imageToRender("maestroCard")
    else return <div className="card-field-image-container"><CreditCard/></div>
  } else return <div className="card-field-image-container"><CreditCard/></div>
}


//render active plan by language
export const handleActivePlanByLanguage = (plans, activePlan, activeLanguage, buttons, setCurrentStep) => {
  const matchObject = plans?.find?.((el) => el?.frontendSlug === activePlan)

  return (
    <div className="active_plan-wrapper">
      <div className="active_plan-wrapper-price-title-container">
        <div
          className="active_plan-wrapper-price">{activeLanguage === "English" ? matchObject?.costEng : matchObject?.costHr}</div>
        <div
          className="active_plan-wrapper-title">{activeLanguage === "English" ? matchObject?.titleEng : matchObject?.titleHr}</div>
      </div>
      <div className="active_plan-wrapper-button-container">
        <button onClick={() => {
          setCurrentStep(4);
          window.scrollTo(0, 0)
        }}>{activeLanguage === "English" ? buttons?.planButton?.buttonTitleEng : buttons?.planButton?.buttonTitleHr}</button>
      </div>
    </div>
  )
}


//disable subscribe button if any query is empty or any fieldError is true
export const disableSubscribeButton = (query, fieldError, activeForm) => {
  let isAnyQueryEmpty = false
  let isAnyFieldInError = false


  Object.entries(query)?.forEach(([key, val]) => {
    if (val === "") {
      if (activeForm === "maestroCard" && key === "ccv") {
        isAnyQueryEmpty = false
      } else {
        isAnyQueryEmpty = true
        return null
      }
    }
  })

  Object.entries(fieldError)?.forEach(([key, val]) => {
    if (val === true) {
      isAnyFieldInError = true
      return null
    }
  })

  if (isAnyQueryEmpty === false && isAnyFieldInError === false) return false
  else return true
}


export const handleRecaptchaChangeAndSignUp = (captchaValue, activePlan, query, registerUser, setQuery, setCurrentStep, activeLanguage, geoLocationCountry, navigate, dispatch, setRegistrationInitiated, profileSelected, logoutUser, userEmail, responseMessage, setResponseMessage, errorMap) => {


  let newAccount = []

  newAccount?.push(profileSelected)

  window.scrollTo(0, 0)
  setResponseMessage({...responseMessage, success: activeLanguage === "English" ? errorMap?.success?.labelEng : errorMap?.success?.labelHr})

  //centralize all registration data into object variable
  const dataToPost = {
    cardNumber: query?.cardNumber,
    ccv: query?.ccv,
    firstName: query?.firstName,
    lastName: query?.lastName,
    email: query?.newEmail,
    password: query?.newPassword,
    activePlan,
    captchaValue,
    activeLanguage,
    loggedStatus: false,
    profileTransfer: false,
    accounts: newAccount
  }

  let timeout = setTimeout(() => {
    setResponseMessage({...responseMessage, error: null})

    registerUser(dataToPost)
    logoutUser({
      email: userEmail,
      activeLanguage,
    })
    dispatch(setUserMail({userEmail: null}));
    dispatch(setSignUpMail({signUpMail: query?.email}));
    dispatch(setRegisteredMail({registeredMail: query?.email}));
  }, 3000)

  return () => clearTimeout(timeout)

};


export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError, validationVisa, validationMaster, validationAmex, validationMaestro, min, max, activeForm, type) => {
  if (frontendSlug === "cardNumber") {

    setQuery({...query, cardNumber: eventTargetValue})

    let visaRegex = new RegExp(validationVisa)
    let masterRegex = new RegExp(validationMaster)
    let amexRegex = new RegExp(validationAmex)
    let maestroRegex = new RegExp(validationMaestro)

    if (type && type === "forgotEmailPasswordForm") {
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
    } else {
      if (activeForm === "creditDebitCard") {
        if (visaRegex.test(eventTargetValue) || masterRegex.test(eventTargetValue) || amexRegex.test(eventTargetValue)) {
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
      } else if (activeForm === "maestroCard") {
        if (maestroRegex.test(eventTargetValue)) {
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
      } else {
        setFieldError({
          ...fieldError,
          cardNumber: false
        })
      }
    }

  } else if (frontendSlug === "expirationDate") {
    if (eventTargetValue?.length < 2) setQuery({...query, expirationDate: eventTargetValue})
    else if (eventTargetValue?.length === 2 && query?.expirationDate?.includes("/")) setQuery({
      ...query,
      expirationDate: eventTargetValue
    })
    else if (eventTargetValue?.length === 2) setQuery({...query, expirationDate: eventTargetValue + "/"})
    else {
      setQuery({...query, expirationDate: eventTargetValue})
      if (eventTargetValue?.length === 5) {
        let monthCheck = eventTargetValue?.toString().slice(0, 2) >= 1 && eventTargetValue?.toString().slice(0, 2) <= 12
        let yearCheck = eventTargetValue?.toString().slice(-2) >= min?.toString()?.slice(-2) && eventTargetValue?.toString().slice(-2) <= max?.toString()?.slice(-2)

        if (yearCheck && monthCheck) setFieldError({...fieldError, expirationDate: false})
        else setFieldError({...fieldError, expirationDate: true})
      } else setFieldError({...fieldError, expirationDate: true})
    }
  } else if (frontendSlug === "ccv") {
    setQuery({...query, ccv: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, ccv: false})
    else setFieldError({...fieldError, ccv: true})
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
  if (frontendSlug === "cardNumber" && fieldError?.cardNumber) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "expirationDate" && fieldError?.expirationDate) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "ccv" && fieldError?.ccv) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "firstName" && fieldError?.firstName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "lastName" && fieldError?.lastName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}


export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "cardNumber") {
    if (fieldError?.cardNumber) return `${componentClassName} error-cardNumber-active`
    else if (!fieldError?.cardNumber && query?.cardNumber !== "") return `${componentClassName} error-cardNumber-success`
    else return componentClassName
  } else if (frontendSlug === "expirationDate") {
    if (fieldError?.expirationDate) return `${componentClassName} error-expirationDate-active`
    else if (!fieldError?.expirationDate && query?.expirationDate !== "") return `${componentClassName} error-expirationDate-success`
    else return componentClassName
  } else if (frontendSlug === "ccv") {
    if (fieldError?.ccv) return `${componentClassName} error-ccv-active`
    else if (!fieldError?.ccv && query?.ccv !== "") return `${componentClassName} error-ccv-success`
    else return componentClassName
  } else if (frontendSlug === "firstName") {
    if (fieldError?.firstName) return `${componentClassName} error-firstName-active`
    else if (!fieldError?.firstName && query?.firstName !== "") return `${componentClassName} error-firstName-success`
    else return componentClassName
  } else if (frontendSlug === "lastName") {
    if (fieldError?.lastName) return `${componentClassName} error-lastName-active`
    else if (!fieldError?.lastName && query?.lastName !== "") return `${componentClassName} error-lastName-success`
    else return componentClassName
  } else if (frontendSlug === "cardNumber") {
    if (fieldError?.cardNumber) return `${componentClassName} error-active-${frontendSlug}`
    else if (!fieldError?.cardNumber && query?.cardNumber !== "") return `${componentClassName} error-success-${frontendSlug}`
    else return componentClassName
  } else return componentClassName
}

export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "cardNumber") return query?.cardNumber
  else if (frontendSlug === "expirationDate") return query?.expirationDate
  else if (frontendSlug === "ccv") return query?.ccv
  else if (frontendSlug === "firstName") return query?.firstName
  else if (frontendSlug === "lastName") return query?.lastName
  else return undefined
}
