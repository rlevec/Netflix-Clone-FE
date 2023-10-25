import React from "react";

import {StyledEmailKnown} from "./styledEmailKnown.js";
import {useSelector} from "react-redux";
import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleIsButtonDisabled,
  handleButtonActions
} from "./helpers.jsx";


export default function EmailKnown(props) {
  const {
    data: {
      paragraphInfo,
      formInput,
      formButton,
      forgotEmail
    },
    query,
    setQuery,
    fieldError,
    setFieldError,
    setCurrentActiveForm,
    isFetchedUsers,
    formError,
    setFormError
  } = props


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)


  return (
    <StyledEmailKnown>
      <div
        className="email_known-paragraph-title">{activeLanguage === "English" ? paragraphInfo?.paragraphTitleEng : paragraphInfo?.paragraphTitleHr}</div>
      <div className="email_known-input-container">
        <input
          onChange={(event) => handleChangeAndValidation(event?.target?.value, formInput?.frontendSlug, formInput?.validation, query, setQuery, fieldError, setFieldError)}
          value={handleInputValues(formInput?.frontendSlug, query)}
          className={handleInputBorderClassName(formInput?.frontendSlug, fieldError, "email_known-input", query)}
          type={formInput?.type}
          placeholder={activeLanguage === "English" ? formInput?.placeholderEng : formInput?.placeholderHr}
          name={formInput?.name}
        />
        {handleFieldError(formInput?.frontendSlug, fieldError, formInput?.errorEng, formInput?.errorHr, activeLanguage)}
      </div>
      <div className="email_known-button-container">
        <button onClick={() => handleButtonActions(isFetchedUsers, query, setQuery, fieldError, setFieldError, setCurrentActiveForm, formError, setFormError)} disabled={handleIsButtonDisabled(query, fieldError)}>{activeLanguage === "English" ? formButton?.titleEng : formButton?.titleHr}</button>
      </div>
      <div
        className="email_known-forgot-container"
        onClick={() => setCurrentActiveForm("unknownMailForm")}
      >
        {activeLanguage === "English" ? forgotEmail?.titleEng : forgotEmail?.titleHr}
      </div>
    </StyledEmailKnown>
  )
}