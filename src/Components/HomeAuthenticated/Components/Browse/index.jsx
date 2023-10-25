import React, { useState } from "react";

import { StyledBrowse } from "./styledBrowse.js";

import Header from "./Components/Header/index.jsx";
import ActiveContent from "./Components/ActiveContent/index.jsx";
import Account from "./Components/Header/Components/Account/index.jsx";
import Footer from "../../../Footer/index.jsx";
import ProfileTransfer from "./Components/Header/Components/ProfileTransfer/index.jsx";
import MediaPlayer from "../MediaPlayer/index.jsx";

import { filterUserContentByCategory } from "./helpers.js";

import { useSelector } from "react-redux";
import ContentModal from "./Components/ContentModal/index.jsx";

export default function Browse(props) {
  const {
    browseData: { header, categorizedActivePageContent, errorMap },
    browseProfileActive,
    setBrowseProfileActive,
    isFetchedUsersData,
    editableProfileImages,
    profileImages,
    setActiveForm,
    isFetchedAccountFormData,
    isFetchedProfileTransferFormData,
    isFetchedWatchableContentFormData,
  } = props;

  const [activeCategory, setActiveCategory] = useState("home");
  const [activeAccountName, setActiveAccountName] =
    useState(browseProfileActive);
  const [activeSubComponent, setActiveSubComponent] = useState(null);
  const [contentBeingWatched, setContentBeingWatched] = useState(null);
    const [activeContentModal, setActiveContentModal] = useState(null)

  const userEmail = useSelector((state) => state?.userMail?.userMail);

  console.log("activeContentModal", activeContentModal)


  if (activeSubComponent === "account") {
    return (
      <Account
        setBrowseProfileActive={setBrowseProfileActive}
        setActiveAccountName={setActiveAccountName}
        errorMap={errorMap}
        setActiveSubComponent={setActiveSubComponent}
        isFetchedAccountFormData={isFetchedAccountFormData}
        isFetchedUsersData={isFetchedUsersData}
        profileImages={profileImages}
        editableProfileImages={editableProfileImages}
      />
    );
  } else if (activeSubComponent === "transferProfile") {
    return (
      <ProfileTransfer
        isFetchedProfileTransferFormData={isFetchedProfileTransferFormData}
        setActiveSubComponent={setActiveSubComponent}
        isFetchedUsersData={isFetchedUsersData}
        profileImages={profileImages}
        editableProfileImages={editableProfileImages}
      />
    );
  } else {
    if (contentBeingWatched) return <MediaPlayer contentBeingWatched={contentBeingWatched} setContentBeingWatched={setContentBeingWatched}/> 
    else {
      return (
        <StyledBrowse>
          {activeContentModal && <ContentModal contentDataToRender={isFetchedWatchableContentFormData} activeContentModal={activeContentModal} setActiveContentModal={setActiveContentModal} activeAccountName={activeAccountName} isFetchedUsersData={isFetchedUsersData} setContentBeingWatched={setContentBeingWatched}/>}
          <Header
            isFetchedAccountFormData={isFetchedAccountFormData}
            isFetchedProfileTransferFormData={isFetchedProfileTransferFormData}
            header={header}
            setBrowseProfileActive={setBrowseProfileActive}
            isFetchedUsersData={isFetchedUsersData}
            editableProfileImages={editableProfileImages}
            profileImages={profileImages}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeAccountName={activeAccountName}
            setActiveAccountName={setActiveAccountName}
            setActiveForm={setActiveForm}
            activeSubComponent={activeSubComponent}
            setActiveSubComponent={setActiveSubComponent}
          />
          {activeCategory && (
            <ActiveContent
            setActiveContentModal={setActiveContentModal}
              setContentBeingWatched={setContentBeingWatched}
              activeAccountName={activeAccountName}
              isFetchedUsersData={isFetchedUsersData}
              browseProfileActive={browseProfileActive}
              contentDataToRender={filterUserContentByCategory(
                activeCategory,
                isFetchedWatchableContentFormData,
                activeAccountName,
                isFetchedUsersData,
                userEmail
              )}
              categorizedActivePageContent={categorizedActivePageContent}
              activeCategory={activeCategory}
            />
          )}
          <Footer />
        </StyledBrowse>
      );
    }
  }
}
