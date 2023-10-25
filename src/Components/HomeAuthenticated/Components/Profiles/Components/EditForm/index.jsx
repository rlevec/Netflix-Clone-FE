import React, {useState, useRef} from "react";

import {StyledEditForm} from "./styledEditForm.js";

import {useSelector} from "react-redux";

import {ReactComponent as Globe} from "../../../../../../Assets/svg/globe.svg";
import {ReactComponent as CarretUp} from "../../../../../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../../../../../Assets/svg/carretDown.svg";
import {ReactComponent as Edit} from "../../../../../../Assets/svg/edit.svg";


import {usePostDeleteUserProfileMutation} from "../../../../../../Redux/Injections/UserPostRequests/postUserDeleteProfile.js"
import {usePostUpdateUserProfileImageMutation} from "../../../../../../Redux/Injections/UserPostRequests/postUserUpdateProfileImage.js"
import {usePostUpdateUserProfileMutation} from "../../../../../../Redux/Injections/UserPostRequests/postUserUpdateProfile.js"

import {
  extractAllProfileValues,
  renderProfileImage,
  handleCheckboxValues,
  handleChecked,
  handleSubmit,
  handleDelete,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleChangeAndValidation,
  handleDisabled,
  useHandleResize
} from "./helpers.jsx";

import GameHandleInfo from "./Components/GameHandleInfo/index.jsx";
import ProfileImagesModal from "./Components/ProfileImagesModal/index.jsx";

export default function EditForm(props) {
  const {
    editableForm: {
      form: {
        buttons,
        controls,
        customInput,
        gameHandle,
        input,
        maturity
      },
      header,
    },
    setIsEditFormActive,
    isFetchedUsersData,
    editProfileActive,
    initialProfileImages,
    profilesImages,
    setIsProfileImagesModalActive,
    isProfileImagesModalActive,
    profileImagesContent,
    setResponseErrorMessage,
    setResponseSuccessMessage,
  } = props


  const [updateUserProfile] = usePostUpdateUserProfileMutation()
  const [deleteUserProfile] = usePostDeleteUserProfileMutation()
  const [updateProfileImage] = usePostUpdateUserProfileImageMutation()


  const userEmail = useSelector((state) => state?.userMail?.userMail)
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const deviceType = useSelector((state) => state?.device?.device)

  const mainRef = useRef(null)

  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [query, setQuery] = useState({
    accountName: editProfileActive || "",
    gameName: extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.gameName || "",
    autoplayNext: extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.autoplayNext,
    autoplayPreview: extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.autoplayPreview,
    image: extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.image || null
  })
  const [fieldError, setFieldError] = useState({accountName: false, gameName: false})
  const [dropdownActive, setDropdownActive] = useState({
    languageDropdownActive: false,
    maturityDropdownActive: false
  })
  const [selectedMaturityValue, setSelectedMaturityValue] = useState(extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.maturitySetting)
  const [selectedBrowseLanguage, setSelectedBrowseLanguage] = useState({
    value: extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.language,
    title: extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.language === "english" ? "English" : "Hrvatski"
  })
  const [mainDivWidth, setMainDivWidth] = useState(0)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [editImageActiveSlug, setEditImageActiveSlug] = useState(null)

  useHandleResize(mainRef, dimensions, setDimensions, setMainDivWidth)



  if (isProfileImagesModalActive) return <ProfileImagesModal
    profileImagesContent={profileImagesContent}
    profilesImages={profilesImages}
    setIsProfileImagesModalActive={setIsProfileImagesModalActive}
    setEditImageActiveSlug={setEditImageActiveSlug}
  />
  else {
    return (
      <StyledEditForm
        languageDropdownActive={dropdownActive?.languageDropdownActive}
        maturityDropdownActive={dropdownActive?.maturityDropdownActive}
      >
        {infoModalOpen && <GameHandleInfo
          gameHandleModal={gameHandle?.modal}
          setInfoModalOpen={setInfoModalOpen}
        />}
        <div className="edit_form-wrapper">
          <div className="edit_form-title"
               style={{width: `${mainDivWidth}px`}}>{activeLanguage === "English" ? header?.titleEng : header?.titleHr}</div>
          <div className="edit_form-form-container" ref={mainRef}>
            <div className="edit_form-file-input-container">
              <div className="edit_form-file-profile-image-container">
                <img
                  src={renderProfileImage(isFetchedUsersData, userEmail, editProfileActive, initialProfileImages, profilesImages, editImageActiveSlug)}/>
                <div
                  className="edit_form-file-profile-edit-btn-container"
                  onClick={() => setIsProfileImagesModalActive(true)}
                >
                  <Edit/>
                </div>
              </div>
            </div>
            <div className="edit_form-content-container">
              <div className="edit_form-name-input-container">
                <input
                  className={handleInputBorderClassName(input?.frontendSlug, fieldError, "account_name-input", query)}
                  type={input?.type}
                  name={input?.name}
                  placeholder={activeLanguage === "English" ? input?.placeholderEng : input?.placeholderHr}
                  value={handleInputValues(input?.frontendSlug, query)}
                  onChange={(event) => handleChangeAndValidation(event?.target?.value, input?.frontendSlug, input?.validation, query, setQuery, fieldError, setFieldError)}
                />
                {handleFieldError(input?.frontendSlug, fieldError, input?.errorEng, input?.errorHr, activeLanguage)}
              </div>
              <div className="edit_form-content-custom-select-container">
                <div
                  className="edit_form-content-language-title">{activeLanguage === "English" ? customInput?.labelEng : customInput?.labelHr}</div>
                <div className="edit_form-content-custom-select-active"
                     onClick={() => setDropdownActive({
                       ...dropdownActive,
                       languageDropdownActive: !dropdownActive?.languageDropdownActive
                     })}>
                  <div className="edit_form-content-custom-select-active-svg-container">
                    <Globe/></div>
                  <div
                    className="edit_form-content-custom-selected-language">{deviceType === "phonePortrait" ? selectedBrowseLanguage?.title?.slice(0, 2) : selectedBrowseLanguage?.title}</div>
                  <div
                    className="edit_form-content-custom-select-active-svg-container">{dropdownActive?.languageDropdownActive ?
                    <CarretUp/> : <CarretDown/>}</div>
                </div>
                {dropdownActive?.languageDropdownActive && (
                  <div className="edit_form-content-custom-select-dropdown">
                    {customInput?.options?.map((el) => {
                      const {value, title} = el

                      return (
                        <div
                          className="edit_form-content-custom-select-dropdown-title-container"
                          key={value} onClick={() => {
                          setDropdownActive({...dropdownActive, languageDropdownActive: false})
                        }}>
                          <div onClick={() => setSelectedBrowseLanguage({
                            ...selectedBrowseLanguage,
                            value,
                            title
                          })}>{deviceType === "phonePortrait" ? title?.slice(0, 2) : title}</div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              <div className="edit_form-content-game-handle-container">
                <div className="edit_form-content-game-handle-title">
                  {activeLanguage === "English" ? gameHandle?.labelEng : gameHandle?.labelHr}
                </div>
                <div className="edit_form-content-game-handle-desc">
                  <span>{activeLanguage === "English" ? gameHandle?.descEng : gameHandle?.descHr}</span>
                  <span
                    className="edit_form-content-game-handle-modal-trigger"
                    onClick={() => setInfoModalOpen(true)}> {activeLanguage === "English" ? gameHandle?.infoEng : gameHandle?.infoHr}</span>
                </div>
                <div className="edit_form-content-game-handle-input-container">
                  <input
                    className={handleInputBorderClassName(gameHandle?.input?.frontendSlug, fieldError, "game_name-input", query)}
                    type={gameHandle?.input?.type}
                    name={gameHandle?.input?.name}
                    maxLength={gameHandle?.input?.maxLength}
                    onChange={(event) => handleChangeAndValidation(event?.target?.value, gameHandle?.input?.frontendSlug, gameHandle?.input?.validation, query, setQuery, fieldError, setFieldError)}
                    value={handleInputValues(gameHandle?.input?.frontendSlug, query)}
                    placeholder={activeLanguage === "English" ? gameHandle?.input?.placeholderEng : gameHandle?.input?.placeholderHr}
                  />
                  {handleFieldError(gameHandle?.input?.frontendSlug, fieldError, gameHandle?.input?.errorEng, gameHandle?.input?.errorHr, activeLanguage)}
                </div>
              </div>
              <div className="edit_form-content-maturity-container">
                <div className="edit_form-content-maturity-title">
                  {activeLanguage === "English" ? maturity?.labelEng : maturity?.labelHr}
                </div>
                <div className="edit_form-maturity-custom-select-container">
                  <div className="edit_form-maturity-custom-select-active"
                       onClick={() => setDropdownActive({
                         ...dropdownActive,
                         maturityDropdownActive: !dropdownActive?.maturityDropdownActive
                       })}>
                    <div
                      className="edit_form-maturity-custom-selected-value">{selectedMaturityValue?.titleEng}</div>
                    <div
                      className="edit_form-maturity-custom-select-active-svg-container">{dropdownActive?.maturityDropdownActive ?
                      <CarretUp/> : <CarretDown/>}</div>
                  </div>
                  {dropdownActive?.maturityDropdownActive && (
                    <div className="edit_form-maturity-custom-select-dropdown">
                      {maturity?.options?.map((el) => {
                        const {value, titleEng} = el

                        return (
                          <div
                            className="edit_form-maturity-custom-select-dropdown-title-container"
                            key={value} onClick={() => {
                            setSelectedMaturityValue(el)
                            setDropdownActive({...dropdownActive, maturityDropdownActive: false})
                          }}>
                            <div>{titleEng}</div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="edit_form-content-controls-container">
                <div
                  className="edit_form-content-controls-title">{activeLanguage === "English" ? controls?.headerEng : controls?.headerHr}</div>
                <div className="edit_form-content-controls-inputs-container">
                  {controls?.checkboxInputs?.map((el) => {
                    const {
                      id,
                      type,
                      frontendSlug,
                      labelEng,
                      labelHr,
                      name,
                    } = el

                    return (
                      <div className="checkbox-label-input-container" key={id}>
                        <input
                          type={type}
                          name={name}
                          onChange={(event) => handleCheckboxValues(frontendSlug, event, query, setQuery)}
                          checked={handleChecked(frontendSlug, query)}
                        />
                        <label>{activeLanguage === "English" ? labelEng : labelHr}</label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="edit_form-buttons-container" style={{width: `${mainDivWidth}px`}}>
            {
              buttons?.map((el) => {
                const {id, frontendSlug, titleEng, titleHr} = el

                return (
                  <button onClick={() => {
                    if (frontendSlug === "save") handleSubmit(updateUserProfile, activeLanguage, userEmail, editProfileActive, query, selectedMaturityValue, selectedBrowseLanguage, setIsEditFormActive, setResponseSuccessMessage, setResponseErrorMessage, updateProfileImage, editImageActiveSlug)
                    else if (frontendSlug === "cancel") setIsEditFormActive(false)
                    else if (frontendSlug === "delete") handleDelete(deleteUserProfile, activeLanguage, userEmail, editProfileActive, setIsEditFormActive, setResponseSuccessMessage, setResponseErrorMessage)
                    else return null
                  }} className={`button-${frontendSlug}`}
                          key={id}
                          disabled={handleDisabled(frontendSlug, query, fieldError)}
                  >
                    {activeLanguage === "English" ? titleEng : titleHr}
                  </button>
                )
              })
            }
          </div>
        </div>
      </StyledEditForm>
    )
  }
}
