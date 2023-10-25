import React from "react";

import {StyledStepFour} from "./styledStepFour.js";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {ReactComponent as Checked} from "../../../../../../../../../../../../Assets/svg/checked.svg";

export default function StepFour(props) {

  const {
    renderContent,
    setActivePlan,
    activePlan
  } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  return (
    <StyledStepFour>
      <div className="step_four-wrapper">
        <div className="step_four-title-container">
          {activeLanguage === "English" ? renderContent[0]?.stepTitleEng : renderContent[0]?.stepTitleHr}
        </div>
        <div className="step_four-plan-container">
          {renderContent[0]?.planContent?.map((el) => {
            const {titleEng, titleHr, id} = el

            return (
              <div className="step_four-single-plan-container" key={id}>
                <div className="step_four-single-plan-checked-icon-container"><Checked/></div>
                <div
                  className="step_four-single-plan-checked-title-container">{activeLanguage === "English" ? titleEng : titleHr}</div>
              </div>
            )
          })}
        </div>
        <div className="step_four-header-container">
          {renderContent[0]?.planHeader?.map((el) => {
            const {frontendSlug, id, titleEng, titleHr} = el

            return (
              <div
                className={activePlan === frontendSlug ? "step_four-header-content-container-active" : "step_four-header-content-container"}
                key={id} onClick={() => setActivePlan(frontendSlug)}>
                {activeLanguage === "English" ? titleEng : titleHr}
              </div>
            )
          })}
        </div>
        <div className="step_four-table-container">
          {renderContent[0]?.tableContent?.rows?.map((el) => {
            const {content, id} = el

            return (
              <div key={id} className="step_four-table-content-container">
                {content?.map((el) => {
                  const {frontendSlug, titleEng, titleHr, title, categorySlug} = el

                  let contentToRender

                  if (frontendSlug?.includes("checkMark")) contentToRender =
                    <div className={categorySlug === activePlan ? "svg-container-active" : "svg-container"}><Checked/>
                    </div>
                  else contentToRender = <div
                    className={activePlan === categorySlug ? "step_four-table-single-text-content-container-active" : "step_four-table-single-text-content-container"}>{(activeLanguage === "English" ? titleEng : titleHr) || title}</div>
                  return <div className="step_four-table-single-content-container"
                              key={frontendSlug}>{contentToRender}</div>
                })}
              </div>
            )
          })}
        </div>
        <div className="step_four-info-contents-container">
          <div className="step_four-info-one-content-container">
            <span>{activeLanguage === "English" ? renderContent[0]?.infoOne?.paragraphOneEng : renderContent[0]?.infoOne?.paragraphOneHr}</span>
            <span> {activeLanguage === "English" ? renderContent[0]?.infoOne?.paragraphTwoEng : renderContent[0]?.infoOne?.paragraphTwoHr} </span>
            <span> <Link
              to={"/"}>{activeLanguage === "English" ? renderContent[0]?.infoOne?.paragraphThreeEng : renderContent[0]?.infoOne?.paragraphThreeHr}</Link> </span>
            <span>{activeLanguage === "English" ? renderContent[0]?.infoOne?.paragraphFourEng : renderContent[0]?.infoOne?.paragraphFourHr}</span>
          </div>
          <div className="step_four-info-two-content-container">
            <span>{activeLanguage === "English" ? renderContent[0]?.infoTwo?.paragraphOneEng : renderContent[0]?.infoTwo?.paragraphOneHr}</span>
          </div>
        </div>
      </div>
    </StyledStepFour>
  )
}