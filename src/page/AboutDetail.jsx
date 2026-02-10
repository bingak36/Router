import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {
    
    const {id}=useParams()
  
    return (
    <div>{id}번의 AboutDetail페이지</div>
  )
}

export default AboutDetail