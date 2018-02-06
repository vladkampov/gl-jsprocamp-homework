
// helper. May be useful when need to select random monster, if you need it
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Game = function() {

}

const Hero = function(name, charClass) {

}


const Monster = function(charClass) {

}




/* Game Population mechanism should go below */


/* End of your solution for Game Population mechanism */

export default {
  Game,
  Hero,
  Monster
};
