export default function toJS(map) {
  if (typeof map === 'object' && typeof map.toJS === 'function') {
    return map.toJS();
  }
  return map;
}
