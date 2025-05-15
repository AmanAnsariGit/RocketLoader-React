import React from 'react';
import './RocketLoader.css';

const RocketLoader = () => {
  const spans = Array.from({ length: 20 }, (_, i) => (
    <span key={i} style={{ '--i': i + 1 }}></span>
  ));

  return (
    <div className="loader">
      {spans}
      <div className="rocket">🚀</div>
    </div>
  );
};

export default RocketLoader;
