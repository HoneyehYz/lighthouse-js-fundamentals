function range(start, end, step){
  var result = [];
  if( start === null || end === null || step === null || end < start || step < 0 ){
    result = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      result.push(i);
    }
  }
  return result;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

