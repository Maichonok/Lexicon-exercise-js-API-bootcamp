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

//Exercise 3
//3.1
async function logBooks() {
  const response = await fetch("https://majazocom.github.io/Data/books.json");
  const books = await response.json();
  console.log(books);
}

logBooks();
//Array(5)

//3.2
async function showBooks() {
  const response = await fetch("https://majazocom.github.io/Data/books.json");
  const books = await response.json();
  // filter the books with less than 500 pages
  const shortBooks = books.filter((book) => book.pages < 500);

  const header = document.createElement("h3");
  header.textContent = "My Book List";
  document.body.append(header);
  // render the short books

  shortBooks.forEach(renderBook);
}

function renderBook(book) {
  const div = document.createElement("div");
  div.textContent = book.title + " - " + book.pages + " pages";
  document.body.appendChild(div);
}

showBooks();

//Exercise 4
//3.1
async function logVisitors() {
  const response = await fetch(
    "https://majazocom.github.io/Data/attendees.json"
  );
  const visitors = await response.json();
  console.log(visitors);
}

logVisitors();
//Array(7)

//4.2
async function showVisitors() {
  const response = await fetch(
    "https://majazocom.github.io/Data/attendees.json"
  );
  const visitors = await response.json();
  const attendVisitors = visitors.filter(
    (visitor) => visitor.attending === true
  );

  const header = document.createElement("h3");
  header.textContent = "List of attending visitors";
  document.body.append(header);

  attendVisitors.forEach(renderVisitor);
}

function renderVisitor(visitor) {
  const div = document.createElement("div");
  div.textContent = visitor.name;
  document.body.appendChild(div);
}

showVisitors();

//4.3
async function showVisitorsWithAllergies() {
  const response = await fetch(
    "https://majazocom.github.io/Data/attendees.json"
  );
  const visitors = await response.json();
  const attendVisitors = visitors.filter(
    (visitor) => visitor.attending === true && visitor.allergies.length > 0
  );

  const header = document.createElement("h3");
  header.textContent = "List of attending visitors with allergies";
  document.body.append(header);

  attendVisitors.forEach(renderVisitor);
}

function renderVisitor(visitor) {
  const div = document.createElement("div");
  div.textContent = visitor.name;
  document.body.appendChild(div);
}

showVisitorsWithAllergies();
