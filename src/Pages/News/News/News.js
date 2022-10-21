import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, total_view, rating, author, category_id } = news;

  return (
    <Card>
      <Card.Header>News Details</Card.Header>
      <Card.Body>
        <img className='img-fluid' src={image_url} alt="" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Back to News</Button>
        </Link>
      </Card.Body>
    </Card>

  );
};

export default News;
<h2>This is News</h2>