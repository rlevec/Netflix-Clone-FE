import React, {useState} from "react";

import {StyledAutoplayPreviews} from "./styledAutoplayPreviews.js";
import {useSelector} from "react-redux";

//import {usePostChangeAutoplayPreviewMutation} from "../../../../../../../../../../../../Redux/Slices/apiSlice.js";

import {usePostChangeAutoplayPreviewMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeAutoplayPreview.js"

import {handleClick} from "./helpers.js";

export default function AutoplayPreviews(props) {
  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    autoplayPreviewsBackend,
    changeAutoplayPreviewsFormAlert,
    activeDropdownFormContent: {
      buttons,
      inputs,
      label
    }
  } = props


  const [changeAutoplayPreview] = usePostChangeAutoplayPreviewMutation()


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [autoPlayPreviews, setAutoplayPreviews] = useState(autoplayPreviewsBackend || false)


  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledAutoplayPreviews inactive={responseMessage?.success || responseMessage?.error}>
      <div className="autoplayPreviews_wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="autoplayPreviews-title-input-container">
          <div className="autoplayPreviews_title">
            {activeLanguage === "English" ? label?.labelEng : label?.labelHr}
          </div>
          <div className="autoplayPreviews_input-container">
            <input
              type={inputs?.type}
              name={inputs?.name}
              checked={autoPlayPreviews}
              onChange={(event) => setAutoplayPreviews(event?.target?.checked)}
            />
          </div>
        </div>
        <div className="autoplayPreviews-buttons-container">
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
                  onClick={() => handleClick(frontendSlug, changeAutoplayPreview, autoPlayPreviews, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, setAutoplayPreviews, changeAutoplayPreviewsFormAlert, responseMessage, setResponseMessage, autoplayPreviewsBackend)}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledAutoplayPreviews>
  )
}