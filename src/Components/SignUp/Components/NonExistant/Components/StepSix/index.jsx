import React, {useRef, useState} from "react";

import {StyledStepSix} from "./styledStepSix.js";

import {useNavigate} from "react-router-dom";

import {
  handleCreditCardImageToRender,
  handleActivePlanByLanguage,
  disableSubscribeButton,
  handleRecaptchaChangeAndSignUp,
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
} from "./helpers.jsx";

import ReCAPTCHA from "react-google-recaptcha";

import { usePostUserRegistrationMutation } from "../../../../../../Redux/Injections/UserPostRequests/postUserRegistration.js";

import {useSelector, useDispatch} from "react-redux";


export default function StepSix(props) {
  const {
    data: {
      activeForm: {
        activeFormCreditCardTitleEng,
        activeFormCreditCardTitleHr,
        activeFormInputs,
        buttons,
        inputFooterInfo,
        plans,
        paymentImages,
      }
    }, query, setQuery, fieldError, setFieldError, activePlan, setCurrentStep, activeForm
  } = props

  const [registerUser] = usePostUserRegistrationMutation()


  const navigate = useNavigate()

  const dispatch = useDispatch()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name

  const recaptchaRef = useRef();


  const [registrationInitiated, setRegistrationInitiated] = useState(false)
  const [responseError, setResponseError] = useState(null);
  const [responseSuccess, setResponseSuccess] = useState(null)


  return (
    <StyledStepSix inactive={responseError || responseSuccess}>
      {responseError && <div className="step_six-form-error">{responseError}</div>}
      {responseSuccess && <div className="step_six-form-success">{responseSuccess}</div>}
      <div className="step_six-title">
        {activeLanguage === "English" ? activeFormCreditCardTitleEng : activeFormCreditCardTitleHr}
      </div>
      <div className="step-six-card-images-container">
        {paymentImages?.map((el) => {
          const {activeSlug, image, alt, id} = el

          if (activeSlug === activeForm) return <img key={id} src={image} alt={alt}/>
        })}
      </div>
      {(activeForm === "creditDebitCard" || activeForm === "maestroCard") && (
        <div className="step_six-inputs-container">
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

            if (activeForm === "maestroCard" && frontendSlug === "ccv") return null


            return (
              <div className="step_six-single-input-container" key={id}>
                <input
                  className={handleInputBorderClassName(frontendSlug, fieldError, `step_six-input`, query)}
                  placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                  type={type}
                  name={name}
                  maxLength={maxLength || undefined}
                  value={handleInputValues(frontendSlug, query)}
                  onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError, validationVisa, validationMaster, validationAmex, validationMaestro, min, max, activeForm)}
                />
                {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
                {frontendSlug === "cardNumber" && handleCreditCardImageToRender(query, activeForm, paymentImages, validationVisa, validationAmex, validationMaster, validationMaestro)}
              </div>
            )
          })}
        </div>
      )
      }
      {handleActivePlanByLanguage(plans, activePlan, activeLanguage, buttons, setCurrentStep)}
      <div className="step_six-credit-info-container">
        <span>{activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoOneEng : inputFooterInfo?.creditCard?.infoOneHr} </span>
        <span>{activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoTwoEng : inputFooterInfo?.creditCard?.infoTwoHr} </span>
        <span>{activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoThreeEng : inputFooterInfo?.creditCard?.infoThreeHr} </span>
        <span>{activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoFourEng : inputFooterInfo?.creditCard?.infoFourHr} </span>
        <span>{activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoFiveEng : inputFooterInfo?.creditCard?.infoFiveHr} </span>
        <span>{activeLanguage === "English" ? `(currently ${plans?.find?.((el) => el?.frontendSlug === activePlan)?.costEng})` + " " : `(trenutno ${plans?.find?.((el) => el?.frontendSlug === activePlan)?.costHr})` + " "}</span>
        <span>{activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoFiveSecEng : inputFooterInfo?.creditCard?.infoFiveSecHr} </span>
        <span>{activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoSixEng : inputFooterInfo?.creditCard?.infoSixHr} </span>
      </div>
      {registrationInitiated ? (
        <div className="step_six-captcha-wrapper">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Lee1h0oAAAAACIs-8cww7_0HuweTUpYOaWvRJtf"
            onChange={(captchaValue) => handleRecaptchaChangeAndSignUp(captchaValue, activePlan, query, registerUser, setResponseSuccess, setResponseError, setQuery, setCurrentStep, activeLanguage, geoLocationCountry, navigate, dispatch, setRegistrationInitiated)}
          />
        </div>
      ) : (
        (activeForm === "creditDebitCard" || activeForm === "maestroCard") &&
        <div className="step_six-captcha-info-container"
             dangerouslySetInnerHTML={{__html: activeLanguage === "English" ? inputFooterInfo?.creditCard?.infoSevenEng : inputFooterInfo?.creditCard?.infoSevenHr}}></div>

      )}
      <div className="step_six-button-container">
        <button onClick={() => setRegistrationInitiated(true)}
                disabled={disableSubscribeButton(query, fieldError, activeForm)}>{activeLanguage === "English" ? buttons?.creditCards?.buttonTitleEng : buttons?.creditCards?.buttonTitleHr}</button>
      </div>
    </StyledStepSix>
  )
}