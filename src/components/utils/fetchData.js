export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'aaf9242133mshfd496cf64933abfp12a188jsn450bd1e36a3d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}