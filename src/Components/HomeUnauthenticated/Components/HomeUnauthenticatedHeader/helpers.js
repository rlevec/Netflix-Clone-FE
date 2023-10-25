export const handleFullPrefix = (activeLanguage, geoLocationCountry) => {
  let newGeoLocationCountry
  let newActiveLanguage

  if (geoLocationCountry !== "") {
    if (geoLocationCountry === "Croatia") newGeoLocationCountry = "hr"
    else newGeoLocationCountry = "en"
  }
  if (activeLanguage !== "") {
    if (activeLanguage === "Hrvatski") newActiveLanguage = "hr"
    else if (activeLanguage === "English") newActiveLanguage = "en"
    else newActiveLanguage = "en"
  }

  let fullPrefix = () => {
    if (newGeoLocationCountry === newActiveLanguage) return newActiveLanguage
    else return `${newGeoLocationCountry}-${newActiveLanguage}`
  }

  return fullPrefix()
}