let firstBlank = prompt("Enter a Adj");
let secondBlank = prompt("Enter a crazy animal");
let thridBlank = prompt("Enter a silly verb");
let fourthBlank = prompt("Name a random object");
let fithBlank = prompt("verb ending in -ing");
let sixthBlank = prompt("-");
let seventhBlank = prompt("-");
let eighthBlank = prompt("-");
let ninethBlank = prompt("-");
console.log(firstBlank);
console.log(secondBlank);
console.log(thridBlank);
console.log(fourthBlank);
console.log(fithBlank);
console.log(sixthBlank);
console.log(seventhBlank);
console.log(eighthBlank);
console.log(ninethBlank);

let myStory = `On Christmas Eve in a ${firstBlank} village, a ${secondBlank} was busy ${thridBlank} presents. Suddenly, it stumbled upon a ${fourthBlank} that was ${fithBlank} in the snow. The (animal) couldn’t believe its eyes! Just then, a (wacky adjective) elf appeared and shouted, “You’ve found Santa’s (absurd noun)!” The (animal) was (hilarious emotion) but asked, “What do I do with this (random noun)?” The elf replied, “You must (silly verb) it to the (even sillier place)!” So, the (animal) set off on a (funny adjective) adventure. Along the way, it met a (funny adjective) snowman who helped it (silly verb) through a (silly obstacle). In the end, they delivered the (absurd noun) just in time for Christmas, and everyone celebrated by (silly verb ending in -ing) under the (silly noun).`;
console.log(myStory);

document.getElementById('story').innerHTML = myStory;
