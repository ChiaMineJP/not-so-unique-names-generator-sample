/*
yarn init -y
yarn add unique-names-generator
node index.js
 */
const {uniqueNamesGenerator, animals, colors} = require("unique-names-generator");

const start = 1000; // Starting seed.
const nTrying = 100; // Number of try
const set = {};
for(let s=start;s<=start+nTrying;s++){
  const un = uniqueNamesGenerator({
    dictionaries: [colors, animals],
    length: 2,
    seed: s,
    separator: ' ',
    style: 'capital',
  });
  
  if(typeof set[un] === "number"){set[un]++;}
  else {set[un] = 1;}
}
let max = 0;
let maxIndex = 0;
let maxName = "";
Object.values(set).forEach((count, i) => {
  if(count > max){
    max = count;
    maxIndex = i;
    maxName = Object.keys(set)[i];
  }
});
console.log(`"${maxName}" appears ${max} times out of ${nTrying}`);
