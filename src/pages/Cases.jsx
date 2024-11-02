import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cases() {
  const navigate = useNavigate();
  return (
    <div className="fullpage">
      <button onClick={ () => navigate('/') }>{ "<<" }</button>
      Cases
    </div>
  )
}