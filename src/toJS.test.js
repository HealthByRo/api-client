import toJS from './toJS';

describe('toJS', () => {
  it('should be defined', () => {
    expect(toJS).toEqual(toJS);
  });

  it('should return the same object, if object has not toJS function', () => {
    const receivedParams = {};

    expect(toJS(receivedParams)).toBe(receivedParams);
  });

  it('should return the same object, if object has toJS property but is not a function', () => {
    const receivedParams = {
      toJS: {},
    };

    expect(toJS(receivedParams)).toBe(receivedParams);
  });

  it('should call toJS function, if object has it defined and is a function', () => {
    const receivedParams = {
      toJS: jest.fn(),
    };
    toJS(receivedParams);

    expect(receivedParams.toJS).toHaveBeenCalled();
  });

  it('should return toJS function result, if object has it defined and is a function', () => {
    const expectedParams = {
      foo: 'fooBar',
      bar: 'fooBar',
      ordering: 'first_name',
    };
    const receivedParams = {
      toJS: () => expectedParams,
    };

    expect(toJS(receivedParams)).toEqual(expectedParams);
  });
});
