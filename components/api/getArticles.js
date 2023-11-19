import axios from "axios";

const URL = "http://eventregistry.org/api/v1/article/getArticles";

export const getArticles = async () => {
  try {
    const { data } = await axios.post(URL, {
      action: "getArticles",
      keyword: "India",
      articlesPage: 1,
      articlesCount: 10,
      articlesSortBy: "date",
      articlesSortByAsc: false,
      articlesArticleBodyLen: -1,
      resultType: "articles",
      dataType: ["news", "pr"],
      apiKey: "cd636f5d-046d-4955-bac2-15b5a89c1b17",
      forceMaxDataTimeWindow: 31,
    });
    return data.articles.results;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};
