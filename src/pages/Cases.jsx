import React from 'react';
import '../style/Cases.css';
import { useNavigate } from 'react-router-dom';
import arrow from '../extra/arrow-right.png';

export default function Cases() {
  const navigate = useNavigate();
  return (
    <div className="fullpage">
      <button className="back-btn" onClick={ () => navigate('/') }>
        <img src={ arrow } alt="arrow" className="arrow" />
      </button>
      Cases
    </div>
  )
}