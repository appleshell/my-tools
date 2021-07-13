const getType = (value: unknown) => {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export default getType