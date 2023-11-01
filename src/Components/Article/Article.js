import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Article() {
  const {state} = useLocation()
  const {article} = state;



  return (
    <div>
      <p>{article.title}</p>
      
    </div>
  )
}
