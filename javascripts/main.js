"use strict";

// A base Robot function
function Robot () {
  this.attackType = null;
  this.baseDamage = Math.floor(Math.random() * 10);
  this.health = 0;
  this.weapon = null;
}

Robot.prototype.attack = function (target) {
  target.health -= this.baseDamage;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


// Define three robot type functions (e.g. Drone, Bipedal, ATV)
function Aerial () {
  this.attackType = "Aerial";
  this.health = getRandomInt(50, 80);
  this.damage = 20;
}
Aerial.prototype = new Robot();

function Ground () {
  this.attackType = "Ground";
  this.health = getRandomInt(60, 120);
  this.damage = 30;
}
Ground.prototype = new Robot();


//Aerial Robots: Drone, Bipedal, ATV
function AerialDrone () {
  this.type = "Drone";
  this.baseDamage += 5;
}
AerialDrone.prototype = new Aerial();

function AerialBipedal () {
  this.type = "Bipedal";
	this.baseDamage += 10;
}
AerialBipedal.prototype = new Aerial();

function AerialATV () {
  this.type = "ATV";
	this.baseDamage += 15;
}
AerialATV.prototype = new Aerial();

//Ground Robots: Drone, Bipedal, ATV
function GroundDrone () {
  this.type = "Drone";
	this.baseDamage += 12;
}
GroundDrone.prototype = new Ground();

function GroundBipedal () {
  this.type = "Bipedal";
	this.baseDamage += 17;
}
GroundBipedal.prototype = new Ground();

function GroundATV () {
  this.type = "ATV";
	this.baseDamage += 22;
}
GroundATV.prototype = new Ground();


// GroundBipedal.prototype.attack(GroundATV);
var Jess = new GroundATV();
var smaug = new GroundBipedal();
console.log("Jess health", Jess.health);
console.log("smaug health", smaug.health);

smaug.attack(Jess);
console.log("Jess health", Jess.health);
console.log("smaug health", smaug.health);

const outputDiv = $("#output");
let output = '<p>outputDiv</p>';
outputDiv.append(output);

