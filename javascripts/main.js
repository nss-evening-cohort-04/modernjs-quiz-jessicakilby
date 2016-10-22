"use strict";

function Robot () {
  this.baseDamage = Math.floor(Math.random() * 10);
  this.health = 500;
  this.weapon = null;
}

Robot.prototype.attack = function (target) {
  target.health -= this.baseDamage;
};

function Drone () {
  this.type = "Drone";
  this.attackType = "Drone";
}
Drone.prototype = new Robot();

function Bipedal () {
  this.type = "Bipedal";
  this.attackType = "Bipedal";
}
Bipedal.prototype = new Robot();

function ATV () {
  this.type = "ATV";
  this.attackType = "ATV";
}
ATV.prototype = new Robot();

//Aerial Robots: Drone, Bipedal, ATV
function AerialDrone () {
	this.baseDamage += 5;
}
AerialDrone.prototype = new Drone();

function AerialBipedal () {
	this.baseDamage += 10;
}
AerialBipedal.prototype = new Bipedal();

function AerialATV () {
	this.baseDamage += 15;
}
AerialATV.prototype = new ATV();

//Ground Robots: Drone, Bipedal, ATV
function GroundDrone () {
	this.baseDamage += 12;
}
GroundDrone.prototype = new Drone();

function GroundBipedal () {
	this.baseDamage += 17;
}
GroundBipedal.prototype = new Bipedal();

function GroundATV () {
	this.baseDamage += 22;
}
GroundATV.prototype = new ATV();

console.log("Robot", Robot);

const outputDiv = $("#output");
let output = '<p>outputDiv</p>';
outputDiv.append(output);

