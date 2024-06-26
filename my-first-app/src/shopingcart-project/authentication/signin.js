import React, { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import auth from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(user)
    const signIn = createUserWithEmailAndPassword(auth, user.email, user.password ).then(()=>{
      console.log(auth)
    }).then(navigate('/shop'))
    return () =>{
      signIn()
    }
  };


//   console.log(user);

  return (
    <form className='col-4 card container mx-auto p-3' onSubmit={handleSignup}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} value={user.email} name='email' />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} name='password' />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Signup</button>
    </form>
  );
};

export default SignIn;
