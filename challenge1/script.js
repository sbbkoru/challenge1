const spinWord = function (string) {
  let stringArray = "";
  if (string.length >= 5) {
    for (let i = string.length - 1; i >= 0; i--) {
      stringArray += string[i];
    }
  } else {
    stringArray = string;
  }
  return stringArray;
};

console.log(spinWord("can"));
console.log(spinWord("berkay"));

// CODEWARS 1

const spinwords2 = function (string) {
  let stringArray = [];
  const newArray = string.split(" ");
  newArray.forEach(function (el) {
    el.length > 4
      ? stringArray.push(el.split("").reverse().join(""))
      : stringArray.push(el);
  });
  return stringArray.join(" ");
};

console.log(spinwords2("cucu cubukcu"));

const myFunction = function (string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
};

console.log(myFunction("berkay büyükkoru"));
