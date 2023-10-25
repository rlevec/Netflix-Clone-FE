import React, {useState} from "react";

import {StyledHomeUnauthenticatedFaqSection} from "./styledHomeUnauthenticatedFaqSection.js";

import {useSelector, useDispatch} from "react-redux";

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  useHandleUserExistance
} from "../../helpers.jsx";
import {handleAccordionSecondAnswerDivIfExists} from "./helpers.js";

import {ReactComponent as Plus} from "../../../../Assets/svg/plus.svg";
export default function HomeUnauthenticatedFaqSection(props) {
  const {homeUnauthenticatedFormData, isFetchedUsers} = props

  const dispatch = useDispatch()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const [activeAccordion, setActiveAccordion] = useState("")
  const [query, setQuery] = useState({email: ""})
  const [fieldError, setFieldError] = useState({email: false})

  return (
    <StyledHomeUnauthenticatedFaqSection>
      <div className="home_unauthenticated-faq-section-wrapper">
        <div className="home_unauthenticated-faq-section-title">
          {activeLanguage === "English" ? homeUnauthenticatedFormData?.faqSection?.faqTitleEng : homeUnauthenticatedFormData?.faqSection?.faqTitleHr}
        </div>
        <div className="home_unauthenticated-faq-section-accordion-container">
          {homeUnauthenticatedFormData?.faqSection?.accordionArray?.map((el) => {
            const {id, frontendSlug, questionEng, questionHr, answerEngOne, answerHrOne, answerEngTwo, answerHrTwo} = el

            return (
              <div key={id} className="home_unauthenticated-faq-section-accordion-question-answer-container">
                <div
                  className="home_unauthenticated-faq-section-accordion-question"
                  onClick={() => {
                    if (activeAccordion === frontendSlug) setActiveAccordion("")
                    else setActiveAccordion(frontendSlug)
                  }}
                >
                  <div className="home_unauthenticated-faq-section-accordion-question-title-icon-container">
                    <div
                      className="home_unauthenticated-faq-section-accordion-question-title">{activeLanguage === "English" ? questionEng : questionHr}</div>
                    {activeAccordion === frontendSlug &&
                      <div className="home_unauthenticated-faq-section-accordion-question-svg-active-container"><Plus/>
                      </div>}
                    {activeAccordion !== frontendSlug &&
                      <div className="home_unauthenticated-faq-section-accordion-question-svg-inactive-container">
                        <Plus/></div>}
                  </div>
                </div>
                {activeAccordion === frontendSlug && (
                  <div className="home_unauthenticated-faq-section-accordion-answer-container">
                    <div>{activeLanguage === "English" ? answerEngOne : answerHrOne}</div>
                    {handleAccordionSecondAnswerDivIfExists(answerEngTwo, answerEngOne, activeLanguage)}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="home_unauthenticated-faq-section-header-input-button-wrapper">
          <div className="home_unauthenticated-faq-section-header-content-container">
            {activeLanguage === "English" ? homeUnauthenticatedFormData?.faqSection?.headerContentEng : homeUnauthenticatedFormData?.faqSection?.subHeaderContentHr}
          </div>
          <div className="home_unauthenticated-faq-section-input-button-container">
            <div className="home_unauthenticated-faq-section-input-container">
              <input
                className={handleInputBorderClassName(homeUnauthenticatedFormData?.faqSection?.createMembershipInput.frontendSlug, fieldError, "home_unauthenticated-faq-section-input", query)}
                placeholder={activeLanguage === "English" ? homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.placeholderEng : homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.placeholderHr}
                type={homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.type}
                name={homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.name}
                onChange={(event) => handleChangeAndValidation(event?.target?.value, homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.frontendSlug, homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.validation, query, setQuery, fieldError, setFieldError)}
                value={handleInputValues(homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.frontendSlug, query)}
              />
              {handleFieldError(homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.frontendSlug, fieldError, homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.errorEng, homeUnauthenticatedFormData?.faqSection?.createMembershipInput?.errorHr, activeLanguage)}
            </div>
            <div className="home_unauthenticated-faq-section-button-container">
              {useHandleUserExistance(query, "home_unauthenticated-faq-section-button-title", "home_unauthenticated-faq-section-angle-container", homeUnauthenticatedFormData?.faqSection?.getStartedButton?.titleEng, homeUnauthenticatedFormData?.faqSection?.getStartedButton?.titleHr, fieldError, isFetchedUsers)}
            </div>
          </div>
        </div>
      </div>

    </StyledHomeUnauthenticatedFaqSection>
  )
}
