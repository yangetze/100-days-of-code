// Only change code below this line
function countdown(n){
  if(n <= 0){
    return [];
  } else {
    const countdownArray = countdown(n - 1);
    countdownArray.unshift(n);
    return countdownArray;
  }
}
// Only change code above this line

console.log(countdown(3))
