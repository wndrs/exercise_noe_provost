var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "",
  "word",
  "ab abc",
  "abc cba",
  "cd cba ab abc ac"
]

let outputs = [
  "",
  "word",
  "abc",
  "cba",
  "abc"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var splitStr = str.split(" ");
    var ret = "";
    for(var i =0; i < splitStr.length; i++){
        
        var theString =splitStr[i];
        if(theString.length >= ret.length){
            ret = theString;
        }
    }
    return ret;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

