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
  if (array.length === 1) {
    return array[0];
  }

  const middleIndex = Math.floor(array.length / 2);

  if (array[middleIndex] < array[middleIndex - 1]) {
    return array[middleIndex];
  }

  if (array[middleIndex] > array[array.length - 1]) {
    return getMinimum(
      array.slice(
        middleIndex
      )
    );

  } else {
    return getMinimum(
      array.slice(
        0,
        middleIndex
      )
    );
  }

}

module.exports = {
  diffObjects,
  getParamsFromURL,
  getMinimum
};









