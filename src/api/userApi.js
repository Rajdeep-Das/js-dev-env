import 'whatwg-fetch'

export function getUser() {
  return get('api/user')
}

function get(url) {
  return fetch(url).then(onSuccess,onError)
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
