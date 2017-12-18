const hostname = 'http://localhost:3000';

export function getJson(pathToGet) {
  const urlToGet = hostname + pathToGet;
  return fetch(urlToGet)
  .then(response => { if (response.ok) {
    return response.json();
    }},
    response => [{id: 0, name: `Error: ${response.message}`},
                [{id: 0, name: `Error: ${response.message}`}]])
};