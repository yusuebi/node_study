message = "外側";

var test = function () {
  var message = "関数内";
  console.log(`1: ${message}`);

  {
    let message = "ブロック内";
    console.log(`2: ${message}`);
  }

  console.log(`3: ${message}`);
};

test();

console.log(`4: ${message}`);
