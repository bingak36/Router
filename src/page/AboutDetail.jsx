import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {
    
    const {id}=useParams()
  
    return (
    <section>{id}의 AboutDetail페이지</section>
  )
}

export default AboutDetail