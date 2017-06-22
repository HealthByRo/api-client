import humps from 'humps';

export default function decamelizeOrderingParam(params) {
  if (params.ordering) {
    return {
      ...params,
      ordering: humps.decamelize(params.ordering),
    };
  }

  return params;
}
