import { useCallback, useEffect } from "react";

const sliceStepValue = 1;
const sliderInitialSliceStartValue = 0;

const sliceParametersByDevice = (device) => {
  if (device === "2kMonitor") return { startSlice: 0, endSlice: 8 };
  else if (device === "laptopBigScreen") return { startSlice: 0, endSlice: 6 };
  else if (device === "laptopSmallScreen") return { startSlice: 0, endSlice: 4 };
  else return { startSlice: 0, endSlice: 8 };
};

export const useHandleUniqueGenresAndStateValueSlice = (
  contentDataToRender,
  device,
  setSliceValue,
  activeCategory
) => {
  const handleUniqueGenresAndStateValueSliceCallback = useCallback(() => {
    const extractedAllGenres = [];
    contentDataToRender?.forEach((element) => {

      element?.genres?.forEach((item) => {
        extractedAllGenres?.push(item);
      });
    });

    let uniqueValues = [];
    let newUniqueValues = [];

    extractedAllGenres.forEach((item) => {
      const frontendSlug = item["frontendSlug"];
      if (!uniqueValues.includes(frontendSlug)) {
        uniqueValues.push(frontendSlug);
        newUniqueValues.push(item);
      }
    });

    const newStateSliceValue = newUniqueValues.map((el) => {
      const { frontendSlug } = el;

      return {
        frontendSlug,
        start: sliceParametersByDevice(device)?.startSlice,
        end: sliceParametersByDevice(device)?.endSlice,
      };
    });


    setSliceValue([...newStateSliceValue]);
  }, [activeCategory]);

  useEffect(() => {
    handleUniqueGenresAndStateValueSliceCallback();
  }, [handleUniqueGenresAndStateValueSliceCallback]);
};

export const useHandleContentToRender = (
  contentDataToRender,
  sliceValue,
  setContentToRender,
  activeSlug,
  activeCategory
) => {


  //if clicked genre matches slice value slug, extract sliceValue?.end for that slug and use it as useEffect dependency
  //else stringify whole state object (first render)
  const generateDependency =
    sliceValue?.find((el) => el?.frontendSlug === activeSlug)?.end ||
    JSON?.stringify(sliceValue);

  const handleContentToRenderCallback = useCallback(() => {
    const allGenres = [];

    contentDataToRender?.forEach((el) => {
      el?.genres?.forEach((genre) => {
        const { frontendSlug: genreFrontendSlug } = genre;
        allGenres?.push({ [genreFrontendSlug]: [] });
      });
    });

    const contentToRender = [];

    let uniqueKeysAlt = [];
    allGenres?.forEach((genreContent) => {
      const keys = Object.keys(genreContent);

      keys.forEach((key) => {
        if (uniqueKeysAlt.includes(key)) return;
        else {
          uniqueKeysAlt.push(key);
          contentToRender.push({ [key]: [] });
        }
      });
    });

    contentToRender?.forEach((el) => {
      Object.entries(el).forEach(([key, val]) => {
        contentDataToRender?.forEach((data) => {

          data?.genres?.forEach((genre) => {
            const { frontendSlug } = genre;

            if (frontendSlug === key) val?.push(data);
          });
        });
      });
    });

    let newUniqueValues = [];

    contentToRender?.forEach((el) => {
      Object?.entries(el)?.forEach(([key, val]) => {
        const matchStateObject = sliceValue?.find(
          (el) => el?.frontendSlug === key
        );
        if (!!matchStateObject) {
          let start = matchStateObject?.start;
          let end = matchStateObject?.end;

          if (Array.isArray(val)) {
            val = val.slice(start, end);
            newUniqueValues?.push({ [key]: val });
          }
        }
      });
    });


    setContentToRender(newUniqueValues);
  }, [generateDependency, activeCategory]);

  useEffect(() => {
    handleContentToRenderCallback();
  }, [handleContentToRenderCallback]);
};




export const handleSliderRightAction = (
  contentDataToRender,
  frontendSlug,
  sliceValue,
  setSliceValue
) => {
  let limitCount = 0;

  contentDataToRender?.forEach((el) => {
    const { genres } = el;

    genres?.forEach((genre) => {
      if (genre?.frontendSlug === frontendSlug) limitCount++;
    });
  });

  const newSliceStateValue = sliceValue?.map((el) => {
    if (frontendSlug === el?.frontendSlug) {
      if (limitCount < el?.end) {
        return {
          ...el,
          start: el?.start,
          end: el?.end,
        };
      } else if (el?.end === limitCount) {
        return {
          ...el,
          start: el?.start,
          end: limitCount,
        };
      } else {
        return {
          ...el,
          start: el?.start + sliceStepValue,
          end: el?.end + sliceStepValue,
        };
      }
    } else return el;
  });
  setSliceValue(newSliceStateValue);
};

export const handleSliderLeftAction = (
  frontendSlug,
  sliceValue,
  setSliceValue,
  device
) => {
  const newSliceStateValue = sliceValue?.map((el) => {
    if (frontendSlug === el?.frontendSlug) {
      if (el?.start === sliderInitialSliceStartValue) {
        return {
          ...el,
          start: sliderInitialSliceStartValue,
          end: sliceParametersByDevice(device)?.endSlice,
        };
      } else {
        return {
          ...el,
          start: el?.start - sliceStepValue,
          end: el?.end - sliceStepValue,
        };
      }
    } else return el;
  });
  setSliceValue(newSliceStateValue);
};
