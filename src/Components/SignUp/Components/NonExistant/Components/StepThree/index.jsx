import React from "react";

import {StyledStepThree} from "./styledStepThree.js";

import {ReactComponent as Checked} from "../../../../../../Assets/svg/checked.svg";

import {useSelector} from "react-redux";

export default function StepThree(props) {
    const {
      data: {
        planContent,
        stepTitleEng,
        stepTitleHr
      }
    } = props

    const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

    return (
        <StyledStepThree>
            <div className="step_three-checked-icon-container">
                <Checked/>
            </div>
            <div className="step_three-title-container">
                {activeLanguage === "English" ? stepTitleEng : stepTitleHr}
            </div>
            <div className="step_three-checked-content-container">
                {planContent?.map((el) => {
                    const {id, titleHr, titleEng} = el

                    return (
                        <div key={id} className="step_three-checked-single-content-container">
                            <div className="step_three-checked-single-content-checked-icon-container">
                                <Checked/>
                            </div>
                            <div className="step_three-checked-single-content-label-container">{activeLanguage === "English" ? titleEng : titleHr}</div>
                        </div>
                    )
                })}
            </div>
        </StyledStepThree>
    )
}