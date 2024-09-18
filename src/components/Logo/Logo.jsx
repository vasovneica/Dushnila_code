import React from 'react';
import './Logo.css';
import logo from '../../imgs/drinken-panda.svg';
import badLogo from '../../imgs/angry-panda.svg';

export default function Logo({ status }) {
    return (
        <div className='logo-div'>
            <img className='logo-img' src={status ? logo : badLogo} alt='logo' no-referrer='true' />
        </div>
    )
}
