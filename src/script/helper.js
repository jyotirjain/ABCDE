export const dateRedable = (isoDate) => {
  const date = new Date(isoDate);

  const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Kolkata"
  };

  const humanReadableDate = date.toLocaleString("en-US", options);
  return humanReadableDate;
};
