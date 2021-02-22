import React from 'react';

export default function CardContainer({ children, color }) {
  return (
    <div
      className="card-container"
      style={{ background: color}}
    >{children}</div>
  );
}