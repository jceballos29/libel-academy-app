/** @format */

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import WishlistCard from '../components/WishlistCard';

const Wishlist = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className='student__wishlist mt-3 mt-md-0'>
      <Row>
        <Col>
          <Card
            className='border shadow-sm mb-3'
            style={{ backgroundColor: '#ebe5ff' }}>
            <Card.Body>
              <Card.Title as='h2' className='fw-bold my-0'>
                Lista de deseos
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {user?.wishlistCourses.length > 0 ? (
          user.wishlistCourses.map((course) => (
            <Col md={4} key={course._id} className="mb-3">
              <WishlistCard course={course} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No tienes cursos en tu lista de deseos</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Wishlist;
