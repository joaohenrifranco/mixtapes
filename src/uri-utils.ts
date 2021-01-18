function getWindowURIFragment(window: Window): string {
  return window.location.hash.substr(1);
}

function parseURIFragment(fragment: string) {
  return fragment.split('&').reduce((params, item) => {
    const label = item.split('=')[0];
    const value = item.split('=')[1];
    params[label] = value;
    return params;
  }, {});
}

function buildDTOFromWindowURIFragment(window: Window) {
  return parseURIFragment(getWindowURIFragment(window));
}

function encodeQueryParams(params: {}): string {
  const ret = [];
  for (let p in params)
    ret.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
  return ret.join('&');
}

const URIUtils = {
  buildDTOFromWindowURIFragment,
  encodeQueryParams,
};

export { URIUtils };
