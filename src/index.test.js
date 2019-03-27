const  {
  diffObjects,
  getParamsFromURL,
  normalizeUrl,
  getIndex,
  getMinimum } = require('./index');

describe('diffObjects', () => {

  it('Returns an object', () => {
    const result = diffObjects({}, {});

    expect(result).toEqual({});
  });

  it('Returns 1 updated field', () => {
    const result = diffObjects(
      {
        firstName: 'Jeff',
        lastName: 'Gold',
        occupation: 'janitor'
      },
      {
        firstName: 'Jeff',
        lastName: 'Gold',
        occupation: 'dev'
      }
    );

    expect(result).toEqual({
      occupation: 'dev'
    });
  });

  it('Returns new entries if added', () => {
    const result = diffObjects(
      {
        firstName: 'Jeff',
        lastName: 'Gold',
        occupation: 'janitor'
      },
      {
        firstName: 'Jeff',
        lastName: 'Gold',
        occupation: 'janitor',
        notes: 'Great guy!'
      }
    );

    expect(result).toEqual({
      notes: 'Great guy!'
    });
  });
});

describe('normalizeUrl', () => {
  it('should return a string', () => {
    const result = normalizeUrl('api/users/:id/:commentId');

    expect(typeof result).toBe('string');
  });

  it('should add leading slash', () => {
    const result = normalizeUrl('api/users/:id/:commentId');

    expect(result).toBe('/api/users/:id/:commentId');
  });

  it('should remove trailing slash', () => {
    const result = normalizeUrl('api/users/:id/:commentId/');

    expect(result).toBe('/api/users/:id/:commentId');
  });
});

describe('getParamsFromURL', () => {
  it('returns an object', () => {
    const result = getParamsFromURL(
      'hello/:url',
      'hello/url'
    );

    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).toBe(false);
  });

  it('Returns an object of parameters', () => {
    const result = getParamsFromURL(
      '/api/users/:id/:commentId',
      '/api/users/1/5'
    );

    expect(result).toEqual({
      id: '1',
      commentId: '5'
    });
  });

  it('Handles trailing slashes', () => {
    const result = getParamsFromURL(
      'api/users/:id/:commentId',
      '/api/users/1/5/'
    );

    expect(result).toEqual({
      id: '1',
      commentId: '5'
    });
  });
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

describe('getIndex', () => {

  it('[1,2,3,4,5,6,7,8,9,10], 4', () => {
    expect(getIndex(
      [1,2,3,4,5,6,7,8,9,10],
      4
    )).toBe(3);
  });

  it('[1,2,3,4,5], 6', () => {
    expect(getIndex(
      [1,2,3,4,5],
      6
    )).toBe(-1);
  });

  it('Giant array', () => {
    const hugeArray = [];

    for(let i = 75; i < 10000; i++) {
      hugeArray.push(i);
    }

    expect(getIndex(
      hugeArray,
      5475
    )).toBe(5400)
  });
});
