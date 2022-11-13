const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
function creteLi(element) {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add('item');
  console.log(li);
  return li;
}
const lis = ingredients.map((ingredient) => creteLi(ingredient));
console.log(lis);
ingredientsList.append(...lis);


