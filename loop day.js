// #1
function onlyOdds(num) {
  let sum = 0;
  for (i = 0; num > i; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
    } else {
      sum = sum + 0;
    }
  }
  return sum;
}

// #2
function crazyCaps(str) {
  let newWord = "";
  for (i = 0; i < str.length; i++) {
    if (i % 2 != 0) {
      newWord += str[i].toUpperCase();
    } else {
      newWord += str[i].toLowerCase();
    }
  }
  return newWord;
}

// #3
function bacteriaTime(currentNum, targetNum) {
  let time = 0;
  if (targetNum < currentNum) {
    return "targetNum must be larger than currentNum";
  } else {
    while (currentNum < targetNum) {
      currentNum = currentNum * 2;
      time = time + 20;
    }
    return time;
  }
}
console.log(bacteriaTime());

// #4

// #5

// #6
function myIndexOf(source, searchValue, startIdx) {
  let searchTerm = "";
  if (startIdx === undefined) {
    startIdx = 0;
  }
  for (i = startIdx; i < source.length; i++) {
    searchTerm = source.slice(i, searchValue.length + i);
    if (searchValue === searchTerm) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf("here and there", "here", 4));

//#7
