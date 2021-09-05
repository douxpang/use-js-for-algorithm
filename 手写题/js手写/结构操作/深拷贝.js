// https://mp.weixin.qq.com/s/gQhfwoaxqHh4hRG1BQqKow

var syb = Symbol("obj");
const target = {
  filed0: syb,
  field1: 1,
  field2: "11",
  field3: {
    child: 1,
  },
  say: function () {
    console.log("hi");
  },
  field4: [1, 2, 3],
  field5: undefined,
};

// 乞丐
function clone1(obj) {
  return JSON.parse(JSON.stringify(obj));
}
console.log('乞丐',clone1(target))

// 能用
function clone2(target) {
  if (typeof target === "object") {
    let cloneTemp = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTemp[key] = clone2(target[key]);
    }
    return cloneTemp;
  } else {
    return target;
  }
}
console.log(clone2(target));

// 解决循环调用  用一个map存储

function clone3(target, map = new Map()) {
  if (typeof target === "object") {
    let cloneTemp = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return target;
    }
    map.set(target, cloneTarget);

    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTemp;
  } else {
    return target;
  }
}

// 优化for in
function phrFor(array, fn) {
  let index = -1;
  let length = array.length;
  while (++index < length) {
    fn(array[index], index);
  }
  return array;
}

function clone4(target, map = new Map()) {
  if (typeof target === "object") {
    let targetTemp = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return target;
    }
    map.set(target, targetTemp);

    const keys = Array.isArray(target) ? undefined : Object.keys(target);

    phrFor(keys || target,(value,key) => {
        if(keys) {
            key = value;
        }
        targetTemp[key] = clone4(target[key],map);
    })
    return targetTemp
  }else {
      return target
  }
}
console.log('第四版',clone4(target));
