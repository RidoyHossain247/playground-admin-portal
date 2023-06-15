import dateFormat from "dateformat";

export const dateTime = (date = new Date()) => {
   return dateFormat(date, "dd-mmm-yy, h:MM:ss TT")
}

export const shortText = (str, len = 50) => {

   if (str !== null && str?.length >= len) {
      return str.substring(0, len);
   } else {
      return str;
   }

}