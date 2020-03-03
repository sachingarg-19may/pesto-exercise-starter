
function duplicateLetters(...args) {
  var unique = [];
  for(let i = 0; i < args[0].length; i++) {
    var char = unique.find(c => c.label === args[0][i]);
    if (char) {
      char.value += 1;
    } else {
      unique.push({ label: args[0][i], value: 1 });
    }
  }


  var most = unique.filter(c => c.value > 1).sort(c => c.value);
  return most.length > 0 ? most[0].value : false;
}

export {
  duplicateLetters,
};
