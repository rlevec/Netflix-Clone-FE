import React, {useState} from "react";

import {StyledAutoplayNext} from "./styledAutoplayNext.js";
import {useSelector} from "react-redux";

import {usePostChangeAutoplayNextMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeAutoplayNext.js"

import {handleClick} from "./helpers.js";

export default function AutoplayNext(props) {
  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    autoplayNextBackend,
    changeAutoplayNextFormAlert,
    activeDropdownFormContent: {
      buttons,
      inputs,
      label
    }
  } = props

  const [changeAutoplayNext] = usePostChangeAutoplayNextMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [autoPlayNext, setAutoplayNext] = useState(autoplayNextBackend || false)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledAutoplayNext inactive={responseMessage?.success || responseMessage?.error}>
      <div className="autoplayNext_wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="autoplayNext-title-input-container">
          <div className="autoplayNext_title">
            {activeLanguage === "English" ? label?.labelEng : label?.labelHr}
          </div>
          <div className="autoplayNext_input-container">
            <input
              type={inputs?.type}
              name={inputs?.name}
              checked={autoPlayNext}
              onChange={(event) => setAutoplayNext(event?.target?.checked)}
            />
          </div>
        </div>
        <div className="autoplayNext-buttons-container">
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
                  onClick={() => handleClick(frontendSlug, changeAutoplayNext, autoPlayNext, userEmail, activeLanguage, setActiveDropdownForm, setActiveDropdownFormContent, dropdownAccountSlugActive, setAutoplayNext, responseMessage, setResponseMessage, changeAutoplayNextFormAlert, autoplayNextBackend)}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledAutoplayNext>
  )
}