function isPalindrome(str) {
  str = str.replace(/\s/g, "").toLowerCase();

  for (let start = 0, end = str.length - 1; start < end; start++, end--) {
    if (str[start] !== str[end]) {
      return false;
    }
  }

  return true;
}

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
