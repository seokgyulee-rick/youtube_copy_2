const getdate = new Date();
const currentArg = getdate.getDate();

function timeDifference(current, previous) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  }
  if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  }
  if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  }
  if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  }
  if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  }
  return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
}
const changeCommentDate = () => {
  const newFormat = timeDifference(currentArg, commentDate);
  console.log(newFormat);
  commentDate.innerHTML = newFormat;
};
