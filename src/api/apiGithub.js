// crea un fetch para obtener los datos de la API de Github

export const getApiGithub = async () => {
  const response = await fetch("https://api.github.com/users/anahiquintero99");
  const data = await response.json();
  return data;
};
