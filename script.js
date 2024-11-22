let adj = prompt("Enter a crazy Adj");
let animal = prompt("Enter a crazy animal");
let verb = prompt("Enter a silly verb");
let obj = prompt("Name a random object");
let noun = prompt("Name an absurd noun");
let emotion = prompt("Name a hilarious emotion");
let place = prompt("Name an silly place");
let obstacle = prompt("Name an silly obstacle");
let verbing = prompt("Enter a silly verb ending in ing");

let myStory = `On Christmas Eve in a <span class="adj">${adj}</span> village, a <span class="animal">${animal}</span> was busy <span class="verb">${verb}</span> presents. Suddenly, it stumbled upon a <span class="obj">${obj}</span> that was <span class="verb">${verb}</span> in the snow. The <span class="animal">${animal}</span> couldn’t believe its eyes! Just then, a <span class="adj">${adj}</span> elf appeared and shouted, “You’ve found Santa’s <span class="noun">${noun}</span>!” The <span class="animal">${animal}</span> was <span class="emotion">${emotion}</span> but asked, “What do I do with this <span class="noun">${noun}</span>?” The elf replied, “You must <span class="verb">${verb}</span> it to the <span class="place">${place}</span>!” So, the <span class="animal">${animal}</span> set off on a <span class="adj">${adj}</span> adventure. Along the way, it met a <span class="adj">${adj}</span> snowman who helped it <span class="verb">${verb}</span> through a <span class="obstacle">${obstacle}</span>. In the end, they delivered the <span class="noun">${noun}</span> just in time for Christmas, and everyone celebrated by <span class="verbing">${verbing}</span> under the <span class="noun">${noun}</span>.`;

document.getElementById('story').innerHTML = myStory;
