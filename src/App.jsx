import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setGeoLocation } from "./Redux/Slices/geoLocationSlice.js";

import { RouterProvider } from "react-router-dom";

import "./variables.css";

import { router } from "./Router/index.jsx";
import { setDevice } from "./Redux/Slices/deviceSlice.js";

const fallbackInnerStylesAndContent = (type) => {
  if (type === "parent") {
    return {
      width: "100vw",
      height: "100vh",
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      outline: "2.5px solid black",
      outlineOffset: "-15px"
    };
  } else if (type === "child") {
    return {
      fontSize: "2.75vw",
      fontWeight: 600,
      color: "rgb(229, 9, 20)",
      textShadow: "1.5px 1.5px rgba(128,128,128,1)",
      boxShadow: "0px 0px 25px 15px rgba(229,9,20,1)",
      padding: "7.5vw"
    };
  }
  else if(type === "content") return "Application disabled for mobile / tablet device..."
  else return null
};

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //Generate geoLocationInfo by IP address to set country name in footer.
    //Fallback to USA as country_name property value if response invalid or error in Promise catch
    const getGeoInfo = () => {
      fetch("https://ipapi.co/json/")
        .then((response) => {
          if (!response.ok) {
            dispatch(
              setGeoLocation({
                geoLocation: {
                  ip: null,
                  country_name: "USA",
                  country_calling_code: null,
                  city: null,
                  timezone: null,
                },
              })
            );
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          dispatch(
            setGeoLocation({
              geoLocation: {
                ip: data.ip,
                country_name: data.country_name,
                country_calling_code: data.country_calling_code,
                city: data.city,
                timezone: data.timezone,
              },
            })
          );
        })
        .catch((error) => {
          dispatch(
            setGeoLocation({
              geoLocation: {
                ip: null,
                country_name: "USA",
                country_calling_code: null,
                city: null,
                timezone: null,
              },
            })
          );
        });
    };
  }, []);

  useEffect(() => {
    if (window && window.innerWidth) {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;

      if (window.innerWidth < 625 && window.innerWidth > 0 && isPortrait)
        dispatch(setDevice({ device: "phonePortrait" }));
      else if (
        window.innerWidth >= 625 &&
        window.innerWidth <= 1400 &&
        isPortrait
      )
        dispatch(setDevice({ device: "tabletPortrait" }));
      else if (window.innerWidth < 1400)
        dispatch(setDevice({ device: "laptopSmallScreen" }));
      else if (window.innerWidth >= 1400 && window.innerWidth <= 1600)
        dispatch(setDevice({ device: "laptopBigScreen" }));
      else if (window.innerWidth >= 2000)
        dispatch(setDevice({ device: "2kMonitor" }));
      else dispatch(setDevice({ device: "desktop" }));
    }
  }, []);

  if (window?.innerWidth <= 1150)
    return (
      <div
        style={fallbackInnerStylesAndContent("parent")}
      >
        <div
          style={fallbackInnerStylesAndContent("child")}
        >
          {fallbackInnerStylesAndContent("content")}
        </div>
      </div>
    );
  else return <RouterProvider router={router} />;
}
