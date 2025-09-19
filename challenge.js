 function showSelectedTimeZone(event) {
        if (event.target.value.length > 0) {
          if (event.target.value === "Paris") {
            alert("Bonjour!");
          }
          if (event.target.value === "Tokyo") {
            alert("Konnichiwa!");
          }
          if (event.target.value === "Sydney") {
            alert("Hi!");
          }
        }
      }

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedTimeZone);
console.log("citySelect");
let ParisTime = `${moment()
  .tz("Paris/France")
  .format("dddd, MMMM D, YYYY H:m a")}`;
let parisElement = document.querySelector("#current-date");
parisElement.innerHTML = parisTime;