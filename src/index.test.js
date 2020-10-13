import axios from 'axios';
import humps from 'humps';
import decamelizeOrderingParam from './decamelizeOrderingParam';
import stringifyParams from './stringifyParams';
import toJS from './toJS';
import apiClient, {
  setBaseUrl,
  setHeaders,
  transformParamsFunctions,
  addTransformParamsFn,
  paramsSerializer,
} from '.';

describe('apiClient', () => {
  it('should be defined', () => {
    expect(apiClient).toEqual(apiClient);
  });

  it('should has request function', () => {
    expect(typeof apiClient.request === 'function').toBeTruthy();
  });

  it('should has delete function', () => {
    expect(typeof apiClient.delete === 'function').toBeTruthy();
  });

  it('should has get function', () => {
    expect(typeof apiClient.get === 'function').toBeTruthy();
  });

  it('should has head function', () => {
    expect(typeof apiClient.head === 'function').toBeTruthy();
  });

  it('should has options function', () => {
    expect(typeof apiClient.options === 'function').toBeTruthy();
  });

  it('should has post function', () => {
    expect(typeof apiClient.post === 'function').toBeTruthy();
  });

  it('should has put function', () => {
    expect(typeof apiClient.put === 'function').toBeTruthy();
  });

  it('should has patch function', () => {
    expect(typeof apiClient.patch === 'function').toBeTruthy();
  });

  it('should set base url when calling setBaseUrl(baseUrl)', () => {
    const baseUrl = 'http://myapp.con/api';
    setBaseUrl(baseUrl);

    expect(baseUrl).toEqual(apiClient.defaults.baseURL);
  });

  describe('transformRequest', () => {
    it('should apiClient.defaults.transformRequest[0] be a toJS', () => {
      expect(apiClient.defaults.transformRequest[0]).toBe(toJS);
    });

    it('should apiClient.defaults.transformRequest[1] be a humps.decamelizeKeys', () => {
      expect(apiClient.defaults.transformRequest[1]).toBe(humps.decamelizeKeys);
    });

    it('should rest of apiClient.defaults.transformRequest functon be the same as axios', () => {
      expect(
        Object.values(apiClient.defaults.transformRequest).slice(2)
      ).toEqual(axios.defaults.transformRequest);
    });
  });

  describe('transformResponse', () => {
    it('should last function in apiClient.defaults.transformResponse be a humps.camelizeKeys', () => {
      expect(
        Object.values(apiClient.defaults.transformResponse).slice(-1)[0]
      ).toBe(humps.camelizeKeys);
    });

    it('should rest of apiClient.defaults.transformRequest functon be the same as axios', () => {
      expect(
        Object.values(apiClient.defaults.transformResponse).slice(0, -1)
      ).toEqual(axios.defaults.transformResponse);
    });
  });

  describe('setHeaders', () => {
    const newHeaders = {
      Authorization: 'JWT XYZ123',
    };

    it('should set headers when calling setHeaders(newHeaders)', () => {
      setHeaders(newHeaders);

      expect(newHeaders.Authorization).toEqual(
        apiClient.defaults.headers.Authorization
      );
    });

    it('should keep all old headers when calling setHeaders(newHeaders)', () => {
      const oldHeaders = apiClient.defaults.headers;

      setHeaders(newHeaders);

      Object.entries(oldHeaders).forEach(([key, value]) => {
        expect(value).toEqual(apiClient.defaults.headers[key]);
      });
    });

    it('should keep all old headers when calling setHeaders(newHeaders)', () => {
      const oldHeaders = apiClient.defaults.headers;

      setHeaders(newHeaders);

      Object.entries(oldHeaders).forEach(([key, value]) => {
        expect(value).toEqual(apiClient.defaults.headers[key]);
      });
    });

    it('should overwrite some default header when calling setHeaders(newHeaders)', () => {
      const headers = {
        common: {
          Accept: 'application/json, text/plain, */*',
        },
      };

      setHeaders(headers);

      expect(headers.common).toBe(apiClient.defaults.headers.common);
    });
  });

  describe('transformParamsFunctions', () => {
    it('should be array', () => {
      expect(Array.isArray(transformParamsFunctions)).toBeTruthy();
    });

    it('should contain humps.decamelizeKeys', () => {
      expect(
        transformParamsFunctions.includes(humps.decamelizeKeys)
      ).toBeTruthy();
    });

    it('should contain humps.decamelizeKeys', () => {
      expect(transformParamsFunctions.includes(stringifyParams)).toBeTruthy();
    });

    describe('when calling addTransformParamsFn(decamelizeOrderingParam)', () => {
      it('should add new transform params function to transformParamsFunctions', () => {
        addTransformParamsFn(decamelizeOrderingParam);

        expect(
          transformParamsFunctions.includes(decamelizeOrderingParam)
        ).toBeTruthy();
      });

      describe('when calling paramsSerializer should transform params by all function in transformParamsFunctions', () => {
        const receivedParams = {
          firstName: 'John',
          lastName: 'Smith',
          ids: [1, 2, 3, 4],
          age: 50,
          foo: 'fooBar',
          bar: 'fooBar',
          ordering: 'firstName',
        };
        const expectedSerializedParams = 'first_name=John&last_name=Smith&ids%5B%5D=1&ids%5B%5D=2&ids%5B%5D=3&ids%5B%5D=4&age=50&foo=fooBar&bar=fooBar&ordering=firstName';

        expect(paramsSerializer(receivedParams)).toEqual(
          expectedSerializedParams
        );
      });
    });
  });
});
