import React from "react";

import {StyledHomeUnauthenticatedKidsSection} from "./styledHomeUnauthenticatedKidsSection.js";

import {useSelector} from "react-redux";

export default function HomeUnauthenticatedKidsSection(props) {
    const {homeUnauthenticatedFormData} = props

    const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

    return (
        <StyledHomeUnauthenticatedKidsSection>
            <div className="home_unauthenticated-kids-section-wrapper">
                <div className="home_unauthenticated-kids-section-media-container">
                    <div className="home_unauthenticated-kids-section-media-image-container">
                        <img src={homeUnauthenticatedFormData?.fractionFive?.image} alt={homeUnauthenticatedFormData?.fractionFive?.imageAlt}/>
                    </div>
                </div>
                <div className="home_unauthenticated-kids-section-content-container">
                    <div className="home_unauthenticated-kids-section-content-title">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionFive?.headerEng : homeUnauthenticatedFormData?.fractionFive?.headerHr}</div>
                    <div className="home_unauthenticated-kids-section-content-subTitle">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionFive?.subHeaderEng : homeUnauthenticatedFormData?.fractionFive?.subHeaderHr}</div>
                </div>
            </div>
        </StyledHomeUnauthenticatedKidsSection>
    )
}