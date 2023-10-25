import React, {useState} from "react";

import {
  handleChangeAndValidation,
  handleFieldError,
  handleInputBorderClassName,
  handleInputValues,
  useHandleUserExistance,
} from "../../helpers.jsx";

import {handleFullPrefix} from "./helpers.js";


import {Link, Navigate, useNavigate} from "react-router-dom";

import {StyledHomeUnauthenticatedHeader} from "./styledHomeUnauthenticatedHeader.js";

import {ReactComponent as Logo} from "../../../../Assets/svg/logo.svg"
import {ReactComponent as Globe} from "../../../../Assets/svg/globe.svg";
import {ReactComponent as CarretUp} from "../../../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../../../Assets/svg/carretDown.svg";

import {setActiveLanguage} from "../../../../Redux/Slices/activeLanguageSlice.js";

import {routes} from "../../../../Routes/routes.js";

import {useDispatch, useSelector} from "react-redux";

export default function HomeUnauthenticatedHeader(props) {
  const {homeUnauthenticatedFormData, isFetchedUsers} = props

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const deviceType = useSelector((state) => state?.device?.device)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name

  const [languageDropdownActive, setLanguageDropdownActive] = useState(false)
  const [query, setQuery] = useState({email: ""})
  const [fieldError, setFieldError] = useState({email: false})




  return (
    <StyledHomeUnauthenticatedHeader languageDropdownActive={languageDropdownActive}
                                     backgroundImage={homeUnauthenticatedFormData?.fractionOne?.backgroundImage}>
      <div className="home_unauthenticated-header-logo-custom-select-container">
        <div className="home_unauthenticated-header-logo-container">
          <Logo/>
        </div>
        <div className="home_unauthenticated-header-custom-select-sign-in-container">
          <div className="home_unauthenticated-header-custom-select-container">
            <div className="home_unauthenticated-header-custom-select-active"
                 onClick={() => setLanguageDropdownActive(!languageDropdownActive)}>
              <div className="home_unauthenticated-header-custom-select-active-svg-container">
                <Globe/></div>
              <div
                className="home_unauthenticated-header-custom-selected-language">{deviceType === "phonePortrait" ? activeLanguage?.slice(0, 2) : activeLanguage}</div>
              <div
                className="home_unauthenticated-header-custom-select-active-svg-container">{languageDropdownActive ?
                <CarretUp/> : <CarretDown/>}</div>
            </div>
            {languageDropdownActive && (
              <div className="home_unauthenticated-header-custom-select-dropdown">
                {homeUnauthenticatedFormData?.fractionOne?.customInput?.options?.filter((el) => activeLanguage !== el?.title)?.map((el) => {
                  const {value, title} = el

                  return (
                    <div
                      className="home_unauthenticated-header-custom-select-dropdown-title-container"
                      key={value} onClick={() => {
                      dispatch(setActiveLanguage({activeLanguage: title}));
                      setLanguageDropdownActive(false);
                    }}>
                      <div>{deviceType === "phonePortrait" ? title?.slice(0, 2) : title}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          <div className="home_unauthenticated-header-sign-in-container">
            <Link to={routes?.clientRoutes?.staticLoginRoute}>
              <button>{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionOne?.signInButton?.titleEng : homeUnauthenticatedFormData?.fractionOne?.signInButton?.titleHr}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home_unauthenticated-header-content-input-container">
        <div className="home_unauthenticated-header-content-container">
          <div
            className="home_unauthenticated-header-header">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionOne?.headerEng : homeUnauthenticatedFormData?.fractionOne?.headerHr}</div>
          <div
            className="home_unauthenticated-header-subHeader">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionOne?.subHeaderEng : homeUnauthenticatedFormData?.fractionOne?.subHeaderHr}</div>
          <div
            className="home_unauthenticated-header-content">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionOne?.contentEng : homeUnauthenticatedFormData?.fractionOne?.contentHr}</div>
        </div>
        <div className="home_unauthenticated-header-input-button-container">
          <div className="home_unauthenticated-header-input-container">
            <input
              className={handleInputBorderClassName(homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.frontendSlug, fieldError, "home_unauthenticated-header-input", query)}
              placeholder={activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.placeholderEng : homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.placeholderHr}
              type={homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.type}
              name={homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.name}
              onChange={(event) => handleChangeAndValidation(event?.target?.value, homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.frontendSlug, homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.validation, query, setQuery, fieldError, setFieldError)}
              value={handleInputValues(homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.frontendSlug, query)}
            />
            {handleFieldError(homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.frontendSlug, fieldError, homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.errorEng, homeUnauthenticatedFormData?.fractionOne?.createMembershipInput?.errorHr, activeLanguage)}
          </div>
          <div className="home_unauthenticated-header-button-container">
            {useHandleUserExistance(query, "home_unauthenticated-header-button-title", "home_unauthenticated-header-angle-container", homeUnauthenticatedFormData?.fractionOne?.getStartedButton?.titleEng, homeUnauthenticatedFormData?.fractionOne?.getStartedButton?.titleHr, fieldError, isFetchedUsers)}
          </div>
        </div>
      </div>
    </StyledHomeUnauthenticatedHeader>
  )
}