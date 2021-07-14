import getType from "./typeof";

const isArray = (value: unknown) => {
  return getType(value) === 'Array'
}

export default isArray