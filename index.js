// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//cats.push("Ralph");

function destructivelyAppendCat(name="Ralph") {
    cats.push(name);
}

//destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name="Bob") {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name="Broom") {
     return [...cats,"Broom"];
}

function prependCat(name="Arnold") {
    return ["Arnold",...cats];
}

function removeLastCat() {
   return cats.slice(0,-1)
}

function removeFirstCat() {
    return cats.slice(1)
 }


