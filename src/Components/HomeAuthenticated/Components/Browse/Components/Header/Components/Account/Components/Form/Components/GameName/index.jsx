import React, {useState} from "react";

import {StyledGameName} from "./styledGameName.js";

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleClick
} from "./helpers.jsx";

import {useSelector} from "react-redux";

import {usePostChangeGameNameMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeGameName.js"


export default function GameName(props) {

  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    gameNameBackend,
    changeGameNameFormAlert,
    activeDropdownFormContent: {
      buttons,
      input,
      label
    }
  } = props


  const [changeGameName] = usePostChangeGameNameMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [query, setQuery] = useState({gameName: gameNameBackend || ""})
  const [fieldError, setFieldError] = useState({gameName: false})


  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledGameName inactive={responseMessage?.success || responseMessage?.error}>
      <div className="game_name-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="game_name-title">
          {activeLanguage === "English" ? label?.labelEng : label?.labelHr}
        </div>
        <div className="game_name-input-container">
          <input
            type={input?.type}
            name={input?.name}
            placeholder={activeLanguage === "English" ? input?.placeholderEng : input?.placeholderHr}
            className={handleInputBorderClassName(input?.frontendSlug, fieldError, "game_name-input", query)}
            onChange={(event) => handleChangeAndValidation(event?.target?.value, input?.frontendSlug, input?.validation, query, setQuery, fieldError, setFieldError)}
            value={handleInputValues(input?.frontendSlug, query)}
          />
          {handleFieldError(input?.frontendSlug, fieldError, input?.errorEng, input?.errorHr, activeLanguage)}
        </div>
        <div className="game_name-button-container">
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
                  onClick={() => handleClick(frontendSlug, changeGameName, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, query, setQuery, fieldError, setFieldError, responseMessage, setResponseMessage, changeGameNameFormAlert, gameNameBackend)}
                  disabled={frontendSlug === "submit" ? (query?.gameName === "" || fieldError?.gameName) : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledGameName>
  )
}