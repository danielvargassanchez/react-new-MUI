import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [newsList, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);

  const getNews = async (actualPage) => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${actualPage}&category=${category}&pageSize=10&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    const { data } = await axios(url);
    setNews(data.articles);
    setTotalNews(data.totalResults);
  };

  useEffect(() => {
    setPage(1);
    getNews(1);
  }, [category]);


  const handlerChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlerChangePage = (e, value) => {
    setPage(value);
    getNews(value);
  };

  return (
    <NewsContext.Provider
      value={{
        category,
        handlerChangeCategory,
        newsList,
        totalNews,
        handlerChangePage,
        page
      }}
    >
      {" "}
      {children}{" "}
    </NewsContext.Provider>
  );
};
export { NewsProvider };
export default NewsContext;
