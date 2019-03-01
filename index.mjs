const assign = Object.assign
const create = Object.create

/**
 * Clones the prototype and assigns the extensions on it
 * @param {object|null} [prototype=null]
 * @param {...object} extensions
 * @return {object&(prototype|null)}
 */
export default function object (prototype = null, ...extensions) {
  return assign(create(prototype), ...extensions)
}
