//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



function spinalCase(str) {
  return str.match(/([A-Z]*[a-z]+)/g).map(x=>x.toLowerCase()).join("-");
};

spinalCase('This Is Spinal Tap');