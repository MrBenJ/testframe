const  {
  diffObjects,
  getParamsFromURL,
  getMinimum } = require('./index');

describe('diffObjects', () => {


});

describe('getParamsFromURL', () => {

});

describe('getMinimum', () => {

  it('[5,6,7,1,2,3,4]', () => {
    expect(getMinimum([5,6,7,1,2,3,4])).toBe(1);
  });

  it('[10,11,12,13,14,15,16,17,18,19,20,21,1,2,3,4,5,6,7,8,9]', () => {
    expect(getMinimum(
      [10,11,12,13,14,15,16,17,18,19,20,21,1,2,3,4,5,6,7,8,9])
    ).toBe(1)
  })
});

function findMinimum(arr) {
  if (!arr || arr.length == 0) return null
  if (arr.length == 1) return arr[0]
  let lo = 0,
      hi = arr.length - 1
  const pivot = arr[arr.length - 1]

  while (lo <= hi) {
    const mid = lo + Math.floor(hi - lo)
    if (arr[mid] <= pivot && (mid == 0 || arr[mid] < arr[mid-1])) {
      return arr[mid]
    } else if (arr[mid] > pivot) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  return null
}