"use strict";

const Robot = () => {
	this.baseDamage = Math.floor(Math.random() * 10);
	this.health = 500;
	this.weapon = null;
}
Robot.prototype.attack = function (target) {
  target.health -= this.baseDamage;
}


const outputDiv = $("#output");
let output = '<p>outputDiv</p>';
outputDiv.append(output);
//Drone, Bipedal, ATV

// var sum = function () {
// 	let a=1, b=2;
// 	return a+b;
// }
// console.log("hardcoded sum in es5", sum());

// var sum2 = () => {
// 	let a=1, b=2;
// 	return a+b;
// }
// console.log("hardcoded sum2 in es5", sum2());