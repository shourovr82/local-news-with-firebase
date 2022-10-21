import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error))

  }



  return (
    <div className=''>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant='outline-danger' className='mb-2'> <FaGoogle></FaGoogle> Login with Google</Button>
        <Button variant='outline-dark'> <FaGithub></FaGithub> Login With Github</Button>
      </ButtonGroup>
      <div className='mt-3'>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
          <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNav;