const BASE_URL = `http://localhost:4000/sick?q=`;

const httpFetch = async (queryString: string, options?: RequestInit) => {
  console.info('calling api');

  const res = await fetch(BASE_URL + queryString, options);
  return await res.json();
};

export default httpFetch;
