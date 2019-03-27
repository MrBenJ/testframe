/**
 * {
 *   firstName: 'Jeff',
 *   lastName: 'Gold',
 *   occupation: 'dev'
 * }
 *
 * {
 *   firstName: 'Jeff',
 *   lastName: 'Gold',
 *   occupation: 'janitor'
 * }
 *
 * expected:
 *
 * {
 *   occupation: 'janitor'
 * }
 */

function diffObjects(old, updated) {

}

/**
 *
 * input
 * "/api/users/:id/:commentId"
 * "/api/users/1/5"
 *
 * output
 * {
 *   id: 1
 *   commentId: 5
 * }
 *
 */
function getParamsFromURL(template, url) {

}
/**
 * Take an array that's sorted, but has a single rotation in it [3,4,5,1,2].
 * Assume no duplicate elements. Everything is unique
 *
 * Return the minimum element in this array.
 *
 */
function getMinimum(array) {

}

/**
 * Given a sorted array and a value, find the index of the value. Do not use
 * Array.prototype.indexOf().
 *
 * If the value does not exist in the array, return -1
 */
function getIndex(array, element) {

}

module.exports = {
  diffObjects,
  getParamsFromURL,
  getMinimum,
  getIndex
};







