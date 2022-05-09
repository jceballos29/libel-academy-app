import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <Row className='h-100 justify-content-center'>
      <Col className="d-flex align-items-center justify-content-center">
        <Spinner animation='border' variant='primary' size='lg'/>
      </Col>
    </Row>
  )
}

export default Loading