/** API URLを返す */
export function getApiUrl(uri: string) {
  const host = window.App.config.apiHost;

  const url = `${host}${uri}`;

  console.log({url})

  return url;
}
