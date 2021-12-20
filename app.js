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
  const container = document.querySelector(".container");

  for (let i = 0; i < data.length; i++) {
    //craete elements
    const controlPanel = document.createElement("div");
    const card = document.createElement("div");
    const scheduleImg = document.createElement("div");
    const img = document.createElement("{img");
    const scheduleTxt = document.createElement("div");
    const type = document.createElement("p");

    //append
    container.appendChild(controlPanel);
    controlPanel.appendChild(card);
    card.appendChild(scheduleImg);
    card.appendChild(scheduleTxt);
    scheduleImg.appendChild(img);

    //set
    type.innerHTML = data[i].title;

    //add class
    // controlPanel.classList.add("control-panel");
    scheduleImg.classList.add("schedule-img");
    scheduleTxt.classList.add("schedule-text");
  }
}
