import qs from 'qs';
import humps from 'humps';

export default function stringifyParams(params) {
  return qs.stringify(params, { arrayFormat: 'brackets' });
}
