const between = (x, min, max) => {
  return x >= min && x <= max;
};

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

const coordsInRange = (testCoords, trueCoods, pixelRange) => {
  if (
    shallowEqual(testCoords, trueCoods) ||
    (between(
      testCoords.x,
      trueCoods.x - pixelRange,
      trueCoods.x + pixelRange
    ) &&
      between(testCoords.y, trueCoods.y - pixelRange, trueCoods.y + pixelRange))
  ) {
    return true;
  }
  return false;
};

function getElementXY() {
  const xOffset = window.event.offsetX;
  const yOffset = window.event.offsetY;
  return { x: xOffset, y: yOffset };
}

export { getElementXY, coordsInRange };
