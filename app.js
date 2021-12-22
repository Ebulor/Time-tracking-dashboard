fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    tracker(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function tracker(data) {
  for (let i = 0; i < data.length; i++) {
    const container = document.querySelector(".container");
    //craete elements

    const card = document.createElement("div");
    const scheduleImg = document.createElement("div");
    const img = document.createElement("img");
    const scheduleTxt = document.createElement("div");
    const type = document.createElement("p");
    const duration = document.createElement("div");
    const hour = document.createElement("h2");
    const time = document.createElement("p");

    //append
    container.appendChild(card);
    card.appendChild(scheduleImg);
    card.appendChild(scheduleTxt);
    scheduleImg.appendChild(img);
    scheduleTxt.appendChild(type);
    scheduleTxt.appendChild(duration);
    duration.appendChild(hour);
    duration.appendChild(time);

    //set
    type.innerHTML = data[i].title;
    img.src = data[i].icon;

    console.log(data[i].timeframes.daily.current);
    //add class

    card.classList.add("panel");
    scheduleImg.classList.add("schedule-img");
    scheduleTxt.classList.add("schedule-text");
    duration.classList.add("duration");

    //functionality

    // hour.innerHTML = data[i].timeframes.daily.current + "hrs";||
    // time.innerHTML = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";

    const day = document.getElementById("day");
    /*day.addEventListener("click", () => {
      if (data[i].timeframes.daily.current > 1 ) {
        hour.innerHTML = data[i].timeframes.daily.current + "hrs";
      } else {
        hour.innerHTML = data[i].timeframes.daily.current + "hr";
      }
      if (data[i].timeframes.daily.previous > 1) {
        time.innerHTML =
          "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
      } else {
        time.innerHTML =
          "Yesterday - " + data[i].timeframes.daily.previous + "hr";
      }
    });*/
    console.log(data[i].timeframes.daily.current);
    day.addEventListener("click", () => {
      if (
        data[i].timeframes.daily.current > 1 ||
        data[i].timeframes.daily.previous > 1
      ) {
        hour.innerHTML = data[i].timeframes.daily.current + "hrs";
        time.innerHTML =
          "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
      } else {
        hour.innerHTML = data[i].timeframes.daily.current + "hr";
        time.innerHTML =
          "Yesterday - " + data[i].timeframes.daily.previous + "hr";
      }
    });

    const week = document.getElementById("week");
    week.addEventListener("click", () => {
      if (data[i].timeframes.weekly.current > 1) {
        hour.innerHTML = data[i].timeframes.weekly.current + "hrs";
        time.innerHTML =
          "Last week - " + data[i].timeframes.weekly.previous + "hrs";
      } else {
        hour.innerHTML = data[i].timeframes.weekly.current + "hr";
        time.innerHTML =
          "Last week - " + data[i].timeframes.weekly.previous + "hr";
      }
    });

    const month = document.getElementById("month");
    month.addEventListener("click", () => {
      if (
        data[i].timeframes.monthly.current > 1 ||
        data[i].timeframes.monthly.prev > 1
      ) {
        hour.innerHTML = data[i].timeframes.monthly.current + "hrs";
        time.innerHTML =
          "Last month - " + data[i].timeframes.monthly.previous + "hrs";
      } else {
        hour.innerHTML = data[i].timeframes.monthly.current + "hr";
        time.innerHTML =
          "Last month - " + data[i].timeframes.monthly.previous + "hr";
      }
    });

    //adding active class to controls
    const controls = document.querySelectorAll(".control");
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        controls.forEach((control) => {
          control.classList.remove("active");
        });
        control.classList.add("active");
      });
    });
  }
}
