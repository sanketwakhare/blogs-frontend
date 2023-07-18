import moment from "moment";

const toLocalDateString = (utcDate, format = "MMM DD, YYYY") => {
  return moment.utc(utcDate).local().format(format);
};

export { toLocalDateString };
