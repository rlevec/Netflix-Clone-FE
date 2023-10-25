import React from "react";
import { StyledContentModal } from "./styledContentModal";
import { ReactComponent as Close } from "../../../../../../Assets/svg/close.svg";
import { ReactComponent as Play } from "../../../../../../Assets/svg/play.svg";
import { ReactComponent as Plus } from "../../../../../../Assets/svg/plus.svg";
import { ReactComponent as ThumbsUp } from "../../../../../../Assets/svg/thumbsUp.svg";
import { ReactComponent as CheckMark } from "../../../../../../Assets/svg/checked.svg";

import { useSelector } from "react-redux";

import { usePostUserProfileMyLikesMutation } from "../../../../../../Redux/Injections/UserPostRequests/postUserUpdateMyLikesData";
import { usePostUserProfileMyListMutation } from "../../../../../../Redux/Injections/UserPostRequests/postUserMyListData";
import { useRemoveUserProfileMyLikesContentMutation } from "../../../../../../Redux/Injections/UserPostRequests/postUserProfileRemoveMyLikesContent";
import { useRemoveUserProfileMyListContentMutation } from "../../../../../../Redux/Injections/UserPostRequests/postUserProfileRemoveMyListContent";

import { handleIsInMyList, handleIsInMyLikes, generateDataByGenre, handleQuality } from "./helpers";

export default function ContentModal(props) {
  const {
    setActiveContentModal,
    isFetchedUsersData,
    activeAccountName,
    setContentBeingWatched,
    activeContentModal,
    activeContentModal: {
      about: { director, cast, writers, maturityRating, maturityTags },
      descEng,
      descHr,
      genres,
      imdbLink,
      isTrending,
      nameEng,
      nameHr,
      productionYear,
      frontendSlug,
      image,
      runTime: { hour, minutes },
      trailer,
      seasons,
      videoContent,
      tags,
    },
    contentDataToRender,
  } = props;

  

  const [updateMyList] = usePostUserProfileMyListMutation();
  const [updateMyLikes] = usePostUserProfileMyLikesMutation();
  const [removeListContent] = useRemoveUserProfileMyListContentMutation();
  const [removesLikesContent] = useRemoveUserProfileMyLikesContentMutation();

  const activeLanguage = useSelector(
    (state) => state?.activeLanguage?.activeLanguage
  );

  const userEmail = useSelector((state) => state?.userMail?.userMail);

  return (
    <StyledContentModal>
      <div className="modal-container">
        <div
          className="close-icon-container"
          onClick={() => setActiveContentModal(null)}
        >
          <Close />
        </div>
        <div className="modal-content">
          <div className="modal-image-container">
            <img src={image} alt={`${frontendSlug}-image`} />
            <div className="modal-img-actions-container">
              <div className="actions">
                <div
                  className="svg-play-container"
                  onClick={() => setContentBeingWatched(videoContent)}
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
                        data: activeContentModal,
                      });
                    else
                      updateMyList({
                        email: userEmail,
                        activeLanguage,
                        initialAccountName: activeAccountName,
                        data: activeContentModal,
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
                        data: activeContentModal,
                      });
                    else
                      updateMyLikes({
                        email: userEmail,
                        activeLanguage,
                        initialAccountName: activeAccountName,
                        data: activeContentModal,
                      });
                  }}
                >
                  <ThumbsUp />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-content-info-container">
            <div className="modal-content-specs-container">
              {isTrending && (
                <div className="modal-content-trending-container">New</div>
              )}
              <div className="modal-content-production-year-container">
                {productionYear}
              </div>
              <div className="modal-content-runtime-container">
                {seasons?.length ? (
                  <>
                    <div className="modal-content-runtime">Seasons: </div>
                    <div className="modal-content-runtime">
                      {seasons?.length}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="modal-content-runtime">{hour}h</div>
                    <div className="modal-content-runtime">:</div>
                    <div className="modal-content-runtime">{minutes}m</div>
                  </>
                )}
              </div>
              <div className="modal-content-quality">{handleQuality(isFetchedUsersData, userEmail)}</div>
            </div>
            <div className="modal-content-maturity-container">
              <div className="modal-content-maturity-rating">
                {maturityRating}+
              </div>
              <div className="modal-content-maturity-tags-container">
                {maturityTags?.map((el) => {
                  const { labelEng } = el;

                  return (
                    <div className="modal-content-single-maturity-rating">
                      <div className="maturity-label">{labelEng}</div>
                      <div className="maturity-separator">,</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-content-cast-container">
              <div className="modal-content-cast-label">Cast:</div>
              <div className="modal-content-cast-content">
                {cast?.map((el) => {
                  return (
                    <div key={el} className="modal-content-cast-single-content">
                      <div className="label">{el}</div>
                      <div className="separator">,</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-content-genres-container">
              <div className="modal-content-genres-label">Cast:</div>
              <div className="modal-content-genres-content">
                {genres?.map((el) => {
                  const { frontendSlug, labelEng } = el;

                  return (
                    <div
                      key={frontendSlug}
                      className="modal-content-genres-single-content"
                    >
                      <div className="label">{labelEng}</div>
                      <div className="separator">,</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-content-desc-container">{descEng}</div>
          </div>
          {seasons?.length ? (
            <div className="modal-content-episodes-container">
              <div className="label">Episodes</div>
              <div className="episodes-wrapper">
                {seasons?.map((item) => {

                  console.log("item", item)
                  return item?.map((element) => {
                    const { episodes } = element;

                    return episodes?.map((ep) => {
                      console.log("ep", ep);

                      const {
                        id,
                        english_title,
                        english_description,
                        image,
                        videoContent,
                      } = ep;

                      return (
                        <div
                          className="single-ep-element-container"
                          key={id}
                          onClick={() => setContentBeingWatched(videoContent)}
                        >
                          <div className="ep-number">{id}</div>
                          <div className="ep-image-info-container">
                            <img src={image} />
                            <div className="info">
                              <div className="title-runtime">
                                <div className="title">{english_title}</div>
                                <div className="runtime">
                                  {Math.floor(Math.random() * (59 - 20 + 1)) +
                                    20}
                                  m
                                </div>
                              </div>
                              <div className="desc">{english_description}</div>
                            </div>
                          </div>
                        </div>
                      );
                    });
                  });
                })}
              </div>
            </div>
          ) : null}
          <div className="modal-content-more-like-this-container">
            <div className="label">More like this</div>
            <div className="modal-content-more-like-this-wrapper">
              {generateDataByGenre(contentDataToRender, genres)
                ?.slice(0, 11)
                ?.map((el) => {
                  const { image, frontendSlug: contentSlug, videoContent } = el;

                  if (activeContentModal?.frontendSlug === contentSlug)
                    return null;
                  else {
                    return (
                      <div className="modal-content-more-like-this-single">
                        <img src={image} />
                        <div className="modal-img-actions-container">
                          <div className="actions">
                            <div
                              className="svg-play-container"
                              onClick={() =>
                                setContentBeingWatched(videoContent)
                              }
                            >
                              <Play />
                            </div>
                            <div
                              className={
                                handleIsInMyList(contentSlug)
                                  ? `svg-container-active`
                                  : `svg-container`
                              }
                              onClick={() => {
                                if (handleIsInMyList(contentSlug))
                                  removeListContent({
                                    accountName: activeAccountName,
                                    email: userEmail,
                                    activeLanguage,
                                    data: el,
                                  });
                                else
                                  updateMyList({
                                    email: userEmail,
                                    activeLanguage,
                                    initialAccountName: activeAccountName,
                                    data: el,
                                  });
                              }}
                            >
                              {handleIsInMyList(contentSlug) ? (
                                <CheckMark />
                              ) : (
                                <Plus />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <div className="modal-content-about-this-container">
            <div className="header">
              <div className="header-info">About</div>
              <div className="header-label">{nameEng}</div>
            </div>
            <div className="info">
              <div className="director">
                <div className="label">Director:</div>
                <div className="value">{director}</div>
              </div>
              {writers?.length ? (
                <div className="writers">
                  <div className="label">Writers:</div>
                  <div className="values-container">
                    {writers?.map((el, idx) => {
                      return (
                        <div key={idx} className="single-value-container">
                          <div className="value">{el}</div>
                          <div className="separator">,</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
              <div className="genres">
                <div className="label">Genres:</div>
                <div className="values-container">
                  {genres?.map((el) => {
                    const { labelEng, frontendSlug } = el;

                    return (
                      <div
                        className="single-value-container"
                        key={frontendSlug}
                      >
                        <div className="value">{labelEng}</div>
                        <div className="separator">,</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {tags?.length ? (
                <div className="tags">
                  <div className="label">
                    {seasons?.length ? `This show has:` : `This movie has:`}
                  </div>
                  <div className="values-container">
                    {tags?.map((el) => {
                      const { frontendSlug, labelEng } = el;

                      return (
                        <div
                          className="single-value-container"
                          key={frontendSlug}
                        >
                          <div className="value">{labelEng}</div>
                          <div className="separator">,</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
              <div className="maturity">
                <div className="label">Maturity rating:</div>
                <div className="maturity-value">{maturityRating}+</div>
                <div className="values-container">
                  {maturityTags?.map((el) => {
                    const { id, frontendSlug, labelEng } = el;

                    return (
                      <div
                        className="single-value-container"
                        key={frontendSlug}
                      >
                        <div className="value">{labelEng}</div>
                        <div className="separator">,</div>
                      </div>
                    );
                  })}
                  <div className="recommended">
                    {maturityRating === 0
                      ? `Recommended for all ages`
                      : `Recommended for ages ${maturityRating} and up`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContentModal>
  );
}
