import React from 'react'
import { Form, Modal } from 'react-bootstrap'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const ShareCourseModal = ({show, onHide, name, url}) => {

  
  return (
    <Modal show={show} centered onHide={onHide} >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Compartir Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="mb-0" style={{ fontWeight: 400 }}>
                Link del Curso
              </Form.Label>
              <Form.Control
                defaultValue={url}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label style={{ fontWeight: 400 }}>Compartir con</Form.Label>
              <div>
                <FacebookShareButton
                  url={url}
                  quote={name}
                  className="me-2"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={url}
                  quote={name}
                  className="me-2"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={url}
                  quote={name}
                  className="me-2"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton
                  url={url}
                  quote={name}
                  className="me-2"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TelegramShareButton
                  url={url}
                  quote={name}
                  className="me-2"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <EmailShareButton
                  url={url}
                  quote={name}
                  className="me-2"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
  )
}

export default ShareCourseModal