import React from "react";
import {StyledFormActive} from "./styledFormActive.js";
import {useSelector} from "react-redux";

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleIsButtonDisabled,
  handleInputType,
  handlePasswordIcon
} from "./helpers.jsx";


export default function FormActive(props) {
  const {
    data: {
      formButton,
      formInputs,
      paragraphInfo
    },
    query,
    setQuery,
    fieldError,
    setFieldError,
    showPassword,
    setShowPassword,
    setPasswordChangeInitiated,
  } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)


  return (
    <StyledFormActive>
      <div
        className="form_active-paragraph-title">{activeLanguage === "English" ? paragraphInfo?.paragraphTitleEng : paragraphInfo?.paragraphTitleHr}</div>
      <div className="form_active-inputs-container">
        {
          formInputs?.map((el) => {
            const {
              frontendSlug,
              id,
              name,
              type,
              errorEng,
              errorHr,
              validation,
              placeholderEng,
              placeholderHr,
            } = el

            return (
              <div className="form_active-input-container" key={id}>
                <input
                  onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError)}
                  value={handleInputValues(frontendSlug, query)}
                  className={handleInputBorderClassName(frontendSlug, fieldError, `${frontendSlug}-input`, query)}
                  type={handleInputType(frontendSlug, type, showPassword)}
                  placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                  name={name}
                />
                {(frontendSlug === "newPassword" || frontendSlug === "confirmNewPassword") && handlePasswordIcon(frontendSlug, showPassword, setShowPassword)}
                {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
              </div>
            )
          })
        }
      </div>
      <div className="form_active-button-container" onClick={() => setPasswordChangeInitiated(true)}>
        <button
          disabled={handleIsButtonDisabled(query, fieldError)}>{activeLanguage === "English" ? formButton?.titleEng : formButton?.titleHr}</button>
      </div>
    </StyledFormActive>
  )
}