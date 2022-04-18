const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "banana",
];

// // While Loop on Banana Bread Ingrdients Array
// console.log("Banana Bread ingredients:");
// let i = 0;
// while (i < ingredients.length) {
//   console.log(ingredients[i]);
//   i++;
// }

// // For Loop on Banana Bread Ingrdients Array
// console.log("Banana Bread ingredients:");
// for (i = 0; i < ingredients.length; i++) {
//   console.log(ingredients[i]);
// }

// // Using For Loop on Banana Bread Ingrdients Array to loop the ingrdients backwards
console.log("Banana Bread ingredients:");
for (i = ingredients.length; i >= 0; i--) {
  console.log(ingredients[i]);
}
