const hostname = 'http://localhost:3000';

export function getJson(pathToGet) {
  const urlToGet = hostname + pathToGet;
  return fetch(urlToGet)
  .then(response => { if (response.ok) {
    let jsonResponse = response.json();
    return jsonResponse;
    }},
    response => [{id: 0, name: `Error: ${response.message}`},
                [{id: 0, name: `Error: ${response.message}`}]])
};