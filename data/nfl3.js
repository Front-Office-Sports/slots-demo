const dataList = [
  // Cities
  [
    {
      text: "Glendale",
      image: "images/cities/Arizona Cardinals.jpeg",
      team_name: "Arizona Cardinals",
    },
    {
      text: "Atlanta",
      image: "images/cities/Atlanta Falcons.jpeg",
      team_name: "Atlanta Falcons",
    },
    {
      text: "Baltimore",
      image: "images/cities/Baltimore Ravens.png",
      team_name: "Baltimore Ravens",
    },
    {
      text: "Buffalo",
      image: "images/cities/Buffalo Bills.jpeg",
      team_name: "Buffalo Bills",
    },
    {
      text: "Charlotte",
      image: "images/cities/Carolina Panthers.jpeg",
      team_name: "Carolina Panthers",
    },
    {
      text: "Chicago",
      image: "images/cities/Chicago Bears.jpeg",
      team_name: "Chicago Bears",
    },
    {
      text: "Cincinnati",
      image: "images/cities/Cincinnati Bengals.jpeg",
      team_name: "Cincinnati Bengals",
    },
    {
      text: "Cleveland",
      image: "images/cities/Cleveland Browns.jpeg",
      team_name: "Cleveland Browns",
    },
    {
      text: "Dallas",
      image: "images/cities/Dallas Cowboys.jpg",
      team_name: "Dallas Cowboys",
    },
    {
      text: "Denver",
      image: "images/cities/Denver Broncos.jpg",
      team_name: "Denver Broncos",
    },
    {
      text: "Detroit",
      image: "images/cities/Detroit Lions.jpeg",
      team_name: "Detroit Lions",
    },
    {
      text: "Green Bay",
      image: "images/cities/Green Bay Packers.jpeg",
      team_name: "Green Bay Packers",
    },
    {
      text: "Houston",
      image: "images/cities/Houston Texans.jpeg",
      team_name: "Houston Texans",
    },
    {
      text: "Indianapolis",
      image: "images/cities/Indianapolis Colts.jpeg",
      team_name: "Indianapolis Colts",
    },
    {
      text: "Jacksonville",
      image: "images/cities/Jacksonville Jaguars.jpeg",
      team_name: "Jacksonville Jaguars",
    },
    {
      text: "Kansas City",
      image: "images/cities/Kansas City Chiefs.png",
      team_name: "Kansas City Chiefs",
    },
    {
      text: "Las Vegas",
      image: "images/cities/Las Vegas Raiders.jpeg",
      team_name: "Las Vegas Raiders",
    },
    // {text: "Inglewood", image: "", team_name: "Los Angeles Chargers"},
    {
      text: "Los Angeles",
      image: "images/cities/Los Angeles Rams.png",
      team_name: "Los Angeles Rams",
    },
    {
      text: "Miami",
      image: "images/cities/Miami Dolphins.jpeg",
      team_name: "Miami Dolphins",
    },
    {
      text: "Minneapolis",
      image: "images/cities/Minnesota Vikings.jpg",
      team_name: "Minnesota Vikings",
    },
    {
      text: "Boston",
      image: "images/cities/New England Patriots.jpeg",
      team_name: "New England Patriots",
    },
    {
      text: "New Orleans",
      image: "images/cities/New Orleans Saints.jpeg",
      team_name: "New Orleans Saints",
    },
    {
      text: "New York",
      image: "images/cities/New York Giants.png",
      team_name: "New York Giants",
    },
    // {text: "East Rutherford", image: "", team_name: "New York Jets"},
    {
      text: "Philadelphia",
      image: "images/cities/Philadelphia Eagles.jpeg",
      team_name: "Philadelphia Eagles",
    },
    {
      text: "Pittsburgh",
      image: "images/cities/Pittsburgh Steelers.jpg",
      team_name: "Pittsburgh Steelers",
    },
    {
      text: "San Francisco",
      image: "images/cities/San Francisco 49ers.jpeg",
      team_name: "San Francisco 49ers",
    },
    {
      text: "Seattle",
      image: "images/cities/Seattle Seahawks.jpeg",
      team_name: "Seattle Seahawks",
    },
    {
      text: "Tampa",
      image: "images/cities/Tampa Bay Buccaneers.png",
      team_name: "Tampa Bay Buccaneers",
    },
    {
      text: "Nashville",
      image: "images/cities/Tennessee Titans.jpeg",
      team_name: "Tennessee Titans",
    },
    {
      text: "Washington",
      image: "images/cities/Washington Commanders.png",
      team_name: "Washington Commanders",
    },
  ],
  // Team Owners
  [
    { text: "Michael Bidwill", image: "images/owners/Michael Bidwill.jpg" },
    { text: "Arthur M. Blank", image: "images/owners/Arthur M. Blank.jpeg" },
    { text: "Steve Bisciotti", image: "images/owners/Steve Bisciotti.jpg" },
    { text: "Kim Pegula", image: "images/owners/Kim Pegula.jpeg" },
    { text: "David Tepper", image: "images/owners/David Tepper.jpeg" },
    {
      text: "Virginia Halas McCaskey",
      image: "images/owners/Virginia Halas McCaskey.jpeg",
    },
    { text: "Mike Brown", image: "images/owners/Mike Brown.jpeg" },
    { text: "Jimmy Haslam", image: "images/owners/Jimmy Haslam.jpeg" },
    { text: "Jerry Jones", image: "images/owners/Jerry Jones.jpg" },
    { text: "Greg Penner", image: "images/owners/Greg Penner.jpg" },
    { text: "Sheila Ford Hamp", image: "images/owners/Sheila Ford Hamp.jpg" },
    // {text: "Green Bay Packers, Inc. Shareholders", image: ""},
    { text: "Janice McNair", image: "images/owners/Janice McNair.jpeg" },
    { text: "Jim Irsay", image: "images/owners/Jim Irsay.jpeg" },
    { text: "Shahid Khan", image: "images/owners/Shahid Khan.jpg" },
    { text: "Clark Hunt", image: "images/owners/Clark Hunt.jpeg" },
    { text: "Mark Davis", image: "images/owners/Mark Davis.jpeg" },
    { text: "Dean Spanos", image: "images/owners/Dean Spanos.jpeg" },
    { text: "Stan Kroenke", image: "images/owners/Stan Kroenke.jpeg" },
    {
      text: "Stephen Michael Ross",
      image: "images/owners/Stephen Michael Ross.jpeg",
    },
    { text: "Zygi Wilf", image: "images/owners/Zygi Wilf.jpeg" },
    { text: "Robert Kraft", image: "images/owners/Robert Kraft.jpeg" },
    { text: "Gayle Benson", image: "images/owners/Gayle Benson.jpg" },
    { text: "John Mara", image: "images/owners/John Mara.jpeg" },
    { text: "Woody Johnson", image: "images/owners/Woody Johnson.jpeg" },
    { text: "Jeffrey Lurie", image: "images/owners/Jeffrey Lurie.jpg" },
    { text: "Dan M. Rooney", image: "images/owners/Dan M. Rooney.jpeg" },
    {
      text: "Denise DeBartolo York",
      image: "images/owners/Denise DeBartolo York.jpg",
    },
    { text: "Jody Allen", image: "images/owners/Jody Allen.jpeg" },
    // {text: "The Glazer Family", image: ""},
    { text: "Amy Adams Strunk", image: "images/owners/Amy Adams Strunk.jpeg" },
    { text: "Josh Harris", image: "images/owners/Josh Harris.jpg" },
  ],
  // Head Coaches
  [
    { text: "Andy Reid", image: "images/coaches/Andy Reid.jpeg" },
    { text: "Kyle Shanahan", image: "images/coaches/Kyle Shanahan.jpeg" },
    { text: "Bill Belichick", image: "images/coaches/Bill Belichick.jpeg" },
    { text: "Sean McVay", image: "images/coaches/Sean McVay.jpeg" },
    { text: "John Harbaugh", image: "images/coaches/John Harbaugh.jpg" },
    { text: "Mike Tomlin", image: "images/coaches/Mike Tomlin.jpeg" },
    { text: "Sean McDermott", image: "images/coaches/Sean McDermott.jpg" },
    { text: "Sean Payton", image: "images/coaches/Sean Payton.jpeg" },
    { text: "Pete Carroll", image: "images/coaches/Pete Carroll.jpeg" },
    { text: "Doug Pederson", image: "images/coaches/Doug Pederson.jpeg" },
    { text: "Matt LaFleur", image: "images/coaches/Matt LaFleur.jpeg" },
    { text: "Nick Sirianni", image: "images/coaches/Nick Sirianni.jpg" },
    { text: "Mike Vrabel", image: "images/coaches/Mike Vrabel.jpeg" },
    { text: "Zac Taylor", image: "images/coaches/Zac Taylor.jpeg" },
    { text: "Brian Daboll", image: "images/coaches/Brian Daboll.jpg" },
    { text: "Frank Reich", image: "images/coaches/Frank Reich.jpeg" },
    { text: "Kevin O'Connell", image: "images/coaches/Kevin OConnell.jpeg" },
    { text: "Mike McDaniel", image: "images/coaches/Mike McDaniel.jpeg" },
    { text: "Mike McCarthy", image: "images/coaches/Mike McCarthy.jpg" },
    { text: "Kevin Stefanski", image: "images/coaches/Kevin Stefanski.jpeg" },
    { text: "Ron Rivera", image: "images/coaches/Ron Rivera.jpeg" },
    { text: "Dan Campbell", image: "images/coaches/Dan Campbell.jpg" },
    { text: "Brandon Staley", image: "images/coaches/Brandon Staley.jpeg" },
    { text: "Shane Steichen", image: "images/coaches/Shane Steichen.jpg" },
    { text: "DeMeco Ryans", image: "images/coaches/DeMeco Ryans.jpeg" },
    { text: "Robert Saleh", image: "images/coaches/Robert Saleh.jpg" },
    { text: "Dennis Allen", image: "images/coaches/Dennis Allen.jpg" },
    { text: "Todd Bowles", image: "images/coaches/Todd Bowles.jpg" },
    { text: "Arthur Smith", image: "images/coaches/Arthur Smith.jpeg" },
    { text: "Josh McDaniels", image: "images/coaches/Josh McDaniels.jpg" },
    { text: "Jonathan Gannon", image: "images/coaches/Jonathan Gannon.jpeg" },
    { text: "Matt Eberflus", image: "images/coaches/Matt Eberflus.jpg" },
  ],
  // Quarterbacks
  [
    { text: "Lamar Jackson", image: "images/quarterbacks/Lamar Jackson.jpg" },
    { text: "Josh Allen", image: "images/quarterbacks/Josh Allen.jpeg" },
    { text: "Joe Burrow", image: "images/quarterbacks/Joe Burrow.jpg" },
    { text: "Deshaun Watson", image: "images/quarterbacks/Deshaun Watson.jpg" },
    {
      text: "Russell Wilson",
      image: "images/quarterbacks/Russell_Wilson.jpeg",
    },
    { text: "C.J. Stroud", image: "images/quarterbacks/C.J. Stroud.jpg" },
    {
      text: "Anthony Richardson",
      image: "images/quarterbacks/Anthony Richardson.jpeg",
    },
    {
      text: "Gardner Minshew",
      image: "images/quarterbacks/Gardner Minshew.jpeg",
    },
    {
      text: "Trevor Lawrence",
      image: "images/quarterbacks/Trevor Lawrence.jpeg",
    },
    {
      text: "Patrick Mahomes",
      image: "images/quarterbacks/Patrick Mahomes.jpeg",
    },
    {
      text: "Jimmy Garoppolo",
      image: "images/quarterbacks/Jimmy Garoppolo.jpeg",
    },
    {
      text: "Justin Herbert",
      image: "images/quarterbacks/Justin Herbert.jpeg",
    },
    {
      text: "Tua Tagovailoa",
      image: "images/quarterbacks/Tua Tagovailoa.jpeg",
    },
    { text: "Mac Jones", image: "images/quarterbacks/Mac Jones.jpg" },
    { text: "Aaron Rodgers", image: "images/quarterbacks/Aaron Rodgers.jpeg" },
    { text: "Kenny Pickett", image: "images/quarterbacks/Kenny Pickett.jpeg" },
    {
      text: "Ryan Tannehill",
      image: "images/quarterbacks/Ryan Tannehill.jpeg",
    },
    { text: "Will Levis", image: "images/quarterbacks/Will Levis.jpeg" },
    { text: "Desmond Ridder", image: "images/quarterbacks/Desmond Ridder.jpg" },
    { text: "Kyler Murray", image: "images/quarterbacks/Kyler Murray.png" },
    { text: "Bryce Young", image: "images/quarterbacks/Bryce Young.jpeg" },
    { text: "Justin Fields", image: "images/quarterbacks/Justin Fields.jpeg" },
    { text: "Dak Prescott", image: "images/quarterbacks/Dak Prescott.jpeg" },
    { text: "Jared Goff", image: "images/quarterbacks/Jared Goff.jpeg" },
    { text: "Jordan Love", image: "images/quarterbacks/Jordan Lov.jpeg" },
    {
      text: "Matthew Stafford",
      image: "images/quarterbacks/Matthew Stafford.jpg",
    },
    { text: "Kirk Cousins", image: "images/quarterbacks/Kirk Cousins.jpg" },
    { text: "Derek Carr", image: "images/quarterbacks/Derek Carr.jpg" },
    { text: "Daniel Jones", image: "images/quarterbacks/Daniel Jones.jpg" },
    { text: "Jalen Hurts", image: "images/quarterbacks/Jalen Hurts.jpeg" },
    { text: "Brock Purdy", image: "images/quarterbacks/Brock Purdy.jpeg" },
    { text: "Trey Lance", image: "images/quarterbacks/Trey Lance.jpg" },
    { text: "Geno Smith", image: "images/quarterbacks/Geno Smith.jpeg" },
    { text: "Kyle Trask", image: "images/quarterbacks/Kyle Trask.jpg" },
    { text: "Baker Mayfield", image: "images/quarterbacks/Baker Mayfield.jpg" },
    { text: "Sam Howell", image: "images/quarterbacks/Sam Howell.jpeg" },
    {
      text: "Jacoby Brissett",
      image: "images/quarterbacks/Jacoby Brissett.jpeg",
    },
    {
      text: "Andy Dalton",
      image: "images/quarterbacks/Andy Dalton.jpg",
    },
    {
      text: "Colt McCoy",
      image: "images/quarterbacks/Colt McCoy.jpeg",
    },
    {
      text: "Davis Mills",
      image: "images/quarterbacks/Davis Mills.jpg",
    },
    {
      text: "Sam Darnold",
      image: "images/quarterbacks/Sam Darnold.jpeg",
    },
  ],
];

// Preload images
// Preload all the images
dataList.forEach((subList) => {
  subList.forEach((item) => {
    const img = new Image();
    img.src = item.image;
  });
});
