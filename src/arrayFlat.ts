import isArray from "./isArray";

/**
 * 实现数组扁平化，通常要借助于数组的concat方法，传入一个数组，可将其中的每一项合并到另一个数组中，实现一次扁平化。
 * 
 * concat方法既可以传入数组，又可以传入值，while循环实现方式正是利用这一点。每循环一次，实现一层flat。
*/

export function flatten(arr: any[]) {
  if (!isArray(arr)) return

  let res = []

  arr.forEach(item => {
    if (isArray(item)) {
      res = res.concat(flatten(item))
    } else {

      res.push(item)
    }
  })

  return res
}

export function flattenWithLoop(arr: any[]) {
  while(arr.some(item => isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}