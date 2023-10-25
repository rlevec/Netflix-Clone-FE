import React, {useRef, useState} from "react";

import {StyledStepSix} from "./styledStepSix.js";
import {
  handleActivePlanByLanguage,
  handleChangeAndValidation,
  handleCreditCardImageToRender,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleRecaptchaChangeAndSignUp,
  disableSubscribeButton
} from "./helpers.jsx";



import {usePostUserRegistrationMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserRegistration.js"
import {usePostUserLogoutMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserLogout.js"

import {useNavigate} from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import {useSelector, useDispatch} from "react-redux";




export default function StepSix(props) {

  const {
    query,
    setQuery,
    fieldError,
    setFieldError,
    activeForm,
    renderContent,
    activePlan,
    setCurrentStep,
    profileSelected,
    errorMap
  } = props

  const [registerUser] = usePostUserRegistrationMutation()
  const [logoutUser] = usePostUserLogoutMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const recaptchaRef = useRef();

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name
  const userEmail = useSelector((state) => state?.userMail?.userMail)


  const [registrationInitiated, setRegistrationInitiated] = useState(false)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledStepSix inactive={responseMessage?.success || responseMessage?.error}>
      <div className="step_six-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="step_six-title">
          {activeLanguage === "English" ? renderContent[0]?.activeForm.activeFormCreditCardTitleEng : renderContent[0]?.activeForm.activeFormCreditCardTitleHr}
        </div>
        <div className="step-six-card-images-container">
          {renderContent[0]?.activeForm?.paymentImages?.map((el) => {
            const {activeSlug, image, alt, id} = el

            if (activeSlug === activeForm) return <img key={id} src={image} alt={alt}/>
          })}
        </div>
          <div className="step_six-inputs-container">
            {renderContent[0]?.activeForm?.activeFormInputs?.map((el) => {
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
                  {frontendSlug === "cardNumber" && handleCreditCardImageToRender(query, activeForm, renderContent[0]?.activeForm?.paymentImages, validationVisa, validationAmex, validationMaster, validationMaestro)}
                </div>
              )
            })}
          </div>
        {handleActivePlanByLanguage(renderContent[0]?.activeForm?.plans, activePlan, activeLanguage, renderContent[0]?.activeForm?.buttons, setCurrentStep)}
        <div className="step_six-credit-info-container">
          <span>{activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoOneEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoOneHr} </span>
          <span>{activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoTwoEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoTwoHr} </span>
          <span>{activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoThreeEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoThreeHr} </span>
          <span>{activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoFourEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoFourHr} </span>
          <span>{activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoFiveEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoFiveHr} </span>
          <span>{activeLanguage === "English" ? `(currently ${renderContent[0]?.activeForm?.plans?.find?.((el) => el?.frontendSlug === activePlan)?.costEng})` + " " : `(trenutno ${renderContent[0]?.activeForm?.plans?.find?.((el) => el?.frontendSlug === activePlan)?.costHr})` + " "}</span>
          <span>{activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoFiveSecEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoFiveSecHr} </span>
          <span>{activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoSixEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoSixHr} </span>
        </div>
        {registrationInitiated ? (
          <div className="step_six-captcha-wrapper">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lee1h0oAAAAACIs-8cww7_0HuweTUpYOaWvRJtf"
              onChange={(captchaValue) => handleRecaptchaChangeAndSignUp(captchaValue, activePlan, query, registerUser, setQuery, setCurrentStep, activeLanguage, geoLocationCountry, navigate, dispatch, setRegistrationInitiated, profileSelected, logoutUser, userEmail, responseMessage, setResponseMessage, errorMap)}
            />
          </div>
        ) : (
          <div className="step_six-captcha-info-container"
               dangerouslySetInnerHTML={{__html: activeLanguage === "English" ? renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoSevenEng : renderContent[0]?.activeForm?.inputFooterInfo?.creditCard?.infoSevenHr}}></div>
        )}
        <div className="step_six-button-container">
          <button onClick={() => setRegistrationInitiated(true)}
                  disabled={disableSubscribeButton(query, fieldError, activeForm)}>{activeLanguage === "English" ? renderContent[0]?.activeForm?.buttons?.creditCards?.buttonTitleEng : renderContent[0]?.activeForm?.buttons?.creditCards?.buttonTitleHr}</button>
        </div>
      </div>
    </StyledStepSix>
  )
}