// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  // Code here!
  return (4 / 3) * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return (1 / 3) * height * PI * Math.pow(radius, 2);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let volume = 0;

  solids.forEach(solid => {
    if (solid.type === 'sphere') {
      volume += sphereVolume(solid.radius);
    }

    if (solid.type === 'cone') {
      volume += coneVolume(solid.radius, solid.height);
    }

    if (solid.type === 'prism') {
      volume += prismVolume(solid.height, solid.width, solid.depth);
    }
  });

  return volume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40,
};

const smallSphere = {
  type: 'sphere',
  radius: 10,
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
