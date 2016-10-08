const get = (url) => {
  if(self.fetch) {
    return fetch(url);
} else {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = () => {
        if (req.status == 200){ resolve(req.response); }
        else { reject(Error(req.statusText));}
      }
      req.onerror = () => {
        reject(Error('network error'));
      }
      req.send();
    });
  }
};

const getJSON = (url) => {
  return get(url).then( (jsonResponse) => JSON.parse(jsonResponse));
};

export default getJSON;
