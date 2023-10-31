function isPalindrome(str) {
  str = str.replace(/\s/g, "").toLowerCase();

  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("Radar"));
console.log(isPalindrome("A sacada da casa"));
console.log(isPalindrome("Teste de palíndromo"));

function arrayMaxMin(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

console.log(arrayMaxMin([1, 5, 3, 9, 2]));
console.log(arrayMaxMin([]));
console.log(arrayMaxMin([42]));
