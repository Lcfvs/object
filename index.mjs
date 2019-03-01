const assign = Object.assign
const create = Object.create

/**
 * Clones the prototype and assigns the extensions on it
 * @param {object} [prototype={}]
 * @param {...object} extensions
 * @return {object&null}
 */
export default function object (prototype = null, ...extensions) {
  return assign(create(prototype), ...extensions)
}
