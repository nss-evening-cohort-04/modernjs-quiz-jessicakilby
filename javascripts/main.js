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
  this.health = 50 + getRandomInt(50, 80);
  this.damage = getRandomInt(10, 20);
}
Aerial.prototype = new Robot();

function Ground () {
  this.attackType = "Ground";
  this.health = 30 + getRandomInt(60, 120);
  this.damage = getRandomInt(15, 25);
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

  const showSelection = $("#selectResult");  
  const outputDiv = $("#output");
  const submitBtn = $("#submit");
  const attackBtn = $("#attack");
  let player1;
  let player2;
  let name1;
  let name2;
  const select1 = $("#select1");
  const select2 = $("#select2");

  submitBtn.click(createPlayer);
  attackBtn.click(attack);

  function createPlayer () {
    event.preventDefault();
    name1 = $("#name1").val();
    name2 = $("#name2").val();
    player1 = new window[select1.val()]();
    player2 = new window[select2.val()]();
    console.log("player1", player1);
    console.log("player2", player2);
    
    let output = `<p>${name1} is a/an ${player1.name} robot and starts with ${player1.health} health and ${player1.damage} damage.</p>`;
    output += `<p>${name2} is a/an ${player2.name} robot and starts with ${player2.health} health and ${player2.damage} damage.</p>`;
    showSelection.append(output);
  }

  function attack (target) {
    console.log("name1", name1);
    // target.health -= this.damage;
    player1.health -= player2.damage;
    player2.health -= player1.damage;

    if(player1.health>0 && player2.health>0){
      let output = `<p>${name1}, a/an ${player1.name} robot, now has ${player1.health} health.</p>`;
      output += `<p>${name2}, a/an ${player2.name} robot, now has ${player2.health} health.</p>`;
      outputDiv.append(output);
    }else if(player2.health<0){
      let output = `<p>${name1}: ${player1.name} robot WON and DEFEATED ${name2}: ${player2.name}! Bwahahahaha!!!`;
      outputDiv.append(output);
    }else{
      let output = `<p>${name2}: ${player2.name} robot WON and DEFEATED ${name1}: ${player1.name}! Bwahahahaha!!!`;
      outputDiv.append(output);
    }
  }


});