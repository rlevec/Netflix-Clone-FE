import React, {useState} from "react";

import {StyledPassword} from "./styledPassword.js";


import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  useHandlePasswordMatchCheck,
  handleInputType,
  handlePasswordIcon,
  handleClick
} from "./helpers.jsx";

import {useSelector} from "react-redux";
import {usePostUserChangePasswordMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangePassword.js"




export default function Password(props) {
  const {
    activeFormContent: {
      buttons,
      header,
      inputs
    },
    setActiveForm,
    setActiveFormContent,
    changePasswordFormAlert,
    isFetchedUsersData
  } = props


  const [changePassword] = usePostUserChangePasswordMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [query, setQuery] = useState({newPassword: "", confirmNewPassword: ""})
  const [fieldError, setFieldError] = useState({newPassword: false, confirmNewPassword: false})

  const [showPassword, setShowPassword] = useState({newPassword: false, newConfirmPassword: false})

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  useHandlePasswordMatchCheck(query, fieldError, setFieldError)


  return (
    <StyledPassword inactive={responseMessage?.success || responseMessage?.error}>
      <div className="account_password-form-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="account_password-form-title">
          {activeLanguage === "English" ? header?.labelEng : labelHr}
        </div>
        <div className="account_password-form-inputs-container">
          {inputs?.map((el) => {
            const {
              id,
              frontendSlug,
              placeholderEng,
              placeholderHr,
              validation,
              errorEng,
              errorHr,
              name,
              type
            } = el

            return (
              <div className="account_password-form-single-input-container" key={id}>
                <input
                  type={handleInputType(frontendSlug, type, showPassword)}
                  name={name}
                  placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                  className={handleInputBorderClassName(frontendSlug, fieldError, "account_password-input", query)}
                  onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError)}
                  value={handleInputValues(frontendSlug, query)}
                />
                {handlePasswordIcon(frontendSlug, showPassword, setShowPassword)}
                {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
              </div>
            )
          })}
        </div>
        <div className="account_password-form-buttons-container">
          {buttons?.map((el) => {
            const {
              id,
              frontendSlug,
              buttonTitleEng,
              buttonTitleHr
            } = el

            return (
              <div className={`${frontendSlug}Button-container`}>
                <button
                  key={id}
                  onClick={() => handleClick(frontendSlug, setActiveForm, setActiveFormContent, changePassword, userEmail, activeLanguage, query,isFetchedUsersData, responseMessage, setResponseMessage, changePasswordFormAlert, setQuery, setFieldError, fieldError)}
                  disabled={frontendSlug === "submit" ? (query?.confirmNewPassword === "" || fieldError?.confirmNewPassword || query?.newPassword === "" || fieldError?.newPassword) : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledPassword>
  )
}