import stringifyParams from './stringifyParams';

describe('stringifyParams', () => {
  it('should be defined', () => {
    expect(stringifyParams).toEqual(stringifyParams);
  });

  it('should convert params object to query string', () => {
    const receivedParams = {
      firstName: 'John',
      lastName: 'Smith',
      ordering: '-firstName',
      ids: [1, 2, 3],
    };
    const expectedParams = 'firstName=John&lastName=Smith&ordering=-firstName&ids%5B%5D=1&ids%5B%5D=2&ids%5B%5D=3';

    expect(stringifyParams(receivedParams)).toEqual(expectedParams);
  });
});
