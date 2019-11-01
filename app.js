/**
    Codewars link:
    https://www.codewars.com/kata/58291fea7ff3f640980000f9
 */

function allContinents(list) {
  let allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  let currentContinents = new Set();

  list.map(elem => currentContinents.add(elem.continent));
  
  return allContinents.length === currentContinents.size;
}