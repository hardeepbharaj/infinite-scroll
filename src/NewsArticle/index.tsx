import React, { useState, useRef, useCallback } from 'react';

import usefetchNewsArticles from './usefetchNewsArticles';
import SkeletonLoader from '../components/SkeletonLoader';

import './index.css';

interface NewsArticles {
  urlToImage: string,
  author: string,
  content: string,
  description: string,
}

const NewsArticlePage: React.FC = () => {
  const [pageNum, setPageNum] = useState<Number>(1);
  const { isLoading, error, newsArticles, hasMore } = usefetchNewsArticles(pageNum);

  const observer = useRef<any | null>(null);

  // Calculates if the last list ref is in view and if it is call the next page number
  const lastArticleRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(prev => +prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  const renderItemContent = (article: NewsArticles) => (
    <>
      <img src={article.urlToImage} alt="News Article" />
      <div className="text-container">
        <div>
          <strong>Author</strong>: {article.author}
        </div>
        <div>
          <strong>Content</strong>: {article.content}
        </div>
        <div>
          <strong>Description</strong>: {article.description}
        </div>
      </div>
    </>
  );

  return (
    <div className="news-list-container">
      <h1>Bitcoin News</h1>

      <ul>
        {newsArticles.map((article, i) => {
          if (newsArticles.length === i + 1) {
            return (
              <li key={i} ref={lastArticleRef}>
                {renderItemContent(article)}
              </li>
            );
          }
          return <li key={i}>{renderItemContent(article)}</li>;
        })}
      </ul>
      <div>{isLoading && <SkeletonLoader />}</div>
      <div style={{ textAlign: 'center' }}>{error && 'Error...'}</div>
    </div>
  );
};

export default NewsArticlePage;