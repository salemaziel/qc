import React from 'react'
import { openPopupWidget } from 'react-calendly';
import './CalendlyButton.scss'
import calendlyStyle from './CalendlyButton.module.css'

//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const CalendlyButton = ({ url }) => {
    const onClick = () => openPopupWidget({ url:"https://calendly.com/salemaziel/30-min" });
  return <button onClick={onClick} className={calendlyStyle.brownBtn} /*className="profile-card__button button--blue"*/ url={url} >Book My Free Discovery Call</button>
}

export default CalendlyButton