const baseURL = 'https://api.tvmaze.com/shows';
const getData = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

export default getData;
