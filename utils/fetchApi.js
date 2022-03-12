import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "6f999fdc56mshae2b1d0061ee1f0p1cc8f7jsn141e10de272e",
    },
  });

  return data;
};
