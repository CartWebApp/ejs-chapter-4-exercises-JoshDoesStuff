function deepEqual(value, reference) {
  function deepEqual(a, b) {
    if (typeof a !== typeof b) {
      return false;
    }
    if (typeof a == 'object') {
      for (let [key, value] of Object.entries(a)) {
        if (!Object.keys(b).includes(key)) {
          return false;
        }
      }
      return deepEqual(value, b[key]);
    }
    return a === b;
  }
  let obj = {
    here: { is: "an"}, object: 2 };
    console.log(deepEqual(obj, obj));
    console.log(deepEqual
      (obj, { here: 1, object: 2 }));
    console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
  }





  // tests
  let obj = { here: { is: "an" }, object: 2 };
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, { here: 1, object: 2 }));
  // → false
  console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
