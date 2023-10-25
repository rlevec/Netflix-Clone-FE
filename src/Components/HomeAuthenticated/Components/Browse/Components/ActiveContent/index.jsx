import React, { useState } from "react";

import { StyledActiveContent } from "./styledActiveContent.js";

import { useSelector } from "react-redux";

import ContentGrid from "./Components/ContentGrid/index.jsx";
import ContentDynamic from "./Components/ContentDynamic/index.jsx";

export default function ActiveContent(props) {
  const {
    categorizedActivePageContent,
    activeCategory,
    contentDataToRender,
    activeAccountName,
    isFetchedUsersData,
    setContentBeingWatched,
    setActiveContentModal
  } = props;

  
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  

  if (
    activeCategory === "myList" &&
    !isFetchedUsersData[userEmail]?.accounts?.find(
      (el) => el?.accountName === activeAccountName
    )?.myList?.length
  )
    return (
      <StyledActiveContent>
        <div className="emtpy-list-warning-container">
         <div className="emtpy-list-warning-title">Your list is empty!</div>;
         <div className="emtpy-list-warning-desc">Please, add some content from the categories above to your list in order to display current page!</div>
        </div>
      </StyledActiveContent>
    ) 
  else {
    return (
      <StyledActiveContent>
        {activeCategory !== "myList" && (
          <ContentDynamic
          setContentBeingWatched={setContentBeingWatched}
            categorizedActivePageContent={categorizedActivePageContent}
            activeCategory={activeCategory}
            setActiveContentModal={setActiveContentModal}
          />
        )}
        <div className="active_content-grid-container">
          <ContentGrid
          setActiveContentModal={setActiveContentModal}
          setContentBeingWatched={setContentBeingWatched}
            isFetchedUsersData={isFetchedUsersData}
            activeAccountName={activeAccountName}
            contentDataToRender={contentDataToRender}
            activeCategory={activeCategory}
          />
        </div>
      </StyledActiveContent>
    );
  }
}
