(function () {
  const doorsData = [
    // Cities
    [
      "Glendale, AZ",
      "Atlanta, GA",
      "Baltimore, MD",
      "Buffalo, NY",
      "Charlotte, NC",
      "Chicago, IL",
      "Cincinnati, OH",
      "Cleveland, OH",
      "Arlington, TX",
      "Denver, CO",
      "Detroit, MI",
      "Green Bay, WI",
      "Houston, TX",
      "Indianapolis, IN",
      "Jacksonville, FL",
      "Kansas City, MO",
      "Las Vegas, NV",
      "Inglewood, CA",
      "Inglewood, CA",
      "Miami Gardens, FL",
      "Minneapolis, MN",
      "Foxborough, MA",
      "New Orleans, LA",
      "East Rutherford, NJ",
      "East Rutherford, NJ",
      "Philadelphia, PA",
      "Pittsburgh, PA",
      "Santa Clara, CA",
      "Seattle, WA",
      "Tampa, FL",
      "Nashville, TN",
      "Landover, MD",
    ],

    // Owners
    [
      "Michael Bidwill",
      "Arthur Blank",
      "Steve Bisciotti",
      "Terry Pegula",
      "David Tepper",
      "Virginia McCaskey",
      "Mike Brown",
      "Jimmy Haslam",
      "Jerry Jones",
      "Pat Bowlen Trust",
      "Sheila Ford Hamp",
      "Green Bay Packers, Inc.",
      "Janice McNair",
      "Jim Irsay",
      "Shahid Khan",
      "Clark Hunt",
      "Mark Davis",
      "Dean Spanos",
      "Stan Kroenke",
      "Stephen Ross",
      "Zygi Wilf",
      "Robert Kraft",
      "Gayle Benson",
      "John Mara and Steve Tisch",
      "Woody Johnson",
      "Jeffrey Lurie",
      "Rooney Family",
      "Jed York",
      "Jody Allen",
      "Glazer Family",
      "Amy Adams Strunk",
      "Dan Snyder",
    ],

    // Coaches
    [
      "Kliff Kingsbury",
      "Arthur Smith",
      "John Harbaugh",
      "Sean McDermott",
      "Matt Rhule",
      "Matt Nagy",
      "Zac Taylor",
      "Kevin Stefanski",
      "Mike McCarthy",
      "Vic Fangio",
      "Dan Campbell",
      "Matt LaFleur",
      "David Culley",
      "Frank Reich",
      "Urban Meyer",
      "Andy Reid",
      "Jon Gruden",
      "Brandon Staley",
      "Sean McVay",
      "Brian Flores",
      "Mike Zimmer",
      "Bill Belichick",
      "Sean Payton",
      "Joe Judge",
      "Robert Saleh",
      "Nick Sirianni",
      "Mike Tomlin",
      "Kyle Shanahan",
      "Pete Carroll",
      "Bruce Arians",
      "Mike Vrabel",
      "Ron Rivera",
    ],

    //Quarterbacks
    [
      "Kyler Murray",
      "Matt Ryan",
      "Lamar Jackson",
      "Josh Allen",
      "Sam Darnold",
      "Andy Dalton",
      "Joe Burrow",
      "Baker Mayfield",
      "Dak Prescott",
      "Teddy Bridgewater",
      "Jared Goff",
      "Aaron Rodgers",
      "Tyrod Taylor",
      "Carson Wentz",
      "Trevor Lawrence",
      "Patrick Mahomes",
      "Derek Carr",
      "Justin Herbert",
      "Matthew Stafford",
      "Tua Tagovailoa",
      "Kirk Cousins",
      "Mac Jones",
      "Jameis Winston",
      "Daniel Jones",
      "Zach Wilson",
      "Ben Roethlisberger",
      "Jimmy Garoppolo",
      "Russell Wilson",
      "Tom Brady",
      "Ryan Tannehill",
      "Taylor Heinicke",
    ],
  ];

  // define and select all 'door' elements
  const doors = document.querySelectorAll(".door");

  // add event listeners to buttons
  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  // define init function
  function init(firstInit = true, groups = 1, duration = 1) {
    for (let i = 0; i < doors.length; i++) {
      const door = doors[i];
      const items = doorsData[i]; // get data-items for this door

      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);
      const pool = ["❓"];

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          "transitionstart",
          function () {
            door.dataset.spinned = "1";
            this.querySelectorAll(".box").forEach((box) => {
              box.style.filter = "blur(1px)";
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          "transitionend",
          function () {
            this.querySelectorAll(".box").forEach((box, index) => {
              box.style.filter = "blur(0)";
              box.style.backdropFilter = "blur(0)";
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.textContent = pool[i];
        // box.style.backgroundImage = `url(${pool[i]})`;
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
    init(false, 1, 2);
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
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

  init();
})();
