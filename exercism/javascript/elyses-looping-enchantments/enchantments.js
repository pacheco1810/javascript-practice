// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let numberRepeat = 0;
  stack.forEach(function(number) {
      if (number === card){
          numberRepeat += 1;
      }
  }); 
  return numberRepeat; 
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let numberOfCards = 0;
  // 🚨 Use a `for...of` loop
  for(const number of stack){
    let isEven = number % 2 === 0; 
    if(type === isEven){
      numberOfCards++; 
    }
  }
  return numberOfCards;
}
