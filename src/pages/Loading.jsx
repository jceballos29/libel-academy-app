import React from 'react'
import { Image } from 'react-bootstrap'
import libel from '../images/libel-logo-dark.png'

const Loading = () => {
  return (
    <div className="page loading">
      <Image src={libel} alt="Libel" fluid />
    </div>
  )
}

export default Loading