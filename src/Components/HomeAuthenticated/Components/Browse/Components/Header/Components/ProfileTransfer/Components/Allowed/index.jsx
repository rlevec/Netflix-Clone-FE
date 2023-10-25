import React, {useState} from "react";

import {StyledAllowedSignIn} from "./styledAllowedSignIn.js";

import StepOne from "./Components/StepOne/index.jsx";
import StepTwo from "./Components/StepTwo/index.jsx";
import StepThree from "./Components/StepThree/index.jsx";
import StepFour from "./Components/StepFour/index.jsx";
import StepFive from "./Components/StepFive/index.jsx";
import StepSix from "./Components/StepSix/index.jsx";
import Login from "./Components/Login/index.jsx";

import {filterContentByStep, handleMinMaxStep, isButtonDisabled} from "./helpers.js";

import {useSelector} from "react-redux";

export default function Allowed(props) {
  const {
    allowed: {
      buttons,
      content,
      errorMap,
      loginContent
    },
    isFetchedUsersData,
    editableProfileImages,
    profileImages,
    setActiveSubComponent
  } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const [currentStep, setCurrentStep] = useState(1)

  const [profileSelected, setProfileSelected] = useState(null)

  const [activePlanSelected, setActivePlanSelected] = useState(null)

  const [activeLoginForm, setActiveLoginForm] = useState(false)


  const [query, setQuery] = useState({
    newEmail: "",
    newPassword: "",
    cardNumber: "",
    expirationDate: "",
    ccv: "",
    firstName: "",
    lastName: "",
  })
  const [fieldError, setFieldError] = useState({
    newEmail: false,
    newPassword: false,
    cardNumber: false,
    expirationDate: false,
    ccv: false,
    firstName: false,
    lastName: false
  })
  const [formSelected, setFormSelected] = useState(null)



  if(activeLoginForm) {
    return  (
      <Login
        profileSelected={profileSelected}
        isFetchedUsersData={isFetchedUsersData}
        errorMap={errorMap}
        setActiveLoginForm={setActiveLoginForm}
        setCurrentStep={setCurrentStep}
        queryPlaceholder={query}
        setActiveSubComponent={setActiveSubComponent}
        loginContent={loginContent}
      />
    )
  }
  else {
    return (
      <StyledAllowedSignIn>
        <div className="allowed_wrapper">
          <div className="allowed_step-content-wrapper">
            {currentStep === 1 &&
              <StepOne
                renderContent={filterContentByStep(content, currentStep)}
                isFetchedUsersData={isFetchedUsersData}
                editableProfileImages={editableProfileImages}
                profileImages={profileImages}
                profileSelected={profileSelected}
                setProfileSelected={setProfileSelected}
              />
            }
            {currentStep === 2 && <StepTwo
              isFetchedUsersData={isFetchedUsersData}
              renderContent={filterContentByStep(content, currentStep)}
              profileSelected={profileSelected}
              editableProfileImages={editableProfileImages}
              profileImages={profileImages}
              setQuery={setQuery}
              query={query}
              setFieldError={setFieldError}
              fieldError={fieldError}
            />
            }
            {currentStep === 3 &&
              <StepThree
                renderContent={filterContentByStep(content, currentStep)}
              />
            }
            {currentStep === 4 &&
              <StepFour
                renderContent={filterContentByStep(content, currentStep)}
                activePlan={activePlanSelected}
                setActivePlan={setActivePlanSelected}/>
            }
            {currentStep === 5 &&
              <StepFive
                query={query}
                setQuery={setQuery}
                fieldError={fieldError}
                setFieldError={setFieldError}
                renderContent={filterContentByStep(content, currentStep)}
                formSelected={formSelected}
                setFormSelected={setFormSelected}
              />
            }
            {currentStep === 6 &&
              <StepSix
                profileSelected={profileSelected}
                query={query}
                setQuery={setQuery}
                fieldError={fieldError}
                setFieldError={setFieldError}
                renderContent={filterContentByStep(content, currentStep)}
                activeForm={formSelected}
                activePlan={activePlanSelected}
                setCurrentStep={setCurrentStep}
                errorMap={errorMap}
              />
            }
          </div>
          <div className="allowed_buttons-container">
            {buttons?.map((el) => {
              const {
                id,
                frontendSlug,
                labelEng,
                labelHr
              } = el


              if (currentStep === handleMinMaxStep(content)?.minStepValue) {
                if (frontendSlug === "next") {
                  return (
                    <div className={`${frontendSlug}Button-container`}>
                      <button disabled={isButtonDisabled(currentStep, profileSelected, query, fieldError, activePlanSelected, formSelected)}
                              onClick={() => setCurrentStep(currentStep + 1)}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                    </div>
                  )
                }
                if (frontendSlug === "back") {
                  return (
                    <div className={`${frontendSlug}Button-container`}>
                      <button
                        onClick={() => setActiveSubComponent(null)}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                    </div>
                  )
                }
                else return null
              } else if (currentStep === handleMinMaxStep(content)?.maxStepValue) {
                if (frontendSlug === "submit") return null
                else if (frontendSlug === "back") {
                  return (
                    <div className={`${frontendSlug}Button-container`}>
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                    </div>
                  )
                } else return null
              } else if (currentStep > handleMinMaxStep(content)?.minStepValue && currentStep < handleMinMaxStep(content)?.maxStepValue) {
                if (frontendSlug === "back") {
                  return (
                    <div className={`${frontendSlug}Button-container`}>
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                    </div>
                  )
                } else if (frontendSlug === "next") {
                  return (
                    <div className={`${frontendSlug}Button-container`}>
                      <button
                        disabled={isButtonDisabled(currentStep, profileSelected, query, fieldError, activePlanSelected, formSelected)}
                        onClick={() => {
                          if(currentStep === 2 && !!isFetchedUsersData[query?.newEmail]) setActiveLoginForm(true)
                          else setCurrentStep(currentStep + 1)
                         }}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                    </div>
                  )
                } else return null
              }
            })}
          </div>
        </div>
      </StyledAllowedSignIn>
    )
  }
}