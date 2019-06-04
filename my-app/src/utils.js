export const data = 1;

export const API = ({ uri, method = 'GET', header = {}, body = null }) => {
  let options = {
    method,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      ...header,
    },
  };

  if (body) {
    options = { ...options, body: JSON.stringify(body) };
  }

  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(uri, options);
      const json = await res.json();
      if (method.toLowerCase() === 'post') {
        reject(new Error('error'));
      } else {
        resolve(json);
      }
    } catch (error) {
      reject(error);
    }
  });
};
