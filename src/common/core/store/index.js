/**
 * @interface Store
 */

/**
 * @function Store#length
 * @returns {number} The number of key/value pairs currently present in the list associated with the object.
 */

/**
 * @function Store#key
 * @param {number} n
 * @returns {string} The name of the nth key in the list.
 */

/**
 * @function Store#getItem
 * @param {string} key
 * @returns {string} The current value associated with the given key. If the given key does not exist in the list associated with the object then this method must return null.
 */

/**
 * @function Store#setItem
 * @param {number} key
 * @param {*} value
 * @returns {void}
 */

/**
 * @function Store#removeItem
 * @param {string} key
 * @returns {void}
 */

/**
 * @function Store#clear
 * @returns {void}
 */

