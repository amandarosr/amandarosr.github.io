import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="fullpage">
      <button onClick={ () => navigate('/') }>{ "<<" }</button>
      Projects
    </div>
  )
}

