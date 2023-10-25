import React, {useState} from "react";

import {StyledStepTwo} from "./styledStepTwo.js";
import {useSelector} from "react-redux";

import {handleChangeAndValidation, handleFieldError, handleInputBorderClassName, handleInputValues, handleInputType, handlePasswordIcon, renderProfileImage} from "./helpers.jsx";

export default function StepTwo(props) {
  const {
    query,
    setQuery,
    fieldError,
    setFieldError,
    renderContent,
    profileSelected,
    profileImages,
    editableProfileImages,
    isFetchedUsersData
  } = props


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [showPassword, setShowPassword] = useState({newPassword: false})


  return (
    <StyledStepTwo>
      <div className="step_two-wrapper">
        <div className="step_two-header">{activeLanguage === "English" ? renderContent[0]?.header?.labelEng : renderContent[0]?.header?.labelEng}</div>
        <div className="step-two_subheader">{activeLanguage === "English" ? renderContent[0]?.subHeader?.labelEng : renderContent[0]?.subHeader?.labelEng}</div>
        <div className="step_two-profile-inputs-container">
          <div className="step_two-profile-img-container">
            <img src={renderProfileImage(isFetchedUsersData, userEmail, profileSelected, editableProfileImages, profileImages)} alt="profile-image"/>
          </div>
          <div className="step_two-inputs-container">
            {renderContent[0]?.inputs?.map((el) => {
              const {
                errorEng,
                errorHr,
                frontendSlug,
                labelEng,
                labelHr,
                name,
                placeholderEng,
                placeholderHr,
                type,
                validation,
              } = el

              return (
                <div className="step_two_single-input-container" key={frontendSlug}>
                  <input
                    type={handleInputType(frontendSlug, type, showPassword)}
                    name={name}
                    placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                    className={handleInputBorderClassName(frontendSlug, fieldError, "step_two-input", query)}
                    onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError)}
                    value={handleInputValues(frontendSlug, query)}
                  />
                  {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
                  {frontendSlug === "newPassword" && handlePasswordIcon(frontendSlug, showPassword, setShowPassword)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </StyledStepTwo>
  )
}