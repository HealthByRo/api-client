import decamelizeOrderingParam from './decamelizeOrderingParam';

describe('decamelizeOrderingParam', () => {
  it('should be defined', () => {
    expect(decamelizeOrderingParam).toEqual(decamelizeOrderingParam);
  });

  it('should decamelize ordering param', () => {
    const receivedParams = {
      ordering: 'firstName',
    };
    const expectedParams = {
      ordering: 'first_name',
    };

    expect(decamelizeOrderingParam(receivedParams)).toEqual(expectedParams);
  });

  it('should decamelize ordering param which has "sign" at the beginning', () => {
    const receivedParams = {
      ordering: '-firstName',
    };
    const expectedParams = {
      ordering: '-first_name',
    };

    expect(decamelizeOrderingParam(receivedParams)).toEqual(expectedParams);
  });

  it('should keep other params unchanged', () => {
    const receivedParams = {
      foo: 'fooBar',
      bar: 'fooBar',
      ordering: 'firstName',
    };
    const expectedParams = {
      foo: 'fooBar',
      bar: 'fooBar',
      ordering: 'first_name',
    };

    expect(decamelizeOrderingParam(receivedParams)).toEqual(expectedParams);
  });

  it('should return the same object if params doesn\'t contain ordering param', () => {
    const receivedParams = {
      foo: 'fooBar',
      bar: 'fooBar',
    };

    expect(decamelizeOrderingParam(receivedParams)).toBe(receivedParams);
  });
});
