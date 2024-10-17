/*!
* clone 1.0.0
* License under MIT
*/

function clone(source) {
  const t = type(source);
  if (t !== "object" && t !== "array") {
    return source;
  }

  let target;

  if (t === "object") {
    target = {};
    for (const i in source) {
      if (Object.hasOwnProperty.call(source, i)) {
        target[i] = clone(source[i]);
      }
    }
  } else {
    target = [];
    for (let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]);
    }
  }

  return target;
}

export { clone };
