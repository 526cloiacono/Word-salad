let adj = prompt("Enter a crazy Adj");
let animal = prompt("Enter a crazy animal");
let verb = prompt("Enter a silly verb");
let obj = prompt("Name a random object");
let noun = prompt("Name an absurd noun");
let emotion = prompt("Name an hilarious emotion");
let place = prompt("Name an silly place");
let obstacle = prompt("Name an silly obstacle");
let verbing = prompt("Enter a silly verb ending in ing");
console.log(adj);
console.log(animal);
console.log(verb);
console.log(obj);
console.log(noun);
console.log(emotion);
console.log(place);
console.log(obstacle);
console.log(verbing);

let myStory = `On Christmas Eve in a ${adj} village, a ${animal} was busy ${verb} presents. Suddenly, it stumbled upon a ${obj} that was ${verb} in the snow. The ${animal} couldn’t believe its eyes! Just then, a ${adj} elf appeared and shouted, “You’ve found Santa’s ${noun}!” The ${animal} was ${emotion} but asked, “What do I do with this ${noun}?” The elf replied, “You must ${verb} it to the ${place}!” So, the ${animal} set off on a ${adj} adventure. Along the way, it met a ${adj} snowman who helped it ${verb} through a ${obstacle}. In the end, they delivered the ${noun} just in time for Christmas, and everyone celebrated by ${verbing} under the ${noun}.`;
console.log(myStory);

document.getElementById('story').innerHTML = myStory;
