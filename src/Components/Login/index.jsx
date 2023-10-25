import React, {useRef, useState} from "react";

import {StyledLogin} from "./styledLogin.js";

import Footer from "../Footer/index.jsx";

import {Link, useNavigate} from "react-router-dom";

import {ReactComponent as Logo} from "../../Assets/svg/logo.svg";

import {useSelector, useDispatch} from "react-redux";


import { useGetSignInFormDataQuery } from "../../Redux/Injections/FormGetRequests/getSignInFormData.js";
import { usePostUserLoginMutation } from "../../Redux/Injections/UserPostRequests/postUserLogin.js"

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  isButtonDisabled,
  handleInputType,
  handlePasswordIcon,
  cookieDecoder,
  handleFullPrefix,
  handleRecaptchaChangeAndSignIn
} from "./helpers.jsx";



import {routes} from "../../Routes/routes.js";

import ReCAPTCHA from "react-google-recaptcha";


export default function Login() {
  const registeredEmail = useSelector((state) => state?.registeredMail?.registeredMail)
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name
  const deviceType = useSelector((state) => state?.device?.device)

  const {
    data: isFetchedSignInFormData,
    isFetching: isFetchingSignInFormData,
    isLoading: isLoadingSignInFormData,
    isError: isErrorSignInFormData
  } = useGetSignInFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const [logUser] = usePostUserLoginMutation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const recaptchaRef = useRef();

  const [query, setQuery] = useState(
    {
    email: registeredEmail || cookieDecoder("login")?.email || "",
    password: cookieDecoder("login")?.password || ""
  })
  const [fieldError, setFieldError] = useState({email: false, password: false})
  const [showPassword, setShowPassword] = useState({password: false})
  const [loginInitiated, setLoginInitated] = useState(false)
  const [responseError, setResponseError] = useState(null);
  const [responseSuccess, setResponseSuccess] = useState(null)
  const [rememberLoginData, setRememberLoginData] = useState(false)



  if (isFetchingSignInFormData || isLoadingSignInFormData) return <div>LOADING</div>
  else if (!isFetchedSignInFormData || isErrorSignInFormData) return <div>ERROR</div>
  else {
    return (
      <StyledLogin className={"styledComponent-Login"} backgroundImage={isFetchedSignInFormData?.backgroundImage} inactive={responseSuccess || responseError}>
        <div className="login_wrapper">
          {deviceType !== "phonePortrait" && (
            <Link to={routes?.clientRoutes?.root} className="header_container">
              <div><Logo/></div>
            </Link>
          )}
          <div className="login_form-wrapper">
            {responseError && <div className="login-form-error">{responseError}</div>}
            {responseSuccess && <div className="login-form-success">{responseSuccess}</div>}
            <div className="login_form-container">
              {deviceType === "phonePortrait" && (
                <Link to={routes?.clientRoutes?.root} className="header_container-phone">
                  <div><Logo/></div>
                </Link>
              )}
              <div className="login_form-header">
                {activeLanguage === "English" ? isFetchedSignInFormData?.headerTitleEng : isFetchedSignInFormData?.headerTitleHr}
              </div>
              <div className="login_form-inputs-container">
                {
                  isFetchedSignInFormData?.inputs?.map((el) => {
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
                    {activeLanguage === "English" ? isFetchedSignInFormData?.buttonTitleEng : isFetchedSignInFormData?.buttonTitleHr}</button>
                </div>
                <div className="login_form-help-wrapper">
                  <div className="login_form-help-remember-login-container">
                    <input type={isFetchedSignInFormData?.checkboxInput?.type}
                           onChange={(event) => setRememberLoginData(event?.target?.checked)}/>
                    <label>{activeLanguage === "English" ? isFetchedSignInFormData?.checkboxInput?.labelEng : isFetchedSignInFormData?.checkboxInput?.labelHr}</label>
                  </div>
                  <div className="login_form-help-container">
                    <label onClick={() => navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticLoginHelpRoute}`, {replace: false})}>{activeLanguage === "English" ? isFetchedSignInFormData?.helpInfo?.paragraphOneEng : isFetchedSignInFormData?.helpInfo?.paragraphOneHr}</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="login_form-sing-up-captcha-wrapper">
              <div className="login_form-sign-up-container">
                <div className="login_form-sign-up-container-one">
                  {activeLanguage === "English" ? isFetchedSignInFormData?.signUpInfo?.paragraphOneEng : isFetchedSignInFormData?.signUpInfo?.paragraphOneHr}
                </div>
                <div
                  className="login_form-sign-up-container-two"
                  onClick={() => navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticSignUpRoute}`, {replace: false})}
                >
                  {activeLanguage === "English" ? isFetchedSignInFormData?.signUpInfo?.paragraphTwoEng : isFetchedSignInFormData?.signUpInfo?.paragraphTwoHr}
                </div>
              </div>
              <div className="login_form-captcha-container">
                <div className="login_form-captcha-container-one">
                  {activeLanguage === "English" ? isFetchedSignInFormData?.captchaInfo?.infoOneEng : isFetchedSignInFormData?.captchaInfo?.infoOneHr}
                </div>
                {loginInitiated ? (
                    <div className="login_form-captcha-wrapper">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lee1h0oAAAAACIs-8cww7_0HuweTUpYOaWvRJtf"
                        onChange={(captchaValue) => handleRecaptchaChangeAndSignIn(captchaValue, query, logUser, setResponseSuccess, setResponseError, setQuery, activeLanguage, geoLocationCountry, navigate, dispatch, rememberLoginData, setLoginInitated)}
                      />
                    </div>
                  ) :
                  (
                    <div className="login_form-captcha-container-two"
                         dangerouslySetInnerHTML={{__html: activeLanguage === "English" ? isFetchedSignInFormData?.captchaInfo?.infoTwoEng : isFetchedSignInFormData?.captchaInfo?.infoTwoHr}}>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </StyledLogin>
    )
  }
}