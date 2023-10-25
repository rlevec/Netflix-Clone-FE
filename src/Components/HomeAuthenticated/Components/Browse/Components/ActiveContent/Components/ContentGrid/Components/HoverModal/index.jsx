import React from "react";

import { StyledHoverModal } from "./styledHoverModal";

import { ReactComponent as ThumbsUp } from "../../../../../../../../../../Assets/svg/thumbsUp.svg";
import { ReactComponent as Plus } from "../../../../../../../../../../Assets/svg/ordinaryPlus.svg";
import { ReactComponent as Play } from "../../../../../../../../../../Assets/svg/play.svg";
import { ReactComponent as AngleDown } from "../../../../../../../../../../Assets/svg/angleDown.svg";
import { ReactComponent as AngleUp } from "../../../../../../../../../../Assets/svg/angleUp.svg";
import { ReactComponent as CheckMark } from "../../../../../../../../../../Assets/svg/checked.svg";

import { usePostUserProfileMyListMutation } from "../../../../../../../../../../Redux/Injections/UserPostRequests/postUserMyListData";
import { usePostUserProfileMyLikesMutation } from "../../../../../../../../../../Redux/Injections/UserPostRequests/postUserUpdateMyLikesData";
import { useRemoveUserProfileMyListContentMutation } from "../../../../../../../../../../Redux/Injections/UserPostRequests/postUserProfileRemoveMyListContent";
import { useRemoveUserProfileMyLikesContentMutation } from "../../../../../../../../../../Redux/Injections/UserPostRequests/postUserProfileRemoveMyLikesContent";

import { handleIsInMyLikes, handleIsInMyList, handleQuality } from "./helpers.js";

import { useSelector } from "react-redux";

export default function HoverModal(props) {
  const {
    data,
    data: {
      about: { director, cast, writers, maturityRating, maturityTags },
      frontendSlug,
      image,
      nameEng,
      nameHr,
      genres,
      isTrending,
      runTime: { hour, minutes },
      tags,
      productionYear,
      videoContent,
      trailer,
      descEng,
      descHr,
      imdbLink,
      seasons,
    },
    setHoveredContent,
    hoveredContent,
    activeAccountName,
    isFetchedUsersData,
    setContentBeingWatched,
    setActiveContentModal,
  } = props;

  const activeLanguage = useSelector(
    (state) => state?.activeLanguage?.activeLanguage
  );

  const userEmail = useSelector((state) => state?.userMail?.userMail);

  const [updateMyList] = usePostUserProfileMyListMutation();
  const [updateMyLikes] = usePostUserProfileMyLikesMutation();
  const [removeListContent] = useRemoveUserProfileMyListContentMutation();
  const [removesLikesContent] = useRemoveUserProfileMyLikesContentMutation();



  return (
    <StyledHoverModal
      onMouseLeave={() =>
        setHoveredContent({ ...hoveredContent, key: null, val: null })
      }
    >
      <div className="hover_modal-wrapper">
        <div className="hover_modal-img-container">
          <img
            className="hover_modal-img"
            src={image}
            alt={`${frontendSlug}-image`}
          />
        </div>
        <div className="hover_modal-content-container">
          <div className="hover_modal-content-actions-container">
            <div className="hover_modal-content-actions">
              <div
                className="svg-play-container"
                onClick={() => setContentBeingWatched(data?.videoContent)}
              >
                <Play />
              </div>
              <div
                className={
                  handleIsInMyList(
                    frontendSlug,
                    isFetchedUsersData,
                    userEmail,
                    activeAccountName
                  )
                    ? `svg-container-active`
                    : `svg-container`
                }
                onClick={() => {
                  if (
                    handleIsInMyList(
                      frontendSlug,
                      isFetchedUsersData,
                      userEmail,
                      activeAccountName
                    )
                  )
                    removeListContent({
                      accountName: activeAccountName,
                      email: userEmail,
                      activeLanguage,
                      data,
                    });
                  else
                    updateMyList({
                      email: userEmail,
                      activeLanguage,
                      initialAccountName: activeAccountName,
                      data,
                    });
                }}
              >
                {handleIsInMyList(
                  frontendSlug,
                  isFetchedUsersData,
                  userEmail,
                  activeAccountName
                ) ? (
                  <CheckMark />
                ) : (
                  <Plus />
                )}
              </div>
              <div
                className={
                  handleIsInMyLikes(
                    frontendSlug,
                    isFetchedUsersData,
                    userEmail,
                    activeAccountName
                  )
                    ? `svg-container-active`
                    : `svg-container`
                }
                onClick={() => {
                  if (
                    handleIsInMyLikes(
                      frontendSlug,
                      isFetchedUsersData,
                      userEmail,
                      activeAccountName
                    )
                  )
                    removesLikesContent({
                      accountName: activeAccountName,
                      email: userEmail,
                      activeLanguage,
                      data,
                    });
                  else
                    updateMyLikes({
                      email: userEmail,
                      activeLanguage,
                      initialAccountName: activeAccountName,
                      data,
                    });
                }}
              >
                <ThumbsUp />
              </div>
            </div>
            <div className="hover_modal-content-dropdown-trigger">
              <div
                className="svg-container"
                onClick={() => setActiveContentModal(data)}
              >
                <AngleDown />
              </div>
            </div>
          </div>
          <div className="hover_modal-content-semi-info-container">
            {isTrending && (
              <div className="hover_modal-content-trending">New</div>
            )}
            <div className="hover_modal-content-maturity-tag-container">
              {maturityRating}+
            </div>
            {!seasons ? (
              <div className="hover_modal-content-runtime-container">
                <div className="runtime">{hour}h</div>
                <div className="runtime">:</div>
                <div className="runtime">{minutes}m</div>
              </div>
            ) : (
              <div className="hover_modal-content-seasons-container">
                <div>{seasons?.length}</div>
                <div>{seasons?.length === 1 ? `season` : `seasons`}</div>
              </div>
            )}
            <div className="hover_modal-content-quality-container">{handleQuality(isFetchedUsersData, userEmail)}</div>
          </div>
          <div className="hover_modal-content-genres-container">
            {genres?.map((el) => {
              const { labelEng, labelHr, frontendSlug } = el;

              return (
                <div
                  key={frontendSlug}
                  className="hover_modal-content-single-genre-container"
                >
                  <div className="genre-label">{labelEng}</div>
                  <div className="genre-separator"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledHoverModal>
  );
}
