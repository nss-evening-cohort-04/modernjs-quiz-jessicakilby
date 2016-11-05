"use strict";

//1. A base Robot function
function Robot () {
  this.attackType = null;
  this.damage = Math.floor(Math.random() * 10);
  this.health = 0;
  this.weapon = null;
}
// es6 arrow not working
// let Robot = () => {
//   this.attackType = null;
//   this.damage = Math.floor(Math.random() * 10);
//   this.health = 0;
//   this.weapon = null;
// }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//4. Define at least 2 specific robot model functions for each type
//5. Give each robot model a different range of health
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


//2. Define three robot type functions (e.g. Drone, Bipedal, ATV)
//3. Aerial Robots: Drone, Bipedal, ATV
//6. Give each robot model a different range of damage they do using the same technique
function AerialDrone () {
  this.name = "Aerial Drone";
  this.type = "Drone";
  this.damage += 5;
}
AerialDrone.prototype = new Aerial();

function AerialBipedal () {
  this.name = "Aerial Bipedal";
  this.type = "Bipedal";
	this.damage += 10;
}
AerialBipedal.prototype = new Aerial();

function AerialATV () {
  this.name = "Aerial ATV";
  this.type = "ATV";
	this.damage += 15;
}
AerialATV.prototype = new Aerial();

//2. Define three robot type functions (e.g. Drone, Bipedal, ATV)
//3. Ground Robots: Drone, Bipedal, ATV
//6. Give each robot model a different range of damage they do using the same technique
function GroundDrone () {
  this.name = "Ground Drone";
  this.type = "Drone";
	this.damage += 12;
}
GroundDrone.prototype = new Ground();

function GroundBipedal () {
  this.name = "Ground Bipedal";
  this.type = "Bipedal";
	this.damage += 17;
}
GroundBipedal.prototype = new Ground();

function GroundATV () {
  this.name = "Ground ATV";
  this.type = "ATV";
	this.damage += 22;
}
GroundATV.prototype = new Ground();


$(document).ready(function(){

  let showSelection = $("#selectResult");  
  let outputDiv = $("#output");
  let submitBtn = $("#submit");
  let attackBtn = $("#attack");
  submitBtn.click(createPlayer);
  attackBtn.click(attack);

  function createPlayer () {
    event.preventDefault();
    let name1 = $("#name1").val();
    let name2 = $("#name2").val();
    let select1 = $("#select1").val();
    let select2 = $("#select2").val();

    console.log("select1", select1.id());
    
    let output = `<p>${name1} is a ${select1} robot and starts with ${select1.health} health.</p>`;
    output += `<p>${name2} is a ${select2} robot and starts with ${select2.health} health.</p>`;
    showSelection.append(output);
  }

  function attack (target) {
    target.health -= this.damage;

    let output = `<p>fighting happens here</p>`;
    outputDiv.append(output);
  };


});