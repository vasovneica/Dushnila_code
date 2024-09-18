import React from 'react';
import './ButtonWithSign.css';

export default function ButtonWithSign({ text, sign }) {
  return (
    <button className='button-with-sign'>
      <span>{text}</span> <span>{sign}</span>
    </button>
  )
}
