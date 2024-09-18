import React from 'react'
import './ParamsComponent.css'

export default function ParamsComponent({temp,co2,status}) {
    return (
        <aside className={status ? 'params-div' : `${'params-div'} ${'params-div-bad'}`}>
            <p className='temperature-value'>{temp} °C</p>
            <div className='params-label'>Температура</div>
            <p className='co2-value'>{co2} ppmp</p>
            <div className='params-label'>CO 2</div>
        </aside>
    )
}
