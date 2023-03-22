import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '3110a02163msh9bf094b80f9cf35p11944fjsnf25082efe41b' ,
    },
  });
    
  return data;
}