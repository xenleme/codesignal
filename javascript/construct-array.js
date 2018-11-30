// Given an integer size, return an array containing each integer from 1 to size
// in the following order:
//
// 1, size, 2, size - 1, 3, size - 2, 4, ...
//
// Example
//
// For size = 7, the output should be
// constructArray(size) = [1, 7, 2, 6, 3, 5, 4].

// Input:
// size: 7
// Expected Output:
// [1, 7, 2, 6, 3, 5, 4]

function constructArray(size) {
  const result = [];
  for (let i = 0; i < size; i++) {
    if (!result.includes(i + 1)) result.push(i + 1);
    if (!result.includes(size - i)) result.push(size - i);
  }
  return result;
}

console.log(constructArray(7));
