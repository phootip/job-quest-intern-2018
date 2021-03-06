### TakeMeTour Internship Program 2018

Hi all applicants! Welcome to TakeMeTour Internship Program 2018. Being and intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be writted in Javascript language. The code will be tested with Node8, so you can use all Javascript features that equivalent to Node8.

1. Write a function that shift the elements of array to left or right by n elements in infinity loop. the function recevice 3 parameters, 1st is an array, 2nd the is direction ('left' or 'right'), 3rd is the number of elements will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```
function shift(list,side,num){
  let ans = [];

  if(side != "right" && side != "left") return "wrong side";
  num %= list.length;
  if(side == "right") num = list.length - num;
  for(let i = 0 ; i<num ; i++){
    list.push(list.shift());
    
  }
  return list;
}
```
2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2018/blob/master/hero.json) and write a code to caculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```
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
```

## Simple Web Application: A joke from Chuck Norris.

This part of quest will be a challenging one. You are going to make a simple web application which allow users to get some joke from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- UI Design as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: GraphQL is a query tool which can control structure of queried object as well as the amount of object. Compare to REST API, GraphQL gives more option to client designing object themselves while REST API limit their structure and function to what they have.


Q2: Please explain how javascript benefits from cross-platform development

A2: Javascript run on browser that means every technology that use browser can also use javascript. So application developed by javascript can be run on almost every tools we have.

Q3: What do you expect to get from during an internship at TakeMeTour?

A3: I want to polish my skill in javascript and many thing that I haven't learned (E.g. functional language, block chain, machine learning). I want to learn things hard to find in University.

## Submitting

Please fork this repo and submit your repository at jet@takemetour.com along with your contact information.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
