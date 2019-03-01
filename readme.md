# <a name="reference">object</a>

An utility to create an object and assign at once

## <a name="install">Install</a>

`npm i @lcf.vs/object`

## <a name="usage">Usage</a>

```js
import object from '@lcf.vs/object'

const empty = object()
const prototyped = object({prototyped: true})
const assigned = object(null, {assigned: true})
const together = object(prototyped, assigned, {together: true})

console.log(empty) // {}
console.log(prototyped.prototyped) // true
console.log(assigned.assigned) // true
console.log(together.prototyped && together.assigned && together.together) // true
```

## <a name="api">API</a>

```js
/**
 * Clones the prototype and assigns the extensions on it
 * @param {object|null} [prototype=null]
 * @param {...object} extensions
 * @return {object&(prototype|null)}
 */
import object from '@lcf.vs/object'

const obj = object(prototype || null, ...extensions)
```

## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/object/blob/master/licence.md)
