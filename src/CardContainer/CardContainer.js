import React from 'react';
import './styles.css';

export default function CardContainer({ children }) {
  return (
    <div className="card-container">{children}</div>
  );
}