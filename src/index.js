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
  const keys = Object.keys(old);
  // ['firstName', 'lastName', 'occuption']
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i]
    // if the values are different, save it in a variable
    if (old[key] !== updated[key]) {
      diff[key] = updated[key];
    }
  }

  return diff;
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



module.exports = {
  diffObjects,
  getParamsFromURL
};

