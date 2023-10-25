import React, {useState} from "react";

import {StyledAccount} from "./styledAccount.js";

import {ReactComponent as MemberSince} from "../../../../../../../../Assets/svg/member_since.svg";

import {useSelector, useDispatch} from "react-redux";

import {ReactComponent as CarretUp} from "../../../../../../../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../../../../../../../Assets/svg/carretDown.svg";

import {usePostDeleteUserAccountMutation} from "../../../../../../../../Redux/Injections/UserPostRequests/postUserDeleteAccount.js"
import {usePostUserLogoutMutation} from "../../../../../../../../Redux/Injections/UserPostRequests/postUserLogout.js"

import Active from "./Components/Active/index.jsx";
import ActivePlan from "./Components/Form/Components/ActivePlan/index.jsx";
import BillingDay from "./Components/Form/Components/BillingDay/index.jsx";
import CardNumber from "./Components/Form/Components/CardNumber/index.jsx";
import Email from "./Components/Form/Components/Email/index.jsx";
import Password from "./Components/Form/Components/Password/index.jsx";
import AccountName from "./Components/Form/Components/AccountName/index.jsx";
import ForKids from "./Components/Form/Components/ForKids/index.jsx";
import ProfileImage from "./Components/Form/Components/ProfileImage/index.jsx";
import GameName from "./Components/Form/Components/GameName/index.jsx";
import Language from "./Components/Form/Components/Language/index.jsx";
import MaturitySettings from "./Components/Form/Components/MaturitySettings/index.jsx";
import AutoplayNext from "./Components/Form/Components/AutoplayNext/index.jsx";
import AutoplayPreviews from "./Components/Form/Components/AutoplayPreviews/index.jsx";

import {generateUserObject, handleUserValueToRender, handleProfileImage} from "./Components/helpers.js";

import {handleMatchActiveAccountData, handleDeleteAccount} from "./helpers.js";

import {setUserMail} from "../../../../../../../../Redux/Slices/userMailSlice.js";


export default function Account(props) {

  const {
    isFetchedUsersData,
    profileImages,
    editableProfileImages,
    errorMap,
    setActiveAccountName,
    setBrowseProfileActive,
    isFetchedAccountFormData: {
      headerTitleEng,
      headerTitleHr,
      buttonTitleEng,
      buttonTitleHr,
      contentSection: {
        membershipBilling,
        planDetails,
        profileParentalControls
      },
      memebershipSection
    },
    setActiveSubComponent,
  } = props


  const [deleteAccount] = usePostDeleteUserAccountMutation()
  const [logoutUser] = usePostUserLogoutMutation()

  const dispatch = useDispatch()

  const userEmail = useSelector((state) => state?.userMail?.userMail)
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const [dropdownAccountSlugActive, setDropdownAccountSlugActive] = useState(null)


  const [activeForm, setActiveForm] = useState(null)
  const [activeFormContent, setActiveFormContent] = useState(null)

  const [activeDropdownForm, setActiveDropdownForm] = useState(null)
  const [activeDropdownFormContent, setActiveDropdownFormContent] = useState(null)

  const [responseMessage, setResponseMessage] = useState({success: null})



  if (activeFormContent) {
    if (activeForm === "email") {
      return <Email
        changeEmailFormAlert={errorMap?.changeEmail}
        setActiveForm={setActiveForm}
        setActiveFormContent={setActiveFormContent}
        activeFormContent={activeFormContent}/>
    } else if (activeForm === "password") {
      return <Password
        isFetchedUsersData={isFetchedUsersData}
        changePasswordFormAlert={errorMap?.changePassword}
        setActiveForm={setActiveForm}
        setActiveFormContent={setActiveFormContent}
        activeFormContent={activeFormContent}/>
    } else if (activeForm === "cardNumber") {
      return <CardNumber
        isFetchedUsersData={isFetchedUsersData}
        changeCardNumberFormAlert={errorMap?.changeCardNumber}
        setActiveForm={setActiveForm}
        setActiveFormContent={setActiveFormContent}
        activeFormContent={activeFormContent}/>
    } else if (activeForm === "billingDay") {
      return <BillingDay
        isFetchedUsersData={isFetchedUsersData}
        changeBillingDayFormAlert={errorMap?.changeBillingDay}
        setActiveForm={setActiveForm}
        setActiveFormContent={setActiveFormContent}
        activeFormContent={activeFormContent}/>
    } else if (activeForm === "activePlan") {
      return <ActivePlan
        isFetchedUsersData={isFetchedUsersData}
        changeActivePlanFormAlert={errorMap?.changeActivePlan}
        setActiveForm={setActiveForm}
        setActiveFormContent={setActiveFormContent}
        activeFormContent={activeFormContent}/>
    }
    else return null
  } else if (activeDropdownFormContent) {
    if (activeDropdownForm === "accountName") {
      return <AccountName
        setBrowseProfileActive={setBrowseProfileActive}
        setActiveAccountName={setActiveAccountName}
        changeAccountNameFormAlert={errorMap?.changeAccountName}
        accountNameBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.accountName}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
      />
    } else if (activeDropdownForm === "forKids") {
      return <ForKids
        changeForKidsFormAlert={errorMap?.changeForKids}
        forKidsBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.forKids}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
      />

    } else if (activeDropdownForm === "gameName") {
      return <GameName
        changeGameNameFormAlert={errorMap?.changeGameName}
        gameNameBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.gameName}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
      />
    } else if (activeDropdownForm === "language") {
      return <Language
        changeLanguageFormAlert={errorMap?.changeLanguage}
        languageBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.language}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
      />
    } else if (activeDropdownForm === "maturitySetting") {
      return <MaturitySettings
        setBrowseProfileActive={setBrowseProfileActive}
        setActiveAccountName={setActiveAccountName}
        changeMaturitySettingsFormAlert={errorMap?.changeMaturitySettings}
        maturitySettingsBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.maturitySetting}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
      />
    } else if (activeDropdownForm === "autoplayNext") {
      return <AutoplayNext
        setBrowseProfileActive={setBrowseProfileActive}
        setActiveAccountName={setActiveAccountName}
        changeAutoplayNextFormAlert={errorMap?.changeAutoplayNext}
        autoplayNextBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.autoplayNext}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
      />
    } else if (activeDropdownForm === "autoplayPreview") {
      return <AutoplayPreviews
        setBrowseProfileActive={setBrowseProfileActive}
        setActiveAccountName={setActiveAccountName}
        changeAutoplayPreviewsFormAlert={errorMap?.changeAutoplayPreviews}
        autoplayPreviewsBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.autoplayPreview}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
      />
    } else if (activeDropdownForm === "profileImage") {
      return <ProfileImage
        changeProfileImageFormAlert={errorMap?.changeProfileImage}
        setBrowseProfileActive={setBrowseProfileActive}
        setActiveAccountName={setActiveAccountName}
        setActiveDropdownForm={setActiveDropdownForm}
        setActiveDropdownFormContent={setActiveDropdownFormContent}
        activeDropdownFormContent={activeDropdownFormContent}
        dropdownAccountSlugActive={dropdownAccountSlugActive}
        profileImages={profileImages}
        editableProfileImages={editableProfileImages}
        imageBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.imageSlug}
        editableImageBackend={handleMatchActiveAccountData(dropdownAccountSlugActive, isFetchedUsersData, userEmail)?.image}
      />
    }
    else return null
  } else {
    return (
      <StyledAccount inactive={responseMessage?.success}>
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        <div className="account_wrapper">
          <div className="account_header-container">
            <div
              className="account_header-title">{activeLanguage === "English" ? headerTitleEng : headerTitleHr}</div>
            <div className="account_header-member-since-container">
              <div className="account_header-member-since-svg-container">
                <MemberSince/>
              </div>
              <div className="account_header-member-since-content-one-container">
                {activeLanguage === "English" ? memebershipSection?.titleEng : memebershipSection?.titleHr}
              </div>
              <div className="account_header-member-since-content-two-container">
                <div className="account_header-member-since-paragraph-one">
                  {activeLanguage === "English" ? generateUserObject(isFetchedUsersData, userEmail)?.registerDate?.month?.monthTitleEng : generateUserObject(isFetchedUsersData, userEmail)?.registerDate?.month?.monthTitleHr}
                </div>
                <div
                  className="account_header-member-since-paragraph-two">{generateUserObject(isFetchedUsersData, userEmail)?.registerDate?.year}</div>
              </div>
            </div>
          </div>
          <div className="account_content-container">
            <div className="account_membership-billing-container">
              <div className="account_membership-billing-title-button-container">
                <div
                  className="account_membership-billing-title">{activeLanguage === "English" ? membershipBilling?.header?.titleEng : membershipBilling?.header?.titleHr}</div>
                <button
                  className="account_membership-billing-button"
                  onClick={() => handleDeleteAccount(setResponseMessage, responseMessage, activeLanguage, errorMap, deleteAccount, userEmail, logoutUser, dispatch)
                }
                >{activeLanguage === "English" ? membershipBilling?.button?.titleEng : membershipBilling?.button?.titleHr}</button>
              </div>
              <div className="account_membership-billing-readOnly-writeOnly-content-wrapper">
                <div className="account_membership-billing-readOnly-content-container">
                  {membershipBilling?.readOnlyContent?.map((el) => {
                    const {
                      frontendSlug,
                      id,
                      labelEng,
                      labelHr,
                    } = el

                    return (
                      <div className="account_membership-billing-readOnly-element-container">
                        <div className="account_membership-billing-readOnly-element-label"
                             key={id}>{activeLanguage === "English" ? labelEng : labelHr}:
                        </div>
                        <div
                          className="account_membership-billing-readOnly-element-value">{handleUserValueToRender(frontendSlug, isFetchedUsersData, userEmail)}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="account_membership-billing-writeOnly-content-container">
                  {membershipBilling?.editableContent?.map((el) => {
                    const {
                      form,
                      frontendSlug,
                      id,
                      labelEng,
                      labelHr,
                    } = el

                    return (
                      <div
                        className="account_membership-billing-writeOnly-element-label"
                        key={id}
                        onClick={() => {
                          setActiveForm(frontendSlug)
                          setActiveFormContent(form)
                        }}
                      >
                        {activeLanguage === "English" ? labelEng : labelHr}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="account_plan-details-container">
              <div className="account_plan-details-title-container">
                <div
                  className="account_plan-details-title">{activeLanguage === "English" ? planDetails?.header?.titleEng : planDetails?.header?.titleHr}</div>
              </div>
              <div className="account_plan-details-readOnly-writeOnly-content-wrapper">
                <div className="account_plan-details-readOnly-content-container">
                  <div className="account_plan-details-readOnly-element-container">
                    <div
                      className="account_plan-details-readOnly-element-label">{activeLanguage === "English" ? planDetails?.readOnlyContent?.labelEng : planDetails?.readOnlyContent?.labelHr}:
                    </div>
                    <div
                      className="account_plan-details-readOnly-element-value">{generateUserObject(isFetchedUsersData, userEmail)?.activePlan}</div>
                  </div>
                </div>
                <div className="account_plan-details-writeOnly-content-container">
                  <div
                    className="account_plan-details-writeOnly-element-label"
                    onClick={() => {
                      setActiveForm(planDetails?.editableContent?.frontendSlug)
                      setActiveFormContent(planDetails?.editableContent?.form)
                    }}
                  >{activeLanguage === "English" ? planDetails?.editableContent?.labelEng : planDetails?.editableContent?.labelHr}</div>
                </div>
              </div>
            </div>
            <div className="account_parental-controls-container">
              <div className="account_parental-controls-title-container">
                <div
                  className="account_parental-controls-title">{activeLanguage === "English" ? profileParentalControls?.header?.titleEng : profileParentalControls?.header?.titleHr}</div>
              </div>
              <div className="account_parental-controls-content-container">
                {isFetchedUsersData[userEmail]?.accounts?.map((el) => {
                  const {
                    accountName,
                    imageSlug,
                    image,
                    maturitySetting,
                  } = el


                  return (
                    <div
                      className="account_parental-controls-single-content-container"
                    >
                      <div className="account_parental-controls-single-content-img-name-rating-wrapper"
                           onClick={() => {
                             if (accountName === dropdownAccountSlugActive) setDropdownAccountSlugActive(null)
                             else setDropdownAccountSlugActive(accountName)
                           }}
                      >
                        <div className="account_parental-controls-single-content-img-name-rating-container">
                          <img src={handleProfileImage(imageSlug, image, editableProfileImages, profileImages)}
                               alt="profile-image"/>
                          <div className="account_parental-controls-single-content-name-rating-container">
                            <div
                              className="account_parental-controls-single-content-name-container">{accountName}</div>
                            <div
                              className="account_parental-controls-single-content-amt-container">{activeLanguage === "English" ?  maturitySetting?.titleEng : maturitySetting?.titleHr}</div>
                          </div>
                        </div>
                        <div
                          className="account_parental-controls-single-content-svg-container">{dropdownAccountSlugActive === accountName ?
                          <CarretDown/> : <CarretUp/>}</div>
                      </div>
                      <div
                        className="account_parental-controls-single-active-content">{accountName === dropdownAccountSlugActive && (
                        <Active
                          setActiveDropdownForm={setActiveDropdownForm}
                          setActiveDropdownFormContent={setActiveDropdownFormContent}
                          accountData={el}
                          accountReadOnlyData={profileParentalControls?.readOnlyContent}
                          accountEditableData={profileParentalControls?.editableContent}
                        />
                      )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="account_button-container">
            <button
              className="account_button"
              onClick={() => {
                setActiveSubComponent(null);
                window.scrollTo(0, 0)
              }}>
              {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
            </button>
          </div>
        </div>
      </StyledAccount>
    )
  }
}