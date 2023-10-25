import React, {useRef, useState} from "react";

import {StyledForgotEmailPassword} from "./styledForgotEmailPassword.js";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";
import EmailKnown from "./Components/EmailKnown/index.jsx";
import EmailUnknown from "./Components/EmailUnknown/index.jsx";
import FormActive from "./Components/FormActive/index.jsx";



import {useGetForgotEmailPasswordFormDataQuery} from "../../Redux/Injections/FormGetRequests/getForgotEmailPasswordFormData.js"
import {useGetUsersQuery} from "../../Redux/Injections/UserGetRequest/getUsersData.js"
import {usePostUserChangePasswordMutation} from "../../Redux/Injections/UserPostRequests/postUserChangePassword.js"

import {useSelector, useDispatch} from "react-redux";

import ReCAPTCHA from "react-google-recaptcha";

import {handleActiveFormToRender, useHandleGeneratedEmail, handleRecaptchaChangeAndRedirectToLogin, useHandlePasswordMatchCheck} from "./helpers.js";

import {useNavigate} from "react-router-dom";


export default function ForgotEmailPassword() {
  const {
    data: isFetchedForgotEmailPasswordFormData,
    isFetching: isFetchingForgotEmailPasswordFormData,
    isLoading: isLoadingForgotEmailPasswordFormData,
    isError: isErrorForgotEmailPasswordFormData
  } = useGetForgotEmailPasswordFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const {
    data: isFetchedUsers,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
    isError: isErrorUsers
  } = useGetUsersQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })


  const [changeUserPassword] = usePostUserChangePasswordMutation()


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name
  const deviceType = useSelector((state) => state?.device?.device)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const recaptchaRef = useRef();

  const [currentActiveForm, setCurrentActiveForm] = useState("knownMailForm")


  const [generatedEmail, setGeneratedEmail] = useState(null)
  const [query, setQuery] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
    cardNumber: "",
    firstName: "",
    lastName: "",
  })
  const [fieldError, setFieldError] = useState({
    email: false,
    newPassword: false,
    confirmNewPassword: false,
    cardNumber: false,
    firstName: false,
    lastName: false,
  })
  const [showPassword, setShowPassword] = useState({newPassword: false, newConfirmPassword: false})
  const [formError, setFormError] = useState({nonExistant: false, nonMatch: false})
  const [formSuccess, setFormSuccess] = useState({mailMatch: false})
  const [passwordChangeInitiated, setPasswordChangeInitiated] = useState(false)
  const [responseSuccess, setResponseSuccess] = useState(null)
  const [responseError, setResponseError] = useState(null)

  useHandleGeneratedEmail(query, setQuery, generatedEmail)

  useHandlePasswordMatchCheck(query, fieldError, setFieldError)

  if(isFetchingForgotEmailPasswordFormData || isLoadingForgotEmailPasswordFormData || isLoadingUsers || isFetchingUsers) return <div>LOADING</div>
  else if(isErrorForgotEmailPasswordFormData || !isFetchedForgotEmailPasswordFormData || isErrorUsers || !isFetchedUsers) return <div>ERROR</div>
  else {
    return (
      <StyledForgotEmailPassword backgroundImage={isFetchedForgotEmailPasswordFormData?.backgroundImage} inactive={formError?.nonExistant || formError?.nonMatch || formSuccess?.mailMatch}>
        {deviceType !== "phonePortrait" && <Header/>}
        <div className="forgot_email_password-wrapper">
          {deviceType === "phonePortrait" && <Header/>}
          {formError?.nonExistant && <div className="forgot_email_password-form-error">{activeLanguage === "English" ? "Provided email address doesn't exist in our database" : "Navedena adresa e-pošte ne postoji u našoj bazi podataka"}</div>}
          {formError?.nonMatch && <div className="forgot_email_password-form-error">{activeLanguage === "English" ? "Provided data does not match any email address in our database" : "Navedeni podaci ne odgovaraju niti jednoj adresi e-pošte u našoj bazi podataka"}</div>}
          {formSuccess?.mailMatch && <div className="forgot_email_password-form-success">{activeLanguage === "English" ? "Provided data matched an email address in our database" : "Navedeni podaci odgovaraju adresi e-pošte u našoj bazi podataka"}</div>}
          {responseError && <div className="forgot_email_password-form-error">{responseError}</div>}
          {responseSuccess && <div className="forgot_email_password-form-success">{responseSuccess}</div>}
          <div className="forgot_email_password-header-title-container">
            {activeLanguage === "English" ? isFetchedForgotEmailPasswordFormData?.headerTitleEng : isFetchedForgotEmailPasswordFormData?.headerTitleHr}
          </div>
          <div className="forgot_email_password-form-container">
            {currentActiveForm === "knownMailForm" && <EmailKnown data={handleActiveFormToRender(isFetchedForgotEmailPasswordFormData, currentActiveForm)} setCurrentActiveForm={setCurrentActiveForm} query={query} setQuery={setQuery} fieldError={fieldError} setFieldError={setFieldError} formError={formError} setFormError={setFormError} isFetchedUsers={isFetchedUsers}/>}
            {currentActiveForm === "unknownMailForm" && <EmailUnknown data={handleActiveFormToRender(isFetchedForgotEmailPasswordFormData, currentActiveForm)} setCurrentActiveForm={setCurrentActiveForm} query={query} setQuery={setQuery} fieldError={fieldError} setFieldError={setFieldError} formError={formError} setFormError={setFormError} isFetchedUsers={isFetchedUsers} generatedEmail={generatedEmail} setGeneratedEmail={setGeneratedEmail} formSuccess={formSuccess} setFormSuccess={setFormSuccess}/>}
            {currentActiveForm === "formActive" && <FormActive data={handleActiveFormToRender(isFetchedForgotEmailPasswordFormData, currentActiveForm)} setCurrentActiveForm={setCurrentActiveForm} query={query} setQuery={setQuery} fieldError={fieldError} setFieldError={setFieldError} showPassword={showPassword} setShowPassword={setShowPassword} setPasswordChangeInitiated={setPasswordChangeInitiated}/>}

          </div>
          <div className="forgot_email_password-captcha-container">
            <div className="forgot_email_password-captcha-container-one">
              {activeLanguage === "English" ? isFetchedForgotEmailPasswordFormData?.captchaInfo?.infoOneEng : isFetchedForgotEmailPasswordFormData?.captchaInfo?.infoOneHe}
            </div>
            {(passwordChangeInitiated && currentActiveForm === "formActive") ? (
              <div className="login_form-captcha-wrapper">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lee1h0oAAAAACIs-8cww7_0HuweTUpYOaWvRJtf"
                  onChange={(captchaValue) => handleRecaptchaChangeAndRedirectToLogin(captchaValue, query, setQuery, activeLanguage, geoLocationCountry, changeUserPassword, setResponseSuccess, setResponseError, navigate, setPasswordChangeInitiated)}
                />
              </div>
            ) : (
              <div className="forgot_email_password-captcha-container-two" dangerouslySetInnerHTML={{__html: activeLanguage === "English" ? isFetchedForgotEmailPasswordFormData?.captchaInfo?.infoTwoEng :  isFetchedForgotEmailPasswordFormData?.captchaInfo?.infoTwoHr}}></div>
            )}
          </div>
          {deviceType === "phonePortrait" && <Footer/>}
        </div>
        {deviceType !== "phonePortrait" && <Footer/>}
      </StyledForgotEmailPassword>
    )
  }
}