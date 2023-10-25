import React, {useState} from "react";

import {StyledSignUp} from "./styledSignUp.js";

import {useGetSignUpFormDataQuery} from "../../Redux/Injections/FormGetRequests/getSignUpFormData.js"
import {useSelector} from "react-redux";

import {Link, useNavigate} from "react-router-dom";

import {ReactComponent as NetflixLogo} from "../../Assets/svg/logo.svg";

import {routes} from "../../Routes/routes.js";


import StepOne from "./Components/NonExistant/Components/StepOne/index.jsx";
import StepTwo from "./Components/NonExistant/Components/StepTwo/index.jsx";
import StepThree from "./Components/NonExistant/Components/StepThree/index.jsx";
import StepFour from "./Components/NonExistant/Components/StepFour/index.jsx";
import StepFive from "./Components/NonExistant/Components/StepFive/index.jsx";
import StepSix from "./Components/NonExistant/Components/StepSix/index.jsx";
import Footer from "../Footer/index.jsx";

import {handleMaxStep, handleContentToRenderByCurrentStep, isStepButtonDisabled, handleFullPrefix} from "./helpers.js";

export default function SignUp() {
  const {
    data: isFetchedSignUpFormData,
    isFetching: isFetchingSignUpFormData,
    isLoading: isLoadingSignUpFormData,
    isError: isErrorSignUpFormData
  } = useGetSignUpFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name

  const signUpMail = useSelector((state) => state?.signUpMail?.signUpMail)

  const [currentStep, setCurrentStep] = useState(1)

  const navigate = useNavigate()

  const [query, setQuery] = useState({
    email: signUpMail,
    password: "",
    cardNumber: "",
    expirationDate: "",
    ccv: "",
    firstName: "",
    lastName: "",
    newsletter: false
  })
  const [fieldError, setFieldError] = useState({
    email: false,
    password: false,
    cardNumber: false,
    expirationDate: false,
    ccv: false,
    firstName: false,
    lastName: false,
    newsletter: false
  })
  const [activePlan, setActivePlan] = useState("")
  const [activeForm, setActiveForm] = useState("")




  if (isFetchingSignUpFormData || isLoadingSignUpFormData) return <div>LOADING</div>
  else if (isErrorSignUpFormData || !isFetchedSignUpFormData) return <div>ERROR</div>
  else {
    return (
      <StyledSignUp>
        <div className="signUp_header-wrapper">
          <Link to={routes?.clientRoutes?.root} className="logo-icon-container">
            <NetflixLogo/>
          </Link>
          <div className="signUp_header-button-container">
            <button onClick={() => navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticLoginRoute}`, {replace: false})}>{activeLanguage === "English" ? isFetchedSignUpFormData?.nonExistant?.loginStateButtons?.signInButton?.titleEng : isFetchedSignUpFormData?.nonExistant?.loginStateButtons?.signInButton?.titleHr}</button>
          </div>
        </div>
        <div className="signUp_content-wrapper">
          <div className="signUp_step-container">
            <div
              className="signUp_step-text">{activeLanguage === "English" ? isFetchedSignUpFormData?.nonExistant?.step?.stepTitleEng : isFetchedSignUpFormData?.nonExistant?.step?.stepTitleHr}</div>
            <div className="signUp_step-number">{currentStep}</div>
            <div
              className="signUp_step-text">{activeLanguage === "English" ? isFetchedSignUpFormData?.nonExistant?.step?.stepTitleSecondaryEng : isFetchedSignUpFormData?.nonExistant?.step?.stepTitleSecondaryEng}</div>
            <div className="signUp_step-number">{handleMaxStep(isFetchedSignUpFormData)}</div>
          </div>
          <div className="signUp_step-content">
            {handleContentToRenderByCurrentStep(isFetchedSignUpFormData, currentStep)?.map((el) => {
              return (
                <div className="signUp_step-content-wrapper">
                  {el?.step === 1 && <StepOne data={el}/>}
                  {el?.step === 2 && <StepTwo data={el} query={query} setQuery={setQuery} fieldError={fieldError}
                                              setFieldError={setFieldError}/>}
                  {el?.step === 3 && <StepThree data={el}/>}
                  {el?.step === 4 && <StepFour data={el} activePlan={activePlan} setActivePlan={setActivePlan}/>}
                  {el?.step === 5 && <StepFive data={el} activeForm={activeForm} setActiveForm={setActiveForm} query={query} setQuery={setQuery} fieldError={fieldError} setFieldError={setFieldError}/>}
                  {el?.step === 6 && <StepSix data={el} query={query} setQuery={setQuery} fieldError={fieldError}
                                              setFieldError={setFieldError} activePlan={activePlan}
                                              setCurrentStep={setCurrentStep} activeForm={activeForm}/>}
                </div>
              )
            })}
          </div>
          <div
            className={currentStep > 1 && currentStep < handleMaxStep(isFetchedSignUpFormData) ? "signUp_step-navigation-wrapper-secondary" : "signUp_step-navigation-wrapper-primary"}>
            <div className="buttons-container">
              {currentStep !== 1 && <div className="previousButton-container">
                <button
                  onClick={() => {
                    setCurrentStep(currentStep - 1);
                    window.scrollTo(0, 0)
                  }}>{activeLanguage === "English" ? isFetchedSignUpFormData?.nonExistant?.buttons?.buttonPrevTitleEng : isFetchedSignUpFormData?.nonExistant?.buttons?.buttonPrevTitleHr}</button>
              </div>}
              {currentStep !== handleMaxStep(isFetchedSignUpFormData) && <div className="nextButton-container">
                <button
                  disabled={isStepButtonDisabled(currentStep, query, fieldError, activePlan, activeForm)}
                  onClick={() => {
                    setCurrentStep(currentStep + 1);
                    window.scrollTo(0, 0)
                  }}>{activeLanguage === "English" ? isFetchedSignUpFormData?.nonExistant?.buttons?.buttonNextTitleEng : isFetchedSignUpFormData?.nonExistant?.buttons?.buttonNextTitleHr}</button>
              </div>}
            </div>
          </div>
        </div>
        <Footer/>
      </StyledSignUp>
    )
  }
}