const BASE_URL = 'https://dummyjson.com/products/';

const fetchData = async (endpoints: string = '') => {
  const url = endpoints ? `${BASE_URL}/${endpoints}` : BASE_URL;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Error en la solicitud');
  }

  return data;
};

export { fetchData };
