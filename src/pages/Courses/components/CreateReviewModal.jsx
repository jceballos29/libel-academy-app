/** @format */

import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { StarsRating } from 'stars-rating-react-hooks';
import { useForm } from 'react-hook-form';
import reviewService from '../../../services/reviews';
import { addReview } from '../../../features/courses/courseSlice';
import { useDispatch } from 'react-redux';

const CreateReviewModal = ({ show, onHide, courseId }) => {
  const dispatch = useDispatch();
  const [selectRating, setSelectRating] = useState(0);
  const modalReviewConfig = {
    totalStars: 5,
    initialSelectedValue: 0,
    renderFull: <IoStar style={{ color: '#ffc107', fontSize: 42 }} />,
    renderEmpty: (
      <IoStarOutline style={{ color: '#ffc107', fontSize: 42 }} />
    ),
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (review) => {
    try {
      review.courseId = courseId;
      review.rating = selectRating.selectingValue;
      
      const response = await reviewService.createReview(review);
      if (response.success) {
        dispatch(
          addReview({
            courseId,
            reviewId: response.data._id,
          })
        );
        reset();
        onHide();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} centered onHide={onHide}>
      <Modal.Header closeButton className='border-0'>
        <Modal.Title style={{ fontWeight: 900 }}>
          Agregar Reseña
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <Form.Group controlId="formBasicEmail">
              <Form.Label className="mb-0" style={{ fontWeight: 700 }}>
                Puntuación
              </Form.Label>
              <div className="w-100 d-flex justify-content-center">
                <StarsRating
                  onSelecting={(isSelecting, selectingValue) => {
                    setSelectRating({ isSelecting, selectingValue });
                  }}
                  config={modalReviewConfig}
                />
              </div>
            </Form.Group> */}
          <div>
            <Form.Label className='mb-0' style={{ fontWeight: 700 }}>
              Puntuación
            </Form.Label>
            <div className='w-100 d-flex justify-content-center'>
              <StarsRating
                onSelecting={(isSelecting, selectingValue) => {
                  setSelectRating({ isSelecting, selectingValue });
                }}
                config={modalReviewConfig}
              />
            </div>
          </div>
          <Form.Group>
            <Form.Label style={{ fontWeight: 700 }}>
              Comentario
            </Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              {...register('comment', {})}
            />
          </Form.Group>

          <Form.Group className='mt-3 text-center'>
            <Button type='submit'>Enviar Reseña</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateReviewModal;
