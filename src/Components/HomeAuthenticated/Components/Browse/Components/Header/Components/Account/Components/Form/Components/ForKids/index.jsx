import React, {useState} from "react";

import {StyledForKids} from "./styledForKids.js";

import {useSelector} from "react-redux";
import {usePostChangeForKidsMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeForKids.js"


import {handleClick} from "./helpers.js";


export default function ForKids(props) {
  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    forKidsBackend,
    changeForKidsFormAlert,
    activeDropdownFormContent: {
      buttons,
      inputs,
      label
    }
  } = props

  const [changeForKidsSelector] = usePostChangeForKidsMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [forKids, setForKids] = useState(forKidsBackend || false)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})


  return (
    <StyledForKids inactive={responseMessage?.success || responseMessage?.error}>
      <div className="for_kids_wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="for_kids-title-input-container">
          <div className="for_kids_title">
            {activeLanguage === "English" ? label?.labelEng : label?.labelHr}
          </div>
          <div className="for_kids_input-container">
            <input
              type={inputs?.type}
              name={inputs?.name}
              checked={forKids}
              onChange={(event) => setForKids(event?.target?.checked)}
            />
          </div>
        </div>
        <div className="for_kids-buttons-container">
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
                  onClick={() => handleClick(frontendSlug, changeForKidsSelector, forKids, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, forKidsBackend, setForKids, changeForKidsFormAlert, responseMessage, setResponseMessage)}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledForKids>
  )
}