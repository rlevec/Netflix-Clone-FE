import React, { useState } from "react";

import { StyledContentGrid } from "./styledContentGrid";

import { ReactComponent as AngleLeft } from "../../../../../../../../Assets/svg/angleLeft.svg";
import { ReactComponent as AngleRight } from "../../../../../../../../Assets/svg/angleRight.svg";

import HoverModal from "./Components/HoverModal";

import {
  useHandleUniqueGenresAndStateValueSlice,
  useHandleContentToRender,
  handleSliderLeftAction,
  handleSliderRightAction,
} from "./helpers";

import { useSelector } from "react-redux";

export default function ContentGrid(props) {
  const { contentDataToRender, activeCategory, activeAccountName, isFetchedUsersData, setContentBeingWatched, setActiveContentModal} = props;

  const device = useSelector((state) => state?.device?.device);

  const [contentToRender, setContentToRender] = useState([]);
  const [sliceValue, setSliceValue] = useState([]);
  const [activeSlug, setActiveSlug] = useState(null);
  const [hoveredContent, setHoveredContent] = useState(null);

  useHandleUniqueGenresAndStateValueSlice(
    contentDataToRender,
    device,
    setSliceValue,
    activeCategory
  );

  useHandleContentToRender(
    contentDataToRender,
    sliceValue,
    setContentToRender,
    activeSlug,
    activeCategory
  );


  return (
    <StyledContentGrid>
      {contentToRender?.map((el) => {
        return Object.entries(el)?.map(([key, val]) => {
          return (
            <div key={key} className="content_grid-single-section-container">
              <div className="content_grid-single-section-genre-title-arrows-container">
                <div className="content_grid-single-section-genre-title">
                  {
                    val[0]?.genres?.find((el) => el?.frontendSlug === key)
                      ?.labelEng
                  }
                </div>
                <div className="content_grid-single-section-arrows-container">
                  <div
                    className="content_grid-single-section-arrow-container"
                    onClick={() => {
                      setActiveSlug(key);
                      handleSliderLeftAction(
                        key,
                        sliceValue,
                        setSliceValue,
                        device
                      );
                    }}
                  >
                    <AngleLeft />
                  </div>
                  <div
                    className="content_grid-single-section-arrow-container"
                    onClick={() => {
                      setActiveSlug(key);
                      handleSliderRightAction(
                        contentDataToRender,
                        key,
                        sliceValue,
                        setSliceValue
                      );
                    }}
                  >
                    <AngleRight />
                  </div>
                </div>
              </div>
              <div className="content_grid-single-section-images-container">
                {val?.map((el) => {
                    return (
                      <div className="content_grid-single-content-value-container">
                        <img
                          src={el?.image}
                          onMouseEnter={() => setHoveredContent({key: key, val: el?.frontendSlug})}
                        />
                        {(el?.frontendSlug === hoveredContent?.val && key === hoveredContent?.key) && <HoverModal setActiveContentModal={setActiveContentModal} setContentBeingWatched={setContentBeingWatched} data={el} setHoveredContent={setHoveredContent} hoveredContent={hoveredContent} isFetchedUsersData={isFetchedUsersData} activeAccountName={activeAccountName}/>}
                      </div>
                    );
                })}
              </div>
            </div>
          );
        });
      })}
    </StyledContentGrid>
  );
}
