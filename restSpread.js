function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

let filterOutOdds = (...vals) => {
let nums = Array.prototype.slice.call(arguments);
return nums.filter((num) => {
    return num % 2 === 0;
})
};

let findMin = (...vals) => Math.min(...vals)

let mergeObjects = (...objs) => {
    let newObj = {...objs.reduce((acc, obj) => ({...acc, ...obj}), {})};
    return newObj;
};

let doubleAndReturnArgs = (arr, ...nums) => {
    let double = (...nums) => {
        return nums.map(nums => nums*2);
}
return [...arr, ...double(...nums)]
}

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  }
  const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  }
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  }