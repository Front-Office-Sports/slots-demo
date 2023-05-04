// import { dataList } from "data/nfl.js";
// const dataList = import("./data/nfl.json");

// var mydata = JSON.parse(data);

// (function () {
// define and select all 'door' elements
const doors = document.querySelectorAll(".single-door");

// add event listeners to buttons
document.querySelector("#play").addEventListener("click", spin);
document.querySelector("#reset").addEventListener("click", init);

// define init function
function init(firstInit = true, groups = 1, duration = 1) {
  // change the 'Share' button to 'Play'
  // document.querySelector("#spin").innerHTML = "Play";

  for (let i = 0; i < doors.length; i++) {
    const door = doors[i];
    const items = dataList[i]; // get data-items for this door

    if (firstInit) {
      door.dataset.spinned = "0";
    } else if (door.dataset.spinned === "1") {
      return;
    }

    const boxes = door.querySelector(".slot-boxes");
    const boxesClone = boxes.cloneNode(false);
    const pool = [
      {
        text: "",
        image:
          "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/cherry-512.png",
      },
    ];

    if (!firstInit) {
      const arr = [];
      for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
        arr.push(...items);
      }
      shuffle(arr).forEach((item) => {
        // shuffle and add items to pool
        pool.push(item);
      });

      boxesClone.addEventListener(
        "transitionstart",
        function () {
          door.dataset.spinned = "1";
          this.querySelectorAll(".single-box").forEach((box) => {
            box.style.filter = "blur(1px)";
          });
        },
        { once: true }
      );

      boxesClone.addEventListener(
        "transitionend",
        function () {
          this.querySelectorAll(".single-box").forEach((box, index) => {
            box.style.filter = "blur(0px)";
            if (index > 0) this.removeChild(box);
          });
        },
        { once: true }
      );
    }

    for (let i = pool.length - 1; i >= 0; i--) {
      const box = document.createElement("div");
      box.classList.add("single-box");
      box.style.width = door.clientWidth + "px";
      box.style.height = door.clientHeight + "px";

      // Add 'blur-image-box' class to the boxes with the specific background-image
      if (
        pool[i].image !==
        "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/cherry-512.png"
      ) {
        box.classList.add("blur-image-box");
      }

      // if the image is the default image, make the image size smaller

      // if box-layout background-image is used, add a blur to box-layout
      // box.style.filter = "blur(1px)";

      // box.innerHTML = `<p>${pool[i].text}</p> <img class="slot-image" src="${pool[i].image}">`;
      // box.innerHTML = `<div class="box-layout"> <img class="slot-image" src="${pool[i].image}"> <p>${pool[i].text}</p> </div>`;
      // box.innerHTML = `<div class="box-layout"> <img class="slot-image" src="${pool[i].image}"> </div>`;
      // set the inner HTML of the box so the image fills the box, and the text is centered over the image

      box.innerHTML = `<div class="box-layout" style="background-image: url('${pool[i].image}')"></div><p class="infront-of-image">${pool[i].text}</p>`;

      boxesClone.appendChild(box);
    }
    boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
    boxesClone.style.transform = `translateY(-${
      door.clientHeight * (pool.length - 1)
    }px)`;
    door.replaceChild(boxesClone, boxes);
  }
}

// define spin function
async function spin() {
  // change the 'Play' button to 'Share'
  // document.querySelector("#spin").innerHTML = "Share";

  init(false, 1, 2);
  for (const door of doors) {
    const boxes = door.querySelector(".slot-boxes");
    const duration = parseInt(boxes.style.transitionDuration);
    boxes.style.transform = "translateY(0)";
    await new Promise((resolve) => setTimeout(resolve, duration * 100));
  }
}

function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

// when Play is clicked, change the button to Share
// document.querySelector("#play").addEventListener("click", function () {
//   // change the button ID to 'share'
//   this.id = "share";
//   // change the 'Play' text to 'Share'
//   this.innerHTML = "Share";
// });

// when 'Reset' is clicked, change the button to 'Play'
document.querySelector("#reset").addEventListener("click", function () {
  // hide away the share popup
  // document.querySelector(".popup-box").style.visibility = "hidden";

  // change the button ID to 'play'
  // document.querySelector("#share").id = "play";
  // change the 'Share' text to 'Play'
  document.querySelector("#play").innerHTML = "Play";
});

// function checkElementId() {
//   const element = document.getElementById("share");
//   if (element) {
//     element.addEventListener("click", function () {
//       // do something when the element is clicked
//       console.log("share clicked");

//       // show the share popup
//     });
//   } else {
//     setTimeout(checkElementId, 100); // check again in 100ms
//   }
// }

// checkElementId(); // start checking for the element ID

init();
// })();
