import axios from 'axios';

export const callTypes = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
};

export default async function callWebService(requestType, data, url, config) {
  console.log({
    requestType,
    data,
    url,
    config,
  });
  switch (requestType) {
    case callTypes.get: {
      const getApiResult = await axios.get(url).catch((error) => {
        console.log({url, error});
      });
      return getApiResult;
    }
    case callTypes.post: {
      break;
    }
    case callTypes.put: {
      break;
    }
    case callTypes.delete: {
      break;
    }
  }
}
