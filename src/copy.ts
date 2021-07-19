// 浅拷贝，做一层遍历拷贝
export function shallowCopy(obj) {
  if(typeof obj !== 'object') return

  let res = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      res[key] = element
    }
  }

  return res
}

// 遍历对象中所有属性并拷贝，如果是对象类型的属性，则递归遍历
export function deepClone(obj) {
  if(typeof obj !== 'object') return

  let res = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if(typeof element === 'object') {
        res[key] = deepClone(element)
      } else {
        res[key] = element
      }
      
    }
  }
  return res
}