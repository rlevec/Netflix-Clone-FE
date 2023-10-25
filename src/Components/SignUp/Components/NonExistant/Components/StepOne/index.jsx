import React from "react";

import {StyledStepOne} from "./styledStepOne.js";

import {useSelector} from "react-redux";
export default function StepOne(props) {
    const {
        data: {
            img,
            alt,
            stepTitleHr,
            stepTitleEng,
            stepDescSecondaryEng,
            stepDescSecondaryHr,
            stepDescHr,
            stepDescEng
        }
    } = props

    const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

    return (
        <StyledStepOne>
            <div className="step_one-content-img-container"><img src={img} alt={alt}/></div>
            <div className="step_one-content-title">{activeLanguage === "English" ? stepTitleEng : stepTitleHr}</div>
            <div className="step_one-content-desc-container">
                <div className="step_one-content-desc">{activeLanguage === "English" ? stepDescEng : stepDescHr}</div>
                <div
                    className="step_one-content-desc-sec">{activeLanguage === "English" ? stepDescSecondaryEng : stepDescSecondaryHr}</div>
            </div>
        </StyledStepOne>
    )
}