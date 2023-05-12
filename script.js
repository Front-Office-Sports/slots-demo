// define the "doors" element
const doors = document.querySelectorAll(".single-door");

let gameOverBool = false;

// --- add event listeners to buttons ---

// Play and Share button - functions as both Play and Share
playAndShareButton = document.querySelector("#playAndShare");
// add event listener to the Play and Share button
playAndShareButton.addEventListener("click", () => {
  // if the game is NOT over, play the game
  if (gameOverBool == false) {
    console.log("play game clicked");
    spin();
  }
  // if the game is over, share the game
  else if (gameOverBool == true) {
    shareGame();
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  console.log("reset game clicked");

  gameOverBool = false;
  // change the 'Share' button to 'Play'
  document.querySelector("#playAndShare").innerHTML = "Play";

  init();
});

// --- functions ---

// function to share the game
function shareGame() {
  // set the visibility of the .share-popup-box to visible
  // document.querySelector(".share-popup-box").style.visibility = "visible";

  console.log("share game clicked");

  var modal = document.getElementById("shareModal");
  console.log("modal selected");

  var close_share = document.getElementsByClassName("closeBtn")[0];
  console.log("close button selected");

  console.log("setting event listener for share button");
  playAndShareButton.addEventListener("click", () => {
    console.log("share button clicked");
    console.log("modal.style.display = block");
    // modal.style.display = "block";
    // set the visibility of the modal to visible
    modal.style.visibility = "visible";
  });

  close_share.onclick = function () {
    modal.style.visibility = "hidden";
  };

  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
}

// define init function
function init(firstInit = true, groups = 1, duration = 1) {
  // change the 'Share' button to 'Play'
  // document.querySelector("#spin").innerHTML = "Play";

  // define gameOverBool
  // let gameOverBool = false;

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
      if (
        pool[i].image ==
        "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/cherry-512.png"
      ) {
        box.classList.add("cover-image-box");
      }

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

// function to spin the slot 'doors'
async function spin() {
  // change the 'Play' button to 'Share'
  document.querySelector("#playAndShare").innerHTML = "Share";

  // init the game
  init(false, 1, 2);

  // for each door, set the animation to spin
  for (const door of doors) {
    const boxes = door.querySelector(".slot-boxes");
    const duration = parseInt(boxes.style.transitionDuration);
    boxes.style.transform = "translateY(0)";
    await new Promise((resolve) => setTimeout(resolve, duration * 100));
  }

  // set gameOverBool to true
  gameOverBool = true;
  console.log("Game Over! Share or Spin again!");
}

// function to shuffle the items in the array
function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

// init the game
init();
