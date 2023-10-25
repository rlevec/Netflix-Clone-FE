import React, {useState} from "react";

import {StyledEmail} from "./styledEmail.js";

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleClick
} from "./helpers.jsx";

import {useSelector, useDispatch} from "react-redux";
import {usePostChangeUserEmailMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeEmail.js"


export default function Email(props) {
  const {
    activeFormContent: {
      buttons,
      header,
      inputs
    },
    setActiveForm,
    setActiveFormContent,
    changeEmailFormAlert
  } = props

  const [changeEmail] = usePostChangeUserEmailMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const dispatch = useDispatch()

  const [query, setQuery] = useState({email: ""})
  const [fieldError, setFieldError] = useState({email: false})

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})


  return (
    <StyledEmail inactive={responseMessage?.success || responseMessage?.error}>
      <div className="account_email-form-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="account_email-form-title">
          {activeLanguage === "English" ? header?.labelEng : header?.labelHr}
        </div>
        <div className="account_email-form-inputs-container">
          <div className="account_email-form-single-input-container">
            <input
              type={inputs?.type}
              name={inputs?.name}
              placeholder={activeLanguage === "English" ? inputs?.placeholderEng : inputs?.placeholderHr}
              className={handleInputBorderClassName(inputs?.frontendSlug, fieldError, "account_email-input", query)}
              onChange={(event) => handleChangeAndValidation(event?.target?.value, inputs?.frontendSlug, inputs?.validation, query, setQuery, fieldError, setFieldError)}
              value={handleInputValues(inputs?.frontendSlug, query)}
            />
            {handleFieldError(inputs?.frontendSlug, fieldError, inputs?.errorEng, inputs?.errorHr, activeLanguage)}
          </div>
        </div>
        <div className="account_email-form-buttons-container">
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
                  onClick={() => handleClick(frontendSlug, setActiveForm, setActiveFormContent, changeEmail, query, userEmail, activeLanguage, dispatch, changeEmailFormAlert, responseMessage, setResponseMessage, setQuery, fieldError, setFieldError)}
                  disabled={frontendSlug === "submit" ? (query?.email === "" || fieldError?.email) : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledEmail>
  )
}