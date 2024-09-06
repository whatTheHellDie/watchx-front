export function getQueryParam(key: string) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(key);
}
// export const apiUrl = 'https://product.watchx.network';
// export const apiUrl = 'https://test.watchx.network';
export const apiUrl = 'https://dev.watchx.network';
