import React from "react";
import "../styles/app.scss";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ title, breadcrumb }) => {
  return (
    <header
      className="header"
      style={{
        backgroundImage:
          'url("https://gaviaspreview.com/wp/zilom/wp-content/uploads/2020/12/breadcrumb.jpg")',
      }}
    >
      <div className="header__overlay"></div>
      <div className="header__main">
        <Container>
          <div className="header__main__container__inner text-light">
            <h2 className="header__title text-center mb-5 text-md-start mb-md-0 text-light">
              {title}
            </h2>
            <Breadcrumb className="header__breadcrumb mb-0">
              {breadcrumb.map((item, index) => {
                return (
                  <Breadcrumb.Item
                    linkAs={Link}
                    key={index}
                    linkProps={{ to: item.url }}
                    active={item.active}
                    className="text-light text-capitalize"
                  >
                    {item.title}
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
