import React, { useState } from "react";

import { StyledContentDynamic } from "./styledContentDynamic";

import {
  handleActiveTrailer,
  matchObjectToRender,
  handleIconsToRender,
  handleButtonActions
} from "./helpers";

export default function ContentDynamic(props) {
  const {
    activeCategory,
    categorizedActivePageContent,
    setContentBeingWatched,
    setActiveContentModal,
  } = props;

  const [trailerActive, setTrailerActive] = useState(false);

  handleActiveTrailer(activeCategory, setTrailerActive);


  return (
    <StyledContentDynamic>
      <div className="active_content-img-video-container">
        <div className="active_content-image-container">
          {!trailerActive ? (
            <img
              src={
                matchObjectToRender(
                  categorizedActivePageContent,
                  activeCategory
                )?.image
              }
              alt={
                matchObjectToRender(
                  categorizedActivePageContent,
                  activeCategory
                )?.frontendSlug
              }
            />
          ) : (
            <video controls autoPlay loop>
              <source
                src={
                  matchObjectToRender(
                    categorizedActivePageContent,
                    activeCategory
                  )?.video
                }
                type="video/mp4"
              />
            </video>
          )}
          <div className="maturity-rating-container">
            {
              matchObjectToRender(categorizedActivePageContent, activeCategory)
                ?.contentData?.about?.maturityRating
            }
          </div>
          <div className="active_content-info-container">
            <div className="content-wrapper">
              <div className="active_content-info-title">
                {
                  matchObjectToRender(
                    categorizedActivePageContent,
                    activeCategory
                  )?.contentData?.nameEng
                }
              </div>
              <div className="active_content-info-desc">
                {
                  matchObjectToRender(
                    categorizedActivePageContent,
                    activeCategory
                  )?.contentData?.descEng
                }
              </div>
              <div className="active_content-buttons-container">
                {matchObjectToRender(
                  categorizedActivePageContent,
                  activeCategory
                )?.buttons?.map((el) => {
                  const { frontendSlug, labelEng, labelHr } = el;

                  console.log("FRONTEND_SLUG", frontendSlug)

                  return (
                    <div className={`${frontendSlug}-button`}>
                      <button
                        key={frontendSlug}
                        onClick={() => handleButtonActions(frontendSlug, activeCategory, setContentBeingWatched, categorizedActivePageContent, setActiveContentModal)}
                      >
                        <div className="button-icon-container">
                          {handleIconsToRender(frontendSlug)}
                        </div>
                        <div className="button-label">{labelEng}</div>
                      </button>
                      ;
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContentDynamic>
  );
}
