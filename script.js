function isPalindrome(str) {
    
  str = str.replace(/\s/g, "").toLowerCase();

  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("Radar"));
console.log(isPalindrome("A sacada da casa"));
console.log(isPalindrome("Teste de palíndromo"));

function arrayMaxMin(arr) {
  /* Seu código aqui */
}
