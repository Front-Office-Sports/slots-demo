// --- Declarations --- //
const slotsCoverImg = "images/slot_img/cherry_cover_comp.png";

// define the "doors" element
const allDoors = document.querySelectorAll(".single-door");

// Game over flag (initially set to false)
let isGameOver = false;

// Button elements
const playAndShareButton = document.querySelector("#playAndShare");
const resetButton = document.querySelector("#reset");

const gameUrl = "https://frontofficesports.com/slots-interactive-v1/";

// add event listeners to buttons
addEventListeners();

// initialize the game
init();

// --- Game Functions --- //
// define init function (initialize the game)
function init(firstInit = true, groups = 1, duration = 1) {
  for (let i = 0; i < allDoors.length; i++) {
    const door = allDoors[i];
    // const items = dataList[i]; // get data-items for this door

    // get 10 random items for each door
    const items = shuffle(dataList[i]).slice(0, 10);

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
        image: slotsCoverImg,
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
      if (pool[i].image !== slotsCoverImg) {
        box.classList.add("blur-image-box");
      }

      // if the image is the default image, make the image size smaller
      if (pool[i].image == slotsCoverImg) {
        box.classList.add("cover-image-box");
      }

      // lower z index than the border
      box.innerHTML = `<div class="box-layout" style="background-image: url('${pool[i].image}'); z-index: 5;"></div><p class="infront-of-image">${pool[i].text}</p>`;

      boxesClone.appendChild(box);
    }
    boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
    boxesClone.style.transform = `translateY(-${
      door.clientHeight * (pool.length - 1)
    }px)`;
    door.replaceChild(boxesClone, boxes);
  }
}

// Spin function goes here (function to spin the slot 'doors')
// async function spin() {
//   // init the game
//   init(false, 1, 2);

//   // disable all buttons
//   playAndShareButton.disabled = true;
//   resetButton.disabled = true;

//   isCancelled = false; // Ensure that cancelled flag is set to false at the beginning of each spin

//   // for each door, set the animation to spin
//   for (const door of allDoors) {
//     const boxes = door.querySelector(".slot-boxes");
//     const duration = parseInt(boxes.style.transitionDuration);
//     boxes.style.transform = "translateY(0)";
//     await new Promise((resolve) => setTimeout(resolve, duration * 100));
//   }

//   // wait for the last door to finish spinning, then set gameOverBool to true
//   await new Promise((resolve) => setTimeout(resolve, 1800));

//   if (!isCancelled) {
//     isGameOver = true;
//     // change the 'Play' button to 'Share'
//     document.querySelector("#playAndShare").innerHTML = "Share";
//   }

//   // enable all buttons
//   playAndShareButton.disabled = false;
//   resetButton.disabled = false;

//   // display the 'Game Over' message
//   console.log("Game Over! Share or Spin again!");
// }

// spin new
// Spin function goes here (function to spin the slot 'doors')
async function spin() {
  // init the game
  init(false, 1, 2);

  // disable all buttons
  playAndShareButton.disabled = true;
  resetButton.disabled = true;

  isCancelled = false; // Ensure that cancelled flag is set to false at the beginning of each spin

  // for each door, set the animation to spin
  for (const door of allDoors) {
    const boxes = door.querySelector(".slot-boxes");
    const duration = parseInt(boxes.style.transitionDuration);
    boxes.style.transform = "translateY(0)";
    await animate(duration);
  }

  // wait for the last door to finish spinning, then set gameOverBool to true
  await animate(1800);

  if (!isCancelled) {
    isGameOver = true;
    // change the 'Play' button to 'Share'
    document.querySelector("#playAndShare").innerHTML = "Share";
  }

  // enable all buttons
  playAndShareButton.disabled = false;
  resetButton.disabled = false;

  // display the 'Game Over' message
  console.log("Game Over! Share or Spin again!");
}

function animate(duration) {
  return new Promise((resolve) => {
    let start;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }
    requestAnimationFrame(step);
  });
}

// function to shuffle the items order
function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

// add event listeners to buttons (play/share button and reset button)
function addEventListeners() {
  // Play and Share button - functions as both Play and Share
  playAndShareButton.addEventListener("click", handlePlayAndShareClick);

  // Reset game button
  resetButton.addEventListener("click", handleResetClick);
}

// function to handle the Play and Share button click
function handlePlayAndShareClick() {
  console.log("play and share button clicked");

  // if the game is NOT over, we will display a 'play' button and spin the slots
  if (!isGameOver) {
    // console.log("Game Over: " + isGameOver);
    console.log("Play button clicked");
    spin();
    // if the game is over, we will display a 'share' button and share the game
  } else {
    // console.log("Game Over: " + isGameOver);
    console.log("Share button clicked");
    // call shareGame function
    showSharePopup();
  }
}

// function to handle the Reset button click
function handleResetClick() {
  console.log("reset game clicked");

  // gameOver becomes false
  isGameOver = false;

  // change 'Share' button back to 'Play'
  playAndShareButton.innerHTML = "Spin";

  // set the isCancelled flag to true
  isCancelled = true;

  // initialize the game
  init();
}

// --- Share Functions --- //
// get the text/result in the slots
function getSpinResults() {
  const infrontOfImage = document.getElementsByClassName("infront-of-image");

  return {
    slot1: infrontOfImage[0].textContent,
    slot2: infrontOfImage[1].textContent,
    slot3: infrontOfImage[2].textContent,
    slot4: infrontOfImage[3].textContent,
  };
}

// when the user clicks "Share" button
function showSharePopup() {
  // prepare, format and display the 'Share' modal
  function prepareAndShowModal() {
    const sharePopup = document.getElementById("sharePopup");
    console.log("Share Popup clicked");
    const close_share = document.getElementsByClassName("closeBtn")[0];
    console.log("close button selected");
    console.log("share button clicked");
    console.log("modal.style.display = block");
    // set the modal to visible
    function showModal(modal) {
      modal.style.visibility = "visible";
    }
    // add a close handler to the modal (close the modal when the 'x' is clicked)
    function addModalCloseHandler(close_share, modal) {
      close_share.onclick = function () {
        modal.style.visibility = "hidden";
      };
    }
    showModal(sharePopup);
    addModalCloseHandler(close_share, sharePopup);
  }

  // prepare and show the results of the spin
  function prepareAndShowFranchiseDetails() {
    const franchiseText = document.querySelector(".franchise-text");
    // clear frachiseText
    franchiseText.innerHTML = "";

    const spinResult = getSpinResults();

    // set franchiseText to the spin results
    franchiseText.innerHTML = `🏢 City: ${spinResult.slot1}<br>💵 Owner: ${spinResult.slot2}<br>📢 Coach: ${spinResult.slot3}<br>🏈 QB: ${spinResult.slot4}`;
  }

  // Prepare and show the modal
  prepareAndShowModal();
  // Prepare and show results of the spin
  prepareAndShowFranchiseDetails();
}

// if user clicks copy share button, copy the text in .franchise-text to the clipboard
function copyShareClicked() {
  // copy the text in .franchise-text to the clipboard
  const textarea = document.createElement("textarea");
  textarea.value = document.querySelector(".franchise-text").innerText;

  textarea.value = `My NFL franchise, generated by @FOS: \n${textarea.value}\nPlay: ${gameUrl}`;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // display the resultsCopiedPopup popup for 2 seconds then remove it
  const popup = document.getElementById("resultsCopiedPopup");
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 2000);
}

// if user clicks Twitter share button, open Twitter share window
function twitterShareClicked() {
  function generateTwitterShareText(spinResults) {
    var output_text = `My NFL franchise, generated by @FOS: \n🏢 City: ${spinResults.slot1}\n💵 Owner: ${spinResults.slot2}\n📢 Coach: ${spinResults.slot3}\n🏈 QB: ${spinResults.slot4}\nPlay: ${gameUrl}`;
    return encodeURIComponent(output_text).replace(/%0A/g, "%0D%0A");
  }

  const tweet_text = generateTwitterShareText(getSpinResults());

  twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweet_text}`;

  window.open(twitterShareUrl, "_blank");
}

// if user clicks Facebook share button, open Facebook share window
function facebookShareClicked() {
  var facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    gameUrl
  )}`;
  window.open(facebookShareUrl, "_blank");
}
