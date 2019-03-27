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
  const diff = {};

  Object.keys(updated).forEach( key => {
    if (old[key] !== updated[key]) {
      diff[key] = updated[key];
    }
  });

  return diff;
}

function normalizeUrl(url) {
  let parsedUrl = url.slice();

  if (parsedUrl[0] !== '/') {
    parsedUrl = '/' + parsedUrl;
  }

  if (parsedUrl[parsedUrl.length - 1] === '/') {
    parsedUrl = parsedUrl.slice(0, parsedUrl.length - 1);
  }

  return parsedUrl;
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
  const output = {};
  const parsedTemplate = normalizeUrl(template);
  const parsedUrl = normalizeUrl(url);

  const splitTemplate = parsedTemplate.split('/');
  const splitUrl = parsedUrl.split('/');

  splitTemplate.forEach( (item, index) => {
    if (item[0] === ':') {
      const key = item.slice(1);
      output[key] = splitUrl[index];
    }
  });


  return output;
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

/**
 * Given a sorted array and a value, find the index of the value. Do not use
 * Array.prototype.indexOf().
 *
 * If the value does not exist in the array, return -1
 */
function getIndex(array, element) {
  let leftIndex = 0;
  let currentIndex = Math.floor(array.length / 2);
  let rightIndex = array.length - 1;

  while(array[currentIndex] !== element) {
    if (array[currentIndex] === element) {
      return currentIndex;
    }

    if (currentIndex === rightIndex || currentIndex === leftIndex) {
      return -1;
    }

    if (element < array[currentIndex]) {
      rightIndex = currentIndex;
      currentIndex = Math.floor(currentIndex / 2);

    } else {
      leftIndex = currentIndex;
      currentIndex = Math.floor((leftIndex + rightIndex) / 2);
    }

  }

  return currentIndex;

}

module.exports = {
  diffObjects,
  getParamsFromURL,
  normalizeUrl,
  getMinimum,
  getIndex
};

