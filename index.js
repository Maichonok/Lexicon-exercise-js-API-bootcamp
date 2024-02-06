//Exercise 1
//1.1
fetch("https://majazocom.github.io/Data/pokemons.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
//Array(20)

async function logPokemons() {
  const response = await fetch(
    "https://majazocom.github.io/Data/pokemons.json"
  );
  const pokemons = await response.json();
  console.log(pokemons);
}

logPokemons();
//Array(20)

//1.2
async function showAllPokemonsToConsole() {
  const response = await fetch(
    "https://majazocom.github.io/Data/pokemons.json"
  );
  const pokemons = await response.json();
  pokemons.forEach((pokemon) => {
    console.log(pokemon);
  });
}
showAllPokemonsToConsole();

//1.3
async function showAllPokemonsToScreen() {
  const response = await fetch(
    "https://majazocom.github.io/Data/pokemons.json"
  );
  const pokemons = await response.json();
  const header = document.createElement("h3");
  header.textContent = "My Awesome Pokémon List";
  document.body.append(header);
  const ol = document.createElement("ol");
  pokemons.forEach((pokemon) => {
    const li = document.createElement("li");
    li.textContent = pokemon.name;
    ol.append(li);
  });
  document.body.append(ol);
}
showAllPokemonsToScreen();

//Exercise 2
//2.1
async function logDogs() {
  const response = await fetch("https://majazocom.github.io/Data/dogs.json");
  const dogs = await response.json();
  console.log(dogs);
}

logDogs();
//Array(77)

//2.2
async function showAllDogsToConsole() {
  const response = await fetch("https://majazocom.github.io/Data/dogs.json");
  const dogs = await response.json();
  dogs.forEach((dog) => {
    console.log(dog);
  });
}
showAllDogsToConsole();

//2.3
async function showAllDogsToScreen() {
  const response = await fetch("https://majazocom.github.io/Data/dogs.json");
  const dogs = await response.json();
  const header = document.createElement("h3");
  header.textContent = "My Awesome Dog List";
  document.body.append(header);
  const ol = document.createElement("ol");
  dogs.forEach((dog) => {
    const li = document.createElement("li");
    li.textContent = dog.name;
    ol.append(li);
  });
  document.body.append(ol);
}
showAllDogsToScreen();
