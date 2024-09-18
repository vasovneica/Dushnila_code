import React from 'react';
import './DayScore.css';
import ButtonWithSign from '../ButtonWithSign/ButtonWithSign';

export default function DayScore({ score }) {
  return (
    <div className='day-score-div'>
      <p className='day-score'>Дней без душноты {score}</p>
      <ButtonWithSign text={'История'} sign={'→'} />
    </div>
  )
}
