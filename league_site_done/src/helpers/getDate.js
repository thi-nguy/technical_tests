function getDate(timeStamp) {
  const date = new Date(timeStamp);
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    minimumIntegerDigits: 1,
  };
  const dateString = date
    .toLocaleString("en-GB", options)
    .replace(/[/]/g, ".")
    .replace(",", " ");
  return dateString;
}

export default getDate;
