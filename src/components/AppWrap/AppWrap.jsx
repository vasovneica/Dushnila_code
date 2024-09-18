import React from 'react';
import './AppWrap.css';

export default function AppWrap({ children }) {
    return (
        <div className='app-wrap'>
            {children}
        </div>
    )
}
