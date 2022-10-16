/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let lowserStr = s.toLowerCase();
  for (let i = 0; i < alphabets.length - 1; i++) {
    if (lowserStr.indexOf(alphabets[i]) < 0) {
      console.log(alphabets[i]);
      return false;
    }
  }
  return true;
}

function main() {
  const result = pangrams(
    "We promptly judged antique ivory buckles for the next prize"
  );
  console.log(result + "\n");

  let result1 = panagramUsingSet(
    "We promptly judged antique ivory buckles for the next prize"
  );
  console.log(result1 + "\n");
}

function panagramUsingSet(str) {
  var charSet = new Set();
  str
    .toLowerCase()
    .split("")
    .forEach(function (char) {
      if (char !== " ") {
        charSet.add(char);
      }
    });

  console.log(charSet);
  return charSet.size === 26;
}

main();
