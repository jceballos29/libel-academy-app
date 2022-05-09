import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { handleTitlePage } from '../utils/handleTitlePage'

const Home = () => {

  useEffect(() => {
    handleTitlePage()
  }, [])
  
  return (
    <div className="home">
      <Container>
      <h1>Plataforma de Educación Online</h1>
      </Container>
    </div>
  )
}

export default Home