import qs from 'qs';

export default function stringifyParams(params) {
  return qs.stringify(params, { arrayFormat: 'brackets' });
}
