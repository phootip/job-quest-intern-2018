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

console.log(shift([1, 2, 3, 4 ,5], 'right', 3));