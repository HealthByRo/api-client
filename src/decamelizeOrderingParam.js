import humps from 'humps';

export default function decamelizeOrderingParam(params) {
  return {
    ...params,
    ordering: params.ordering ? humps.decamelize(params.ordering) : undefined,
  };
}
