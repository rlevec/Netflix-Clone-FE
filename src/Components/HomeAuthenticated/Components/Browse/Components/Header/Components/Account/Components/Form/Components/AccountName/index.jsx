import React, {useState} from "react";

import {StyledAccountName} from "./styledAccountName.js";
import {useSelector, useDispatch} from "react-redux";

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleClick
} from "./helpers.jsx";

//import {usePostChangeAccountNameMutation} from "../../../../../../../../../../../../Redux/Slices/apiSlice.js";
import {usePostChangeAccountNameMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeAccountName.js"


export default function AccountName(props) {

  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    accountNameBackend,
    changeAccountNameFormAlert,
    setActiveAccountName,
    setBrowseProfileActive,
    activeDropdownFormContent: {
      buttons,
      input,
      label
    }
  } = props


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [changeAccountName] = usePostChangeAccountNameMutation()

  const [query, setQuery] = useState({accountName: accountNameBackend || ""})
  const [fieldError, setFieldError] = useState({accountName: false})

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})


  return (
    <StyledAccountName inactive={responseMessage?.success || responseMessage?.error}>
      <div className="account_name-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="account_name-title">
          {activeLanguage === "English" ? label?.labelEng : label?.labelHr}
        </div>
        <div className="account_name-input-container">
          <input
            type={input?.type}
            name={input?.name}
            placeholder={activeLanguage === "English" ? input?.placeholderEng : input?.placeholderHr}
            className={handleInputBorderClassName(input?.frontendSlug, fieldError, "account_name-input", query)}
            onChange={(event) => handleChangeAndValidation(event?.target?.value, input?.frontendSlug, input?.validation, query, setQuery, fieldError, setFieldError)}
            value={handleInputValues(input?.frontendSlug, query)}
          />
          {handleFieldError(input?.frontendSlug, fieldError, input?.errorEng, input?.errorHr, activeLanguage)}
        </div>
        <div className="account_name-button-container">
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
                  onClick={() => handleClick(frontendSlug, accountNameBackend, query, setQuery, fieldError, setFieldError, setResponseMessage, responseMessage, activeLanguage, changeAccountNameFormAlert, setActiveAccountName, setBrowseProfileActive, changeAccountName, userEmail, setActiveDropdownForm, setActiveDropdownFormContent)}
                  disabled={frontendSlug === "submit" ? (query?.accountName === "" || fieldError?.accountName) : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledAccountName>
  )
}