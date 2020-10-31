export function encodeQueryParams(params) {
  const ret = [];
  for (let p in params)
    ret.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
  return ret.join('&');
}

export function parseCurrentURIFragment() {
  const fragment = window.location.hash.substr(1);

  return fragment.split('&').reduce((params, item) =>
  {
    const label = item.split('=')[0];
    const value = item.split('=')[1];
    params[label] = value;
    return params;
  }, {});
}