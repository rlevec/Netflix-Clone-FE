import React from "react";

import {StyledEmailUnknown} from "./styledEmailUnknown.js";
import {useSelector} from "react-redux";
import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  handleCreditCardImageToRender,
  handleIsButtonDisabled,
  handleButtonActions
} from "./helpers.jsx";



export default function EmailUnknown(props) {

  const {
    data: {
      formButtons,
      formInputs,
      paragraphInfo,
      paymentImages
    },
    query,
    setQuery,
    fieldError,
    setFieldError,
    setCurrentActiveForm,
    isFetchedUsers,
    formError,
    setFormError,
    setGeneratedEmail,
    formSuccess,
    setFormSuccess
  } = props


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)



  return (
    <StyledEmailUnknown>
      <div
        className="email_unknown-paragraph-title">{activeLanguage === "English" ? paragraphInfo?.paragraphTitleEng : paragraphInfo?.paragraphTitleHr}</div>
      <div className="email_unknown-inputs-container">
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
              validationAmex,
              validationMaestro,
              validationMaster,
              validationVisa
            } = el

            return (
              <div className="email_unknown-input-container" key={id}>
                <input
                  onChange={(event) => handleChangeAndValidation(event?.target?.value, frontendSlug, validation, query, setQuery, fieldError, setFieldError, validationVisa, validationMaster, validationAmex, validationMaestro)}
                  value={handleInputValues(frontendSlug, query)}
                  className={handleInputBorderClassName(frontendSlug, fieldError, "email_unknown-input", query)}
                  type={type}
                  placeholder={activeLanguage === "English" ? placeholderEng : placeholderHr}
                  name={name}
                />
                {frontendSlug === "cardNumber" && handleCreditCardImageToRender(query, paymentImages, validationVisa, validationAmex, validationMaster, validationMaestro)}
                {handleFieldError(frontendSlug, fieldError, errorEng, errorHr, activeLanguage)}
              </div>
            )
          })
        }
      </div>
      <div className="email_unknown-buttons-container">
        {
          formButtons?.map((el) => {
            const {
              frontendSlug,
              id,
              titleEng,
              titleHr
            } = el

            return <button disabled={frontendSlug === "findAccount" && handleIsButtonDisabled(query, fieldError)} onClick={() => handleButtonActions(frontendSlug, setCurrentActiveForm, isFetchedUsers, query, setQuery, fieldError, setFieldError, setGeneratedEmail, setFormSuccess, formSuccess, setFormError,formError)} className={`email_unknown-button-${frontendSlug}`}
                           key={id}>{activeLanguage === "English" ? titleEng : titleHr}</button>
          })
        }
      </div>
    </StyledEmailUnknown>
  )
}