import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {

  const { user } = useSelector(state => state.user);

  return (
    <div className="student__profile mt-3 mt-md-0">
      <Row>
        <Col>
          <Card
            className="border shadow-sm mb-3"
            style={{ backgroundColor: "#ebe5ff" }}
          >
            <Card.Body>
              <Card.Title as="h2" className="fw-bold my-0">
                Perfil
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="border-0 shadow-sm mb-2">
            <Card.Body>
              <Card.Title as="h5" className="text-primary">
                Información
              </Card.Title>
              <Row className="mb-2">
                <Col>
                  <Card.Text>Registro:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {new Date(user.createdAt).toLocaleDateString({
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Card.Text>Nombre:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.name}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Card.Text>Usuario:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.username}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Card.Text>Email:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.email}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Card.Text>Teléfono:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.phone}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Card.Text>País:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.country}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Card.Text>Ciudad:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.city}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={12} md={6}>
                  <Card.Text>Biografía:</Card.Text>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.bio}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Card.Text>Sito Web:</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-secondary fw-light text-start">
                    {user.website || "-"}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="border-0 shadow-sm mb-2">
            <Card.Body>
              <Card.Title as="h5" className="text-primary">
                Redes Sociales
              </Card.Title>
              {user.social &&
                Object.entries(user.social).map((item, index) => (
                  <Row key={index}>
                    <Col>
                      <Card.Text style={{ textTransform: "capitalize" }}>
                        {item[0]}:
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-secondary fw-light">
                        {item[1] || "-"}
                      </Card.Text>
                    </Col>
                  </Row>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
