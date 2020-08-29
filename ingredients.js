const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0
while(i< ingredients.length)
{
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("Here is the ingredients using a for loop");
for (var j = 0 ; j < ingredients.length;j++)
{
  
  console.log(ingredients[j]);

}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
newIngredients = ingredients.reverse();
console.log("Here is the reversed ingredients using a for loop");
for (var k = 0 ; k < newIngredients.length;k++)
{
  
  console.log(newIngredients[k]);

}



