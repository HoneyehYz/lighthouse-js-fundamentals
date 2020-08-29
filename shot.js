const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  const result = [];
  for (var i = 0; i < moves.length ; i++)
  {
    if (moves[i] === 'east')
    {
      x = x + 1;
    }
    else if (moves[i] === 'west')
    {
      x = x - 1;
    }
    else if (moves[i] === 'north')
    {
      y = y + 1;
    }
    else if (moves[i] === 'south')
    {
      y = y - 1;
    }
  }
  result.push(x,y);
  return result;
  //result.push(y);
  //console.log(result);
  //console.log(("["+ x+ "," + y + "]"));
}
finalPosition(moves);
