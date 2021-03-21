/*
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

function killer(suspectInfo, dead) {

  const suspects = Object.keys(suspectInfo);
  let match = {};
  let killer = '';
  for (suspect of suspects) {     // підозрювані
    for (people of dead) {        // вбиті
      if (suspectInfo[suspect].includes(people)) {
        if (suspect in match) {
          match[suspect]++
        } else {
          match[suspect] = 1;
        }
      }
    }
    if (dead.length === match[suspect]) {
      killer = suspect;
    }
  }
  return killer;
};

const suspects = {

  'Johnny': ['David', 'Kyle', 'Lucas'],
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
};

const killed = ['Lucas', 'Bill'];

const test = killer(suspects, killed);
console.log(test);