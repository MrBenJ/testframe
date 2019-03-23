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

function getMinimum(array) {
  if (array.length === 1) {
    return array[0];
  }
  const low = array.slice(0, Math.floor(array.length / 2));
  const high = array.slice(Math.floor(array.length / 2));

  if (low[low.length - 1] > high[0]) {
    return getMinimum(low);
  } else {
    return getMinimum(high);
  }
}



module.exports = {
  diffObjects,
  getParamsFromURL,
  getMinimum
};

[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]

  [ 20, 21, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    [ 20, 21, 1, 2, 3 ]

    [ 4, 5, 6, 7, 8, 9 ]

      [ 20, 21 ]

      [ 1, 2, 3 ]







