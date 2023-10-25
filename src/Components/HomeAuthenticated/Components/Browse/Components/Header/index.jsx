import React, {useState} from "react";

import {StyledHeader} from "./styledHeader.js";

import {ReactComponent as Logo} from "../../../../../../Assets/svg/logo.svg";
import {ReactComponent as Search} from "../../../../../../Assets/svg/search.svg";
import {ReactComponent as CarretDown} from "../../../../../../Assets/svg/carretDown.svg";
import {ReactComponent as CarretUp} from "../../../../../../Assets/svg/carretUp.svg";


import {useSelector} from "react-redux";
import {usePostUserLogoutMutation} from "../../../../../../Redux/Injections/UserPostRequests/postUserLogout.js"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import { routes } from "../../../../../../Routes/routes.js";

import {
  handleActiveProfileImage,
  renderExistingProfiles,
  handleProfileImages,
  handleSvgToRender,
  handleControlsClickEvents,
  handleUserLogout,
  handleFullPrefix
} from "./helpers.jsx";


export default function Header(props) {
  const {
    header: {
      categories,
      controls,
      logout,
      searchInput
    },
    isFetchedUsersData,
    editableProfileImages,
    profileImages,
    activeCategory,
    setActiveCategory,
    activeAccountName,
    setActiveAccountName,
    setActiveForm,
    setActiveSubComponent,
  } = props


  const [logoutUser] = usePostUserLogoutMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [searchActive, setSearchActive] = useState(false)
  const [dropdownActive, setDropdownActive] = useState(false)

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name



  return (
    <StyledHeader>
      <div className="header_wrapper">
        <div className="header_logo-categories-container">
          <div className="header_logo-container" onClick={() => navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticLoginHelpRoute}`, {replace: false})}>
            <Logo/>
          </div>
          <div className="header_categories-container">
            {categories?.map((el) => {
              const {
                frontendSlug,
                id,
                titleEng,
                titleHr
              } = el

              return (
                <div
                  className={frontendSlug === activeCategory ? "header_category active" : "header_category"}
                  key={id}
                  onClick={() => {
                    if (frontendSlug === activeCategory) return null
                    else setActiveCategory(frontendSlug)
                  }
                  }
                >
                  {activeLanguage === "English" ? titleEng : titleHr}
                </div>
              )
            })}
          </div>
        </div>
        <div className="header_search-controls-container">
          <div className="header_search-container">
            <div
              className="header_search-container-icon"
              onClick={() => setSearchActive(true)}
            >
              <Search/>
            </div>
            {searchActive &&
              (
                <div className="header_search-input-container">
                  <input
                    type={"search"}
                    name={searchInput?.name}
                    placeholder={activeLanguage === "English" ? searchInput?.placeholderEng : searchInput?.placeholderHr}
                  />
                </div>
              )
            }
          </div>
          <div
            className="header_controls-container"
          >
            <div className="header_controls-img-container">
              <img
                src={handleActiveProfileImage(isFetchedUsersData, userEmail, editableProfileImages, profileImages, activeAccountName)}
                alt={"profile-image"}/>
            </div>
            <div className="header_controls-profile-container" onClick={() => setDropdownActive(!dropdownActive)}>
              {dropdownActive ? <CarretDown/> : <CarretUp/>}
            </div>
            {dropdownActive &&
              (
                <div
                  className="header_controls-dropdown-wrapper"
                >
                  <div className="header_profiles-container">
                    {renderExistingProfiles(isFetchedUsersData, userEmail)?.map((el) => {
                      const {
                        accountName,
                        imageSlug,
                        image
                      } = el

                      return (
                        <div
                          className="header_profile-content"
                          key={accountName}
                        >
                          <div className="header_profile-img-name-container">
                            <img
                              src={handleProfileImages(isFetchedUsersData, userEmail, editableProfileImages, profileImages, accountName, image, imageSlug)}
                              alt="profile_img"/>
                            <div
                              className="header_profile-name"
                              onClick={() => {
                                setActiveAccountName(accountName)
                                setDropdownActive(false)
                              }
                              }
                            >
                              {accountName}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="header_controls-container">
                    {controls?.map((el) => {
                      const {
                        id,
                        frontendSlug,
                        titleEng,
                        titleHr
                      } = el

                      return (
                        <div className="header_controls-content">
                          <div className="header_controls-svg-name-container">
                            <div className="header_controls-svg-container">
                              {handleSvgToRender(frontendSlug)}
                            </div>
                            <div
                              className="header_controls-profile-name"
                              onClick={() => handleControlsClickEvents(frontendSlug, setActiveForm, setActiveSubComponent)}
                            >
                              {activeLanguage === "English" ? titleEng : titleHr}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="header_logout-container">
                    <div
                      className="header_logout"
                      onClick={() => handleUserLogout(logoutUser, userEmail, activeLanguage, dispatch, navigate)}
                    >
                      {activeLanguage === "English" ? logout?.titleEng : logout?.titleHr}
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}