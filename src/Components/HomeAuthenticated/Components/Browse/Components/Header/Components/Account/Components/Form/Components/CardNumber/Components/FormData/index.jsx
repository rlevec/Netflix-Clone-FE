import React, {useState} from "react";

import {StyledFormData} from "./styledFormData.js";

import {useSelector} from "react-redux";
import {usePostChangeUserPaymentInfoMutation} from "../../../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangePaymentInfo.js"

import {
  handleClick,
  handleDisabled,
  handleChangeAndValidation,
  handleFieldError,
  handleCreditCardImageToRender,
  handleInputBorderClassName,
  handleInputValues
} from "./helpers.jsx";

export default function FormData(props) {
  const {
    activeFormCreditCardTitleEng,
    activeFormCreditCardTitleHr,
    activeFormInputs,
    paymentImages,
    activeCardForm,
    query,
    setQuery,
    fieldError,
    setFieldError,
    activeFormButtons,
    setNextStepInitiated,
    setActiveForm,
    setActiveFormContent,
    isFetchedUsersData,
    changeCardNumberFormAlert
  } = props


  const [changePaymentInfo] = usePostChangeUserPaymentInfoMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})


  return (
    <StyledFormData inactive={responseMessage?.success || responseMessage?.error}>
      <div className="account_credit-card-form-data-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="account_credit-card-form-data-title">
          {activeLanguage === "English" ? activeFormCreditCardTitleEng : activeFormCreditCardTitleHr}
        </div>
        <div className="account_credit-card-form-data-images-container">
          {paymentImages?.map((el) => {
            const {activeSlug, image, alt, id} = el

            if (activeSlug === activeCardForm) return <img key={id} src={image} alt={alt}/>
          })}
        </div>
        <div className="account_credit-card-form-data-inputs-container">
          {activeFormInputs?.map((el) => {
            const {
              id,
              frontendSlug,
              type,
              name,
              placeholderEng,
              placeholderHr,
              validationVisa,
              validationAmex,
              validationMaster,
              validationMaestro,
              errorEng,
              errorHr,
              maxLength,
              min,
              max,
              validation
            } = el

            if (activeCardForm === "maestroCard" && frontendSlug === "ccv") return null


            return (
              <div className="account_credit-card-form-data-single-input-container" key={id}>
                <input
                  className={handleInputBorderClassName(frontendSlug, fieldError, `account_credit-card-form-data-single-input`, query)}
                  placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                  type={type}
                  name={name}
                  maxLength={maxLength || undefined}
                  value={handleInputValues(frontendSlug, query)}
                  onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError, validationVisa, validationMaster, validationAmex, validationMaestro, min, max, activeCardForm)}
                />
                {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
                {frontendSlug === "cardNumber" && handleCreditCardImageToRender(query, activeCardForm, paymentImages, validationVisa, validationAmex, validationMaster, validationMaestro)}
              </div>
            )
          })}
        </div>
        <div className="account_credit-card-form-data-buttons-container">
          {activeFormButtons?.map((el) => {
            const {
              id,
              frontendSlug,
              buttonTitleEng,
              buttonTitleHr
            } = el

            return (
              <div key={id} className={`${frontendSlug}Button-container`}>
                <button
                  onClick={() => handleClick(frontendSlug, setNextStepInitiated, changePaymentInfo, userEmail, activeLanguage, query, setActiveForm, setActiveFormContent, setQuery, fieldError, setFieldError, isFetchedUsersData, changeCardNumberFormAlert, responseMessage, setResponseMessage)}
                  disabled={handleDisabled(frontendSlug, query, activeCardForm, fieldError)}
                >{activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}</button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledFormData>
  )
}