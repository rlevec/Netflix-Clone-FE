import React, {useState} from "react";

import {StyledMaturitySettings} from "./styledMaturitySettings.js";

import {ReactComponent as CarretUp} from "../../../../../../../../../../../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../../../../../../../../../../../Assets/svg/carretDown.svg";

import {useSelector} from "react-redux";
import {usePostChangeAmrMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeAmr.js"

import {handleClick} from "./helpers.js";

export default function MaturitySettings(props) {
  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    maturitySettingsBackend,
    changeMaturitySettingsFormAlert,
    activeDropdownFormContent: {
      buttons,
      inputs,
      label
    }
  } = props


  const [changeMaturitySettings] = usePostChangeAmrMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)


  const [activeMaturitySettings, setActiveMaturitySettings] = useState(maturitySettingsBackend || null)
  const [maturitySettingsDropdownActive, setMaturitySettingsDropdownActive] = useState(false)


  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledMaturitySettings maturitySettingsDropdownActive={maturitySettingsDropdownActive}>
      <div className="maturitySettings_wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="maturitySettings_title-content-container">
          <div className="maturitySettings_title">
            {activeLanguage === "English" ? label?.labelEng : label?.labelHr}:
          </div>
          <div className="maturitySettings_custom-select-container">
            <div className="maturitySettings_custom-select-active"
                 onClick={() => setMaturitySettingsDropdownActive(!maturitySettingsDropdownActive)}>
              <div
                className="maturitySettings_custom-select-selected-maturitySettings">{activeLanguage === "English" ? activeMaturitySettings?.titleEng : activeMaturitySettings?.titleHr}</div>
              <div
                className="maturitySettings_custom-select-active-svg-container">{maturitySettingsDropdownActive ?
                <CarretUp/> : <CarretDown/>}</div>
            </div>
            {maturitySettingsDropdownActive && (
              <div className="maturitySettings_custom-select-dropdown">
                {inputs?.options?.filter((el) => el?.value !== activeMaturitySettings?.value)?.map((el) => {
                  const {value, titleEng, titleHr, limiter} = el

                  return (
                    <div
                      className="maturitySettings_custom-select-dropdown-title-container"
                      key={value} onClick={() => {
                      setActiveMaturitySettings(el);
                      setMaturitySettingsDropdownActive(false);
                    }}>
                      <div>{activeLanguage === "English" ? titleEng : titleHr}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
        <div className="maturitySettings-button-container">
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
                  onClick={() => handleClick(frontendSlug, changeMaturitySettings, activeMaturitySettings, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, maturitySettingsBackend, responseMessage, setResponseMessage, changeMaturitySettingsFormAlert)}
                  disabled={frontendSlug === "submit" ? !activeMaturitySettings : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledMaturitySettings>
  )
}