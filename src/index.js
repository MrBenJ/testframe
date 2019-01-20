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



module.exports = {
  diffObjects,
  normalizeUrl,
  getParamsFromURL
};

