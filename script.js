//your JS code here. If required.
(function getTimeDate() {
  const time = document.getElementById("timer");
  let date = new Date();
  time.innerText = date.toLocaleDateString() + ", " + date.toLocaleTimeString();
  setTimeout(getTimeDate, 1000);
})();