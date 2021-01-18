const checkAir = function (samples, threshold) {
  let dirtyCounter = 0;
  //loop array to counter;
  for (let sample of samples) {
    if (sample === 'dirty') {
      dirtyCounter++;
    }
  }
  //calculate pollution level through dirty percentage
  let percentageDirty = dirtyCounter / samples.length;
  //threshold = percentage to be considered clean, must be under threshold to be 'Clean'
  if (percentageDirty >= threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

//testing logs
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

/*
Expected Output:
Polluted
Polluted
Clean
*/