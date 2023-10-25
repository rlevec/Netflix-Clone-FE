import React, {useState} from "react";

import {StyledFooter} from "./styledFooter.js";

import {useLocation} from "react-router-dom";

import {useGetFooterFormDataQuery} from "../../Redux/Injections/FormGetRequests/getFooterFormDataQuery.js"
import {useSelector, useDispatch} from "react-redux";
import {setActiveLanguage} from "../../Redux/Slices/activeLanguageSlice.js";

import {ReactComponent as Globe} from "../../Assets/svg/globe.svg";
import {ReactComponent as CarretUp} from "../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../Assets/svg/carretDown.svg";

import {routes} from "../../Routes/routes.js";

import {useHandlePrefixRouteNavigator} from "./helpers.js";

export default function Footer() {
  const {
    data: isFetchedFooterFormData,
    isFetching: isFetchingFooterFormData,
    isLoading: isLoadingFooterFormData,
    isError: isErrorFooterFormData
  } = useGetFooterFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const dispatch = useDispatch()

  const location = useLocation()

  const pathName = location?.pathname

  const pathSplit = pathName?.split("/")

  const relativePath = pathSplit[pathSplit?.length - 1]

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name

  const [languageDropdownActive, setLanguageDropdownActive] = useState(false)

  useHandlePrefixRouteNavigator(relativePath)

  if (isFetchingFooterFormData || isLoadingFooterFormData) return <div>LOADING</div>
  else if (isErrorFooterFormData || !isFetchedFooterFormData) return <div>ERROR</div>
  else {
    return (
      <StyledFooter className="styledComponent-footer" languageDropdownActive={languageDropdownActive}
                    signupRouteActive={relativePath === routes?.clientRoutes?.staticSignUpRoute}>
        <div className="footer_wrapper">
          <div className="footer_questions-container">
            {activeLanguage === "English" ? isFetchedFooterFormData?.questions?.titleEng : isFetchedFooterFormData?.questions?.titleHr}
          </div>
          <div className="footer_content-container">
            {
              isFetchedFooterFormData?.content?.map((el) => {
                const {id, titleEng, titleHr, route} = el

                return (
                  <div className="footer_content-single-element-container" key={id}>
                    <div
                      className="footer_content-single-element">{activeLanguage === "English" ? titleEng : titleHr}</div>
                  </div>
                )
              })
            }
          </div>
          <div className="footer_custom-select-container">
            <div className="footer_custom-select-active"
                 onClick={() => setLanguageDropdownActive(!languageDropdownActive)}>
              <div className="footer_custom-select-active-svg-container">
                <Globe/></div>
              <div
                className="footer_custom-select-selected-language">{activeLanguage}</div>
              <div
                className="footer_custom-select-active-svg-container">{languageDropdownActive ?
                <CarretUp/> : <CarretDown/>}</div>
            </div>
            {languageDropdownActive && (
              <div className="footer_custom-select-dropdown">
                {isFetchedFooterFormData?.customInput?.options?.filter((el) => el?.title !== activeLanguage)?.map((el) => {
                  const {value, title} = el

                  return (
                    <div
                      className="footer_custom-select-dropdown-title-container"
                      key={value} onClick={() => {
                      dispatch(setActiveLanguage({activeLanguage: title}));
                      setLanguageDropdownActive(false);
                    }}>
                      <div>{title}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          <div className="footer_country-origin">
            {`Netflix ${geoLocationCountry || "USA"}`}
          </div>
        </div>
      </StyledFooter>
    )
  }
}