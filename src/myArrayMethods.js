// var arr = [1,2,3]

// arr.forEach((item, i) => {
//   console.log(item)
// })

Array.prototype.myForEach = function(callback, thisArg) {
  const arr = this

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    callback.call(thisArg, val, i, arr)
  }
}

Array.prototype.myMap = function(callback, thisArg){
  const arr = this
  let res = []

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const resVal = callback.call(thisArg, val, i, arr)
    // res = [...res, resVal]
    res[i] = resVal
  }

  return res
}

Array.prototype.myFilter = function(callback, thisArg){
  const arr = this
  let res = []

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const resVal = callback.call(thisArg, val, i, arr)
    if(resVal) {
      res = [...res, val]
    }
  }

  return res
}

Array.prototype.mySome = function(callback, thisArg) {
  const arr = this
  let res

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    res = callback.call(thisArg, val, i, arr)
    if(res) break
  }

  return res
}

Array.prototype.myEvery = function(callback, thisArg) {
  const arr = this
  let res

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    res = callback.call(thisArg, val, i, arr)
    if(!res) break
  }

  return res
}

// 关于reduce方法实现的参考文章：https://zhuanlan.zhihu.com/p/356678016
Array.prototype.myReduce = function(callback, initial) {
  const arr = this
  const hasInitialVal = arguments.length > 1
  let accu = hasInitialVal ? initial : arr[0]

  for (let i = hasInitialVal ? 0 : 1; i < arr.length; i++) {
    accu = callback(accu, arr[i], i, arr)
  }

  return accu
}

export default Array