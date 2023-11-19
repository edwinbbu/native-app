import axios from "axios";

const URL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=a3252f64e08b4f76a4aec3ae79d5a10e";

export const getArticles = async () => {
  try {
    const { data } = await axios.get(URL);
    return data.articles;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};
