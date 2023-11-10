import dateFormat from "dateformat";

export const dateTime = (date = new Date()) => {
   return dateFormat(date, " dS mmm yy, h:MM TT")
}

export const shortText = (str, len = 50) => {
   let dot = ''
   if (str !== null && str?.length >= len) {
      dot = str.substring(0, len);
      return dot += "..."
   } else {
      return str;
   }

}