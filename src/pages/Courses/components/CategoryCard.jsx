import { Card, Image } from "react-bootstrap";

const CategoryCard = ({ category }) => {
  
  return (
    <Card className="category__card shadow-sm my-3 mx-md-2">
      <Card.Body className="mx-auto">
        <Image
          src={category.image.url}
          roundedCircle
          className="category__card__image border border-5"
        />
        <Card.Title className="text-center mt-3">{category.name}</Card.Title>
        <Card.Text className="text-center text-muted">
          {category.courses.length}
          &nbsp;Cursos
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;