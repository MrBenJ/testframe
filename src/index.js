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
//   let middleIndex = Math.floor(array.length / 2);
//   let lowIndex = 0;
//
//   while (array[lowIndex] > array[middleIndex]) {
//     array = array.slice(lowIndex, middleIndex);
//   }

  console.log('SEARCHING: ', array);
  if (array.length === 1) {
    console.log('returning', array[0]);
    return array[0];
  }

  const middleIndex = Math.floor(array.length / 2);
  console.log('COMPARE ', `Is ${array[0]} < ${array[middleIndex]}? `, array[0] < array[middleIndex]);

  if (array[middleIndex] < array[middleIndex - 1]) {
    return array[middleIndex];
  }

  if (array[middleIndex] > array[array.length - 1]) {
    console.log('throw away LEFT', array.slice(0, middleIndex));
    return getMinimum(
      array.slice(
        middleIndex
      )
    );

  } else {
    console.log('throw away RIGHT', array.slice(middleIndex));
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

// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//   [ 20, 21, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//   [ 20, 21, 1, 2, 3, 4 ]
//
//     [ 20, 21, 1 ]
//
//     [ 4, 5, 6, 7, 8, 9 ]
//
//       [ 20, 21 ]
//
//       [ 1, 2, 3 ]







