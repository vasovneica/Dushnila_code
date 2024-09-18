import React from 'react';
import './Status.css';

export default function Status({ title, text, status }) {
    return (
        <main className={status ? 'status-div' : `${'status-div'} ${'status-div-bad'}`}>
            <h2 className='status-title'>{title}</h2>
            <p className='status-text'>{text}</p>
        </main>
    )
}
