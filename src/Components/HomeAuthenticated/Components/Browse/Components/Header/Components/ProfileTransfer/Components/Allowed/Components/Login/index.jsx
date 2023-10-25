import React, {useRef, useState} from "react";

import {StyledLogin} from "./styledLogin.js";
//import {usePostUserLoginMutation, usePostCreateUserProfileMutation, usePostUserLogoutMutation} from "../../../../../../../../../../../../Redux/Slices/apiSlice.js";


import {usePostUserLoginMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserLogin.js"
import {usePostCreateUserProfileMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserCreateProfile.js"
import {usePostUserLogoutMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserLogout.js"

import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  handleChangeAndValidation,
  handleFieldError,
  handleFullPrefix,
  handleInputBorderClassName,
  handleInputType,
  handleInputValues,
  handlePasswordIcon,
  handleRecaptchaChangeAndSignIn,
  isButtonDisabled
} from "./helpers.jsx";
import {routes} from "../../../../../../../../../../../../Routes/routes.js";
import ReCAPTCHA from "react-google-recaptcha";

import {ReactComponent as Logo} from "../../../../../../../../../../../../Assets/svg/logo.svg";


export default function Login(props) {
  const {
    loginContent,
    setActiveSubComponent,
    queryPlaceholder,
    setActiveLoginForm,
    setCurrentStep,
    errorMap,
    isFetchedUsersData,
    profileSelected
  } = props

  const [logUser] = usePostUserLoginMutation()
  const [logoutUser] = usePostUserLogoutMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const recaptchaRef = useRef();

  const [query, setQuery] = useState(
    {
      email: queryPlaceholder?.newEmail || "",
      password: queryPlaceholder?.newPassword || ""
    })
  const [fieldError, setFieldError] = useState({email: false, password: false})
  const [showPassword, setShowPassword] = useState({password: false})
  const [loginInitiated, setLoginInitated] = useState(false)
  const [rememberLoginData, setRememberLoginData] = useState(false)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})


  const [createUserProfile] = usePostCreateUserProfileMutation()


  return (
    <StyledLogin className={"styledComponent-Login"} backgroundImage={loginContent?.backgroundImage} inactive={responseMessage?.success || responseMessage?.error}>
      <div className="login_wrapper">
        <div className="login_form-wrapper">
          {responseMessage?.error && <div className="login-form-error">{responseMessage?.error}</div>}
          {responseMessage?.success && <div className="login-form-success">{responseMessage?.success}</div>}
          <div className="login_form-container">
            <div className="header_container">
              <div className="svg-container" onClick={() => setActiveSubComponent(null)}><Logo/></div>
            </div>
            <div className="login_form-header">
              {activeLanguage === "English" ? loginContent?.headerTitleEng : loginContent?.headerTitleHr}
            </div>
            <div className="login_form-inputs-container">
              {
                loginContent?.inputs?.map((el) => {
                  const {
                    id,
                    frontendSlug,
                    placeholderEng,
                    placeholderHr,
                    name,
                    type,
                    validation,
                    errorEng,
                    errorHr
                  } = el

                  return (
                    <div className="login_form-input-container" key={id}>
                      <input
                        className={handleInputBorderClassName(frontendSlug, fieldError, "login_form-input", query)}
                        onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError)}
                        type={handleInputType(frontendSlug, type, showPassword)}
                        name={name}
                        placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                        value={handleInputValues(frontendSlug, query)}
                      />
                      {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
                      {frontendSlug === "password" && handlePasswordIcon(frontendSlug, showPassword, setShowPassword)}
                    </div>
                  )
                })
              }
            </div>
            <div className="login_form-button-help-container">
              <div className="login_form-button-container">
                <button
                  disabled={isButtonDisabled(query, fieldError)}
                  onClick={() => setLoginInitated(true)}
                >
                  {activeLanguage === "English" ? loginContent?.buttonTitleEng : loginContent?.buttonTitleHr}</button>
              </div>
              <div className="login_form-help-wrapper">
                <div className="login_form-help-remember-login-container">
                  <input type={loginContent?.checkboxInput?.type}
                         onChange={(event) => setRememberLoginData(event?.target?.checked)}/>
                  <label>{activeLanguage === "English" ? loginContent?.checkboxInput?.labelEng : loginContent?.checkboxInput?.labelHr}</label>
                </div>
                <div className="login_form-help-container">
                  <label
                    onClick={() => navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticLoginHelpRoute}`, {replace: false})}>{activeLanguage === "English" ? loginContent?.helpInfo?.paragraphOneEng : loginContent?.helpInfo?.paragraphOneHr}</label>
                </div>
              </div>
            </div>
          </div>
          <div className="login_form-sing-up-captcha-wrapper">
            <div className="login_form-sign-up-container">
              <div
                className="login_form-sign-up-container-two"
                onClick={() => {
                  setActiveLoginForm(false)
                  setCurrentStep(2)
                }}
              >
                {activeLanguage === "English" ? loginContent?.signUpInfo?.paragraphTwoEng : loginContent?.signUpInfo?.paragraphTwoHr}
              </div>
            </div>
            <div className="login_form-captcha-container">
              <div className="login_form-captcha-container-one">
                {activeLanguage === "English" ? loginContent?.captchaInfo?.infoOneEng : loginContent?.captchaInfo?.infoOneHr}
              </div>
              {loginInitiated ? (
                  <div className="login_form-captcha-wrapper">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Lee1h0oAAAAACIs-8cww7_0HuweTUpYOaWvRJtf"
                      onChange={(captchaValue) => handleRecaptchaChangeAndSignIn(captchaValue, query, logUser, setQuery, activeLanguage, geoLocationCountry, navigate, dispatch, rememberLoginData, setLoginInitated, errorMap, responseMessage, setResponseMessage, isFetchedUsersData, setFieldError, fieldError, createUserProfile, userEmail, profileSelected, setActiveLoginForm, setCurrentStep, setActiveSubComponent, logoutUser)}
                    />
                  </div>
                ) :
                (
                  <div className="login_form-captcha-container-two"
                       dangerouslySetInnerHTML={{__html: activeLanguage === "English" ? loginContent?.captchaInfo?.infoTwoEng : loginContent?.captchaInfo?.infoTwoHr}}>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </StyledLogin>
  )
}