import React from 'react';
import Skeleton from 'react-loading-skeleton'

import './index.css';

const SkeletonLoader: React.FC = () => {

  return (
    <>
      <div className="skeleton-loader-container">
        <div className="img-skeleton"><Skeleton height={100} width={100}/></div>
        <div className="text-container">
          <div style={{ width: '100%' }}>
            <Skeleton count={1} />
          </div>
          <div>
            <Skeleton count={2} />
          </div>
          <div>
            <Skeleton count={3} />
          </div>
        </div>
      </div>
      
      <div className="skeleton-loader-container">
        <div className="img-skeleton"><Skeleton height={100} width={100}/></div>
        <div className="text-container">
          <div style={{ width: '100%' }}>
            <Skeleton count={1} />
          </div>
          <div>
            <Skeleton count={2} />
          </div>
          <div>
            <Skeleton count={3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoader;