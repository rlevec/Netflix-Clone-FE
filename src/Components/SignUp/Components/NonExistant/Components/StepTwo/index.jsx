import React, {useState} from "react";

import {StyledStepTwo} from "./styledStepTwo.js";

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleInputType,
  handlePasswordIcon
} from "./helpers.jsx";

import {useSelector} from "react-redux";

export default function StepTwo(props) {
  const {
    data: {
      stepTitleEng,
      stepTitleHr,
      stepDescEng,
      stepDescHr,
      stepDescEngSecondary,
      stepDescHrSecondary,
      inputs,
      checkboxInputContent,
    },
    query,
    setQuery,
    fieldError,
    setFieldError,
  } = props


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const [showPassword, setShowPassword] = useState({password: false})


  return (
    <StyledStepTwo>
      <div className="step_two-content-title">
        {activeLanguage === "English" ? stepTitleEng : stepTitleHr}
      </div>
      <div className="step_two-content-desc-container">
        <div className="step_two-content-desc">
          {activeLanguage === "English" ? stepDescEng : stepDescHr}
        </div>
        <div className="step_two-content-desc-sec">
          {activeLanguage === "English" ? stepDescEngSecondary : stepDescHrSecondary}
        </div>
      </div>
      <div className="step_two-content-inputs-container">
        {inputs?.map((el) => {
          const {
            id,
            frontendSlug,
            placeholderEng,
            placeholderHr,
            validation,
            errorEng,
            errorHr,
            name,
            type
          } = el

          return (
            <div className="step_two-content-single-input-container" key={id}>
              <input
                type={handleInputType(frontendSlug, type, showPassword)}
                name={name}
                placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                className={handleInputBorderClassName(frontendSlug, fieldError, "step_two-input", query)}
                onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError)}
                value={handleInputValues(frontendSlug, query)}
              />
              {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
              {frontendSlug === "password" && handlePasswordIcon(frontendSlug, showPassword, setShowPassword)}
            </div>
          )
        })}
      </div>
      <div className="step_two-content-checkbox-input-container">
        <div className="step_two-content-checkbox-single-input-container">
          <input
            type={checkboxInputContent?.input?.type}
            onChange={(event) => setQuery({...query, newsletter: event?.target?.checked})}
          />
        </div>
        <div className="step_two-content-checkbox-single-label-container">
          <label>{activeLanguage === "English" ? checkboxInputContent?.labelEng : checkboxInputContent?.labelHr}</label>
        </div>
      </div>
    </StyledStepTwo>
  )
}