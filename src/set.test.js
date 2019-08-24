const DataSet = require('./set');

describe('DataSet exercise', () => {
  it("Initializes without fail", () => {
    const dataset = new DataSet();

    expect(dataset).toBeTruthy();
  });
});
