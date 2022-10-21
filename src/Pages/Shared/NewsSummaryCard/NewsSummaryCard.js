import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
  // console.log(news); 
  const { _id, title, author, details, rating, total_view, image_url } = news;
  return (
    <Card className="mb-5 shadow border-0">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex gap-3'>
          <Image
            roundedCircle
            src={author?.img}
            style={{ height: '60px' }}
          >

          </Image>
          <div>
            <p className='mb-0'>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className='me-2'></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>

      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <div className='mt-3'>

          {
            details?.length > 200 ?
              <div>{details.slice(0, 250) + '...'}
                <Link to={`/news/${_id}`}>
                  <span>Read More</span>
                </Link></div>
              : <p>{details}</p>
          }


        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between text-muted">
        <div>
          <FaStar className='text-warning me-2'></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className='me-2'></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card >

  );
};

export default NewsSummaryCard;