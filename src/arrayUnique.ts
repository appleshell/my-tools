import isArray from "./isArray"
export function arrayUnique(arr: any[]) {
  if (!isArray(arr)) return

  if (arr?.length < 2) return arr

  const res = arr.filter((item, index) => arr.indexOf(item) === index)

  return res
}

export function myUnique(arr: any[]) {
  if (!isArray(arr)) return

  if (arr?.length < 2) return arr

  let res = []

  arr.forEach(item => {
    if(!res.includes(item)) {
      res.push(item)
    }
  })

  return res
}

export function arrayUniqueEs6(arr: any[]) {
  if (!isArray(arr)) return

  if (arr?.length < 2) return arr

  return [...new Set(arr)]
}