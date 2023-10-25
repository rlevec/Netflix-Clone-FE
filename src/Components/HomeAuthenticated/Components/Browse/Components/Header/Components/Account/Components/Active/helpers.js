export const handleValueToRender = (data, activeLanguage) => {

  if (typeof data === "boolean") {
    if (data) return activeLanguage === "English" ? "on" : "uključeno"
    else return activeLanguage === "English" ? "off" : "isključeno"
  } else if (typeof data === "undefined" || data === null) return activeLanguage === "English" ? "unset" : "nije postavljeno"
    else if(data?.hasOwnProperty("value")) return activeLanguage === "English" ? data?.titleEng : data?.titleHr
  else if (data === "english") return "English"
  else if (data === "hrvatski") return "Hrvatski"
  else return data
}