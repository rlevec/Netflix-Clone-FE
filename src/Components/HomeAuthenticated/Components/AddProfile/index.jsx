import React, {useState, useRef} from "react";

import {StyledAddProfile} from "./styledAddProfile.js";

import {useSelector} from "react-redux";

import {generateProfileImageSlug, generateProfileImage} from "../helpers.js";

import {handleSubmit, handleDisabled, handleChangeAndValidation, handleFieldError, handleInputBorderClassName, handleInputValues, useHandleResize} from "./helpers.jsx";

//import {usePostCreateUserProfileMutation} from "../../../../Redux/Slices/apiSlice.js";
import {usePostCreateUserProfileMutation} from "../../../../Redux/Injections/UserPostRequests/postUserCreateProfile.js"

export default function AddProfile(props) {

  const {
    data: {
      header: addProfileHeader,
      info: addProfileInfo,
      input: addProfileInput,
      checkbox: addProfileCheckbox,
      buttons: addProfileButtons,
    },
    setActiveForm,
    isFetchedUsersData,
    initialProfileImages,
    setResponseErrorMessage,
    setResponseSuccessMessage
  } = props

  const [createUserProfile] = usePostCreateUserProfileMutation()

  const mainRef = useRef(null)

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const userEmail = useSelector((state) => state?.userMail?.userMail)


  const [forKids, setForKids] = useState(false)
  const [query, setQuery] = useState({accountName: ""})
  const [fieldError, setFieldError] = useState({accountName: ""})
  const [checkboxSectionEntered, setCheckboxSectionEntered] = useState(false)
  const [mainDivWidth, setMainDivWidth] = useState(0)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useHandleResize(mainRef, dimensions, setDimensions, setMainDivWidth)


  return (
    <StyledAddProfile>
      <div className="addProfile_wrapper">
        <div className="addProfile_title-info-container" style={{width: `${mainDivWidth}px`}}>
          <div
            className="addProfile_title">{activeLanguage === "English" ? addProfileHeader?.titleEng : addProfileHeader?.titleHr}</div>
          <div
            className="addProfile_info">{activeLanguage === "English" ? addProfileInfo?.titleEng : addProfileInfo?.titleHr}</div>
        </div>
        <div ref={mainRef} className="addProfile_image-inputs-container">
          <div className="addProfile_image-container">
            <img src={generateProfileImage(isFetchedUsersData, userEmail, initialProfileImages)} alt={`image-${generateProfileImageSlug(isFetchedUsersData, userEmail, initialProfileImages)}`}/>
          </div>
          <div className="addProfile_input-container">
            <input
              className={handleInputBorderClassName(addProfileInput?.frontendSlug, fieldError, "add_profile-form-input", query)}
              onChange={(event) => handleChangeAndValidation(event?.target?.value, addProfileInput?.frontendSlug, addProfileInput?.validation, query, setQuery, fieldError, setFieldError)}
              value={handleInputValues(addProfileInput?.frontendSlug, query)}
              maxLength={20}
              type={addProfileInput?.type}
              name={addProfileInput?.name}
              placeholder={activeLanguage === "English" ? addProfileInput?.placeholderEng : addProfileInput?.placeholderHr}
            />
            {handleFieldError(addProfileInput?.frontendSlug, fieldError, addProfileInput?.errorEng, addProfileInput?.errorHr, activeLanguage)}
          </div>
          <div
            className="addProfile_checkbox-container"
            onMouseEnter={() => setCheckboxSectionEntered(true)}
            onMouseLeave={() => setCheckboxSectionEntered(false)}>
            {checkboxSectionEntered && <div className="addProfile_checkbox-warning-container">
              <div
                className="addProfile_checkbox-warning-content">{activeLanguage === "English" ? addProfileCheckbox?.warning?.titleEng : addProfileCheckbox?.warning?.titleHr}</div>
              <div className="addProfile_pointer-container">
                <div className="addProfile_pointer"></div>
              </div>
            </div>}
            <input
              type={addProfileCheckbox?.input?.type}
              onChange={(event) => setForKids(event?.target?.checked)}
            />
            <label>{activeLanguage === "English" ? addProfileCheckbox?.label?.titleEng : addProfileCheckbox?.label?.titleEng}</label>
          </div>
        </div>
        <div className="addProfile_buttons-container" style={{width: `${mainDivWidth}px`}}>
          {addProfileButtons?.map((el) => {
            const {id, frontendSlug, titleEng, titleHr} = el

            return (
              <button onClick={() => handleSubmit(frontendSlug, createUserProfile, userEmail, query, forKids, isFetchedUsersData, initialProfileImages, activeLanguage, setActiveForm, setQuery, setResponseSuccessMessage, setResponseErrorMessage)}
                      disabled={frontendSlug === "continue" && handleDisabled(query, fieldError)}
                      className={`addProfile_${frontendSlug}-button`}
                      key={id}>{activeLanguage === "English" ? titleEng : titleHr}</button>
            )
          })}
        </div>
      </div>
    </StyledAddProfile>
  )
}