//Clicking the button thing
var score = 0;
var clickingPower = 1;
var ScorePerSecond;
//add to score
function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

setInterval(function () {
  score = score + dogs * 5;
  score = score + miners * 10;
  score = score + thingys * 20;
  score = score + monkeys * 30;
  score = score + cubes * 45;
  score = score + waters * 75;
  score = score + rocks * 90;
  document.getElementById("score").innerHTML = score;
}, 1000); //1000ms = 1s

function updateScorePerSecond() {
  ScorePerSecond =
    dogs * 5 +
    miners * 10 +
    thingys * 20 +
    monkeys * 30 +
    cubes * 45 +
    waters * 75 +
    rocks * 90;

  document.getElementById("ScorePerSecond").innerHTML = ScorePerSecond;
}

//dogs

var dogCost = 5;
var dogs = 0;

function buyDog() {
  if (score >= dogCost) {
    score = score - dogCost;
    dogs = dogs + 1;
    dogCost = Math.round(dogCost * 1.8969);
    if (dogs >= 10) {
      dogCost = Math.round((1.25 * dogCost) / 1.75);
    }

    document.getElementById("score").innerHTML = score;
    document.getElementById("dogCost").innerHTML = dogCost;
    document.getElementById("dogs").innerHTML = dogs;
    updateScorePerSecond();
  }
}

//miners
var minerCost = 100;
var miners = 0;

function buyMiner() {
  if (score >= minerCost) {
    score = score - minerCost;
    miners = miners + 1;
    minerCost = Math.round(minerCost * 1.869);
    if (miners >= 10) {
      minerCost = Math.round((1.25 * minerCost) / 1.75);
    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("minerCost").innerHTML = minerCost;
    document.getElementById("miners").innerHTML = miners;
    updateScorePerSecond();
  }
}

//thingys

var thingyCost = 5000;
var thingys = 0;

function buyThingy() {
  if (score >= thingyCost) {
    score = score - thingyCost;
    thingys = thingys + 1;
    thingyCost = Math.round(thingyCost * 1.869);
    if (thingys >= 10) {
      thingyCost = Math.round((1.25 * thingyCost) / 1.75);
    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("thingyCost").innerHTML = thingyCost;
    document.getElementById("thingys").innerHTML = thingys;
    updateScorePerSecond();
  }
}

//monkeys

var monkeyCost = 10000;
var monkeys = 0;

function buyMonkey() {
  if (score >= monkeyCost) {
    score = score - monkeyCost;
    monkeys = monkeys + 1;
    monkeyCost = Math.round(monkeyCost * 1.969);
    if (monkeys >= 10) {
      monkeyCost = Math.round((1.25 * monkeyCost) / 1.75);
    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("monkeyCost").innerHTML = monkeyCost;
    document.getElementById("monkeys").innerHTML = monkeys;
    updateScorePerSecond();
  }
}

//cubes
var cubeCost = 50000;
var cubes = 0;

function buyCube() {
  if (score >= cubeCost) {
    score = score - cubeCost;
    cubes = cubes + 1;
    cubeCost = Math.round(cubeCost * 1.8969);
    if (cubes >= 10) {
      cubeCost = Math.round((1.25 * cubeCost) / 1.75);
    }

    document.getElementById("score").innerHTML = score;
    document.getElementById("cubeCost").innerHTML = cubeCost;
    document.getElementById("cubes").innerHTML = cubes;
    updateScorePerSecond();
  }
}
//water
var waterCost = 100000;
var waters = 0;

function buyWater() {
  if (score >= waterCost) {
    score = score - waterCost;
    waters = waters + 1;
    waterCost = Math.round(waterCost * 1.8969);
    if (waters >= 10) {
      waterCost = Math.round((1.25 * waterCost) / 1.75);
    }

    document.getElementById("score").innerHTML = score;
    document.getElementById("waterCost").innerHTML = waterCost;
    document.getElementById("waters").innerHTML = waters;
    updateScorePerSecond();
  }
}

//rock
var rockCost = 750000;
var rocks = 0;

function buyRock() {
  if (score >= rockCost) {
    score = score - rockCost;
    rocks = rocks + 1;
    rockCost = Math.round(rockCost * 1.8969);
    if (rocks >= 10) {
      rockCost = Math.round((1.25 * rockCost) / 1.75);
    }

    document.getElementById("score").innerHTML = score;
    document.getElementById("rockCost").innerHTML = rockCost;
    document.getElementById("rocks").innerHTML = rocks;
    updateScorePerSecond();
  }
}

//save game thing

function savegame() {
  var gamesave = {
    score: score,
    tc: tc,
    miners: miners,
    minerCost: minerCost,
    dogs: dogs,
    dogCost: dogCost,
    thingys: thingys,
    thingyCost: thingyCost,
    monkeys: monkeys,
    monkeyCost: monkeyCost,
    ScorePerSecond: ScorePerSecond,
    cubes: cubes,
    cubeCost: cubeCost,
    waters: waters,
    waterCost: waterCost,
    rocks: rocks,
    rockCost: rockCost,
  };
  localStorage.setItem("gamesave", JSON.stringify(gamesave));
}

setInterval(function () {
  savegame();
}, 20000); // 20000ms = 20s

window.onload = function () {
  loadgame();
  updateScorePerSecond();
  document.getElementById("score").innerHTML = score;
  document.getElementById("tc").innerHTML = tc;
  document.getElementById("miners").innerHTML = miners;
  document.getElementById("minerCost").innerHTML = minerCost;
  document.getElementById("dogs").innerHTML = dogs;
  document.getElementById("dogCost").innerHTML = dogCost;
  document.getElementById("thingys").innerHTML = thingys;
  document.getElementById("thingyCost").innerHTML = thingyCost;
  document.getElementById("monkeys").innerHTML = monkeys;
  document.getElementById("monkeyCost").innerHTML = monkeyCost;
  document.getElementById("ScorePerSecond").innerHTML = ScorePerSecond;
  document.getElementById("cubes").innerHTML = cubes;
  document.getElementById("cubeCost").innerHTML = cubeCost;
  document.getElementById("waters").innerHTML = waters;
  document.getElementById("waterCost").innerHTML = waterCost;
  document.getElementById("rocks").innerHTML = rocks;
  document.getElementById("rockCost").innerHTML = rockCost;
};
//help from friend
document.addEventListener(
  "keydown",
  function (event) {
    if (event.ctrlKey && event.shiftKey && event.which == 76) {
      event.preventDefault();
      alert("chas#4297 did most of the save stuff btw so big shoutout");
    }
  },
  false
);

function loadgame() {
  var savedgame = JSON.parse(localStorage.getItem("gamesave"));
  if (typeof savedgame.score !== "undefined") score = savedgame.score;
   if (typeof savedgame.tc !== "undefined") tc = savedgame.tc;
  if (typeof savedgame.miners !== "undefined") miners = savedgame.miners;
  if (typeof savedgame.minerCost !== "undefined")
    minerCost = savedgame.minerCost;
  if (typeof savedgame.dogs !== "undefined") dogs = savedgame.dogs;
  if (typeof savedgame.dogCost !== "undefined") dogCost = savedgame.dogCost;
  if (typeof savedgame.thingys !== "undefined") thingys = savedgame.thingys;
  if (typeof savedgame.thingyCost !== "undefined")
    thingyCost = savedgame.thingyCost;
  if (typeof savedgame.monkeys !== "undefined") monkeys = savedgame.monkeys;
  if (typeof savedgame.monkeyCost !== "undefined")
    monkeyCost = savedgame.monkeyCost;
  if (typeof savedgame.ScorePerSecond !== "undefined")
    ScorePerSecond = savedgame.ScorePerSecond;
  if (typeof savedgame.cubes !== "undefined") cubes = savedgame.cubes;
  if (typeof savedgame.cubeCost !== "undefined") cubeCost = savedgame.cubeCost;
  if (typeof savedgame.waters !== "undefined") waters = savedgame.waters;
  if (typeof savedgame.waterCost !== "undefined")
    waterCost = savedgame.waterCost;
  if (typeof savedgame.rocks !== "undefined") rocks = savedgame.rocks;
  if (typeof savedgame.rockCost !== "undefined") rockCost = savedgame.rockCost;
}
//save hot key
document.addEventListener(
  "keydown",
  function (event) {
    if (event.ctrlKey && event.which == 83) {
      event.preventDefault();
      savegame();
      alert("Game Saved!");
    }
  },
  false
);

function savegamebutton() {
  savegame();
  alert("Game Saved!");
}
//reset button
function resetgame() {
  if (confirm("Are you sure you want to erase ALL of you progress!")) {
    var gamesave = {};
    localStorage.setItem("gamesave", JSON.stringify(gamesave));
    location.reload();
  }
}

//total clicks

var tc = 0

function updatetc (amount) {
    tc = tc + amount ;
    document.getElementById("tc").innerHTML = tc;
}


function test() {
  alert("Wow you found something im supposed to delete but didnt cool")
}
