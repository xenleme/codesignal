// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half of 
// the digits is equal to the sum of the second half.
//
// Given a ticket number n, determine if it's lucky or not.
//
// Example
//
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
    let firstHalf = 0;
    let secondHalf = 0;

    for (let i = 0; i < n.toString().length / 2; i++) {
        firstHalf += parseInt(n.toString()[i]);
    }

    for (let i = n.toString().length / 2; i < n.toString().length; i++) {
        secondHalf += parseInt(n.toString()[i]);
    }

    return firstHalf === secondHalf;
}

console.log(isLucky(1230));
