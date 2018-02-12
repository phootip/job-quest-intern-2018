let hero = require('./hero.json');

let total = 0;

let intHero = 0;
let intHeroLevel = 0;

let mostAssist = "";
let cAssist = 0;

let worstRatio = "";
let cRatio = 1000;
for(let i=0;i<hero.length;i++){
  let chero = hero[i];
  total += chero.networth;
  if(chero.primary_attribute === "intelligent"){
    intHero++;
    intHeroLevel += chero.level;
  }
  if(chero.assist > cAssist){
    cAssist = chero.assist;
    mostAssist = chero.name;
  }
  if(chero.death > 0 && chero.kill/chero.death < cRatio){
    cRatio = chero.kill/chero.death;
    worstRatio = chero.name;
  }
}
console.log("Average networth : "+total/hero.length);
console.log("Average level of intelligent hero : "+intHeroLevel/intHero);
console.log("Most assist : "+mostAssist);
console.log("Worst kill/death ratio : "+worstRatio);
