/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';

const usefetchNewsArticles = pageNum => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&page=${pageNum}&from=2021-05-21&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98`,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => {
        setNewsArticles(prevArticles => [...prevArticles, ...data.articles]);
        setHasMore(data.totalResults !== newsArticles.length);
        setIsLoading(false);
        console.log('response ==== ', data);
      })
      .catch(err => {
        setError(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  return { isLoading, error, newsArticles, hasMore };
};

export default usefetchNewsArticles;
