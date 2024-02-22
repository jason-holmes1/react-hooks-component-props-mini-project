import Article from "./Article"
import React from "react";
const ArticleList = ({ articles }) => {
  if (!articles || !Array.isArray(articles)) {
    return <div>No articles to display</div>;
  }
  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
};
export default ArticleList;