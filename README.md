![IMAGE](./coverage.svg)

# api-client

api-client is a HTTP client based on [axios](https://github.com/mzabriskie/axios).

api-client is an instnce of axios with some additional configuration like:
* camelize keys of response object
* decamelize keys of request params object
* cast request params from immutable.js collection to pure JS object

## Installing
`yarn add https://bitbucket.org/arabellatech/api-client`

**NOTE**: In your project should be only one instance of the api-client module. This means that api-client should be added to the `dependencies` section of package.json file only in your main application. Each submodule should have added api-client to the `peerDependencies` section. Otherwise, the configuration of api-client from your main application will not apply to the instances of api-client of submodules.

## Configuration

A configuration of api-client should be done once in your main app.js file of your application.

### setBaseUrl
`baseURL` will be prepended to `url` unless `url` is absolute.

```js
import { setBaseUrl } from 'api-client';

setBaseUrl("https://yourhost.com/api");
```

### setHeaders
`setHeaders` allows to set custom headers to each request.

```js
import { setHeaders } from 'api-client';

const token = 'XYZ123';

setHeaders({
  Authorization: `JWT ${token}`,
});
```

### addTransformParamsFn
`addTransformParamsFn` adds function to the list of function which transforms request params. For instance `decamelizeOrderingParam` function decamlize `ordering` param in request params

```js
import {
    addTransformParamsFn,
    decamelizeOrderingParam,
} from 'api-client';

addTransformParamsFn(decamelizeOrderingParam);
```

## Usage

Usage of api-client is the same as axios module, so check out [axios docs](https://github.com/mzabriskie/axios) for further information.