import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false)
  const { createUser, changeProfile, verifyEmail } = useContext(AuthContext)


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, password, email, photoURL);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateProfile(name, photoURL);
        handleEmailVerification();
        toast.success('Please verify Your email')
      })
      .catch(e => {
        console.log(e);
        setError(e.message)
      })
  }

  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    changeProfile(profile)
      .then(() => { })
      .catch(e => console.error(e))
  }

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => { })
      .catch(e => console.log(e))
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <Form.Text className='text-danger ms-2'>
          {error}
        </Form.Text>

      </Form>
    </div>
  );
};

export default Register;