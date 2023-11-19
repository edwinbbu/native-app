import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { getArticles } from "../api/getArticles";

export const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getArticles();
      setArticles(articles);
    };
    fetchNews();
  }, []);

  return (
    <View>
      <Text className="text-xl">News</Text>
      {articles[0] && (
        <>
          <Text className="text-xl">{articles[0].title}</Text>
          <Text>{articles[0].body}</Text>
        </>
      )}
    </View>
  );
};
