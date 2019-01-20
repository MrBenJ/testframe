const  {
  diffObjects,
  getParamsFromURL,
  normalizeUrl } = require('./index');

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