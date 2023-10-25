import React, {useState} from "react";

import {StyledLanguage} from "./styledLanguage.js";

import {ReactComponent as Globe} from "../../../../../../../../../../../../Assets/svg/globe.svg";
import {ReactComponent as CarretUp} from "../../../../../../../../../../../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../../../../../../../../../../../Assets/svg/carretDown.svg";

import {useSelector} from "react-redux";


import {usePostChangeBrowseContentLanguageMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeBrowserContentLanguage.js"

import {handleClick} from "./helpers.js";

export default function Language(props) {
  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    languageBackend,
    changeLanguageFormAlert,
    activeDropdownFormContent: {
      buttons,
      inputs,
      label
    }
  } = props


  const [changeBrowseLanguageContent] = usePostChangeBrowseContentLanguageMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [activeLanguageToPost, setActiveLanguageToPost] = useState(languageBackend || null)
  const [languageDropdownActive, setLanguageDropdownActive] = useState(false)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledLanguage languageDropdownActive={languageDropdownActive} inactive={responseMessage?.success || responseMessage?.error}>
      <div className="language_wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="language_title-content-container">
          <div className="language_title">
            {activeLanguage === "English" ? label?.labelEng : label?.labelHr}
          </div>
          <div className="language_custom-select-container">
            <div className="language_custom-select-active"
                 onClick={() => setLanguageDropdownActive(!languageDropdownActive)}>
              <div className="language_custom-select-active-svg-container">
                <Globe/></div>
              <div
                className="language_custom-select-selected-language">{inputs?.options?.find((el) => el?.value === activeLanguageToPost)?.title}</div>
              <div
                className="language_custom-select-active-svg-container">{languageDropdownActive ?
                <CarretUp/> : <CarretDown/>}</div>
            </div>
            {languageDropdownActive && (
              <div className="language_custom-select-dropdown">
                {inputs?.options?.filter((el) => el?.value !== activeLanguageToPost)?.map((el) => {
                  const {value, title} = el

                  return (
                    <div
                      className="language_custom-select-dropdown-title-container"
                      key={value} onClick={() => {
                      setActiveLanguageToPost(value);
                      setLanguageDropdownActive(false);
                    }}>
                      <div>{title}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
        <div className="language-button-container">
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
                  onClick={() => handleClick(frontendSlug, changeBrowseLanguageContent, activeLanguageToPost, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, languageBackend, responseMessage, setResponseMessage, changeLanguageFormAlert)}
                  disabled={frontendSlug === "submit" ? !activeLanguageToPost : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledLanguage>
  )
}