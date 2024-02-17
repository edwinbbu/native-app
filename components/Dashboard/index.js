import { View, Text, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { getArticles } from "../api/getArticles";
import { LinkButton } from "./LinkButton";

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
    <ScrollView className="flex-1 bg-white p-4 space-y-2">
      {articles.map((article, index) => {
        return (
          <View key={index} className="mb-2">
            <Image
              source={{
                uri: article.urlToImage,
              }}
              className="h-48 w-full"
            />
            <Text className="text-base font-semibold mt-2">
              {article.title}
            </Text>
            <Text>{article.description}</Text>
            <LinkButton url={article.url}>Read More</LinkButton>
          </View>
        );
      })}
    </ScrollView>
  );
};
