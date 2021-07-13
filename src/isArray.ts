import getType from "./typeof";

const isArray = (value: unknown) => {
  return getType(value) === 'array'
}

export default isArray