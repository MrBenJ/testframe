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

  it('[10,11,12,13,14,15,16,17,18,19,20,21,22, 23, 1,2,3,4,5,6,7,8,9]', () => {
    expect(getMinimum(
      [10,11,12,13,14,15,16,17,18,19,20,21,22, 23, 1,2,3,4,5,6,7,8,9])
    ).toBe(1)
  });

  it('[1,2,3,4,5]', () => {
    expect(getMinimum([1,2,3,4,5])).toBe(1);
  });

  it('[10,1,2,3,4,5,6,7,8,9]', () => {
    expect(getMinimum([10,1,2,3,4,5,6,7,8,9])).toBe(1);
  });

  it('Giant array', () => {
    const hugeArray = [];

    for(let i = 10; i < 6000; i++) {
      hugeArray.push(i);
    }

    expect(getMinimum(
      hugeArray.concat([1,2,3])
    )).toBe(1);
  });
});
