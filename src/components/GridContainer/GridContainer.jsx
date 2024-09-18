import React, { Children } from 'react';
import './GridContainer.css';

export default function GridContainer({ children }) {
  return (
    <section className='container'>
      {children}
    </section>
  )
}
