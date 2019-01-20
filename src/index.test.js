const  {
  diffObjects,
  getParamsFromURL } = require('./index');

describe('diffObjects', () => {
  it('Returns an object', () => {
    const result = diffObjects({}, {});

    expect(result).toEqual({});
  });

  it('Returns only the k/v pairs that changed', () => {
    const oldObj = {
      firstName: 'Jeff',
      lastName: 'Gold',
      occupation: 'dev'
    };

    const newObj = {
      firstName: 'Jeff',
      lastName: 'Gold',
      occupation: 'janitor'
    };

    const result = diffObjects(oldObj, newObj);

    expect(result).toEqual({
      occupation: 'janitor'
    });
  });

});

describe('getParamsFromURL', () => {


});