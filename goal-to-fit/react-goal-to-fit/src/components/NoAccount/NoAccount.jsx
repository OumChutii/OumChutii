import React from 'react';
import { Link } from "react-router-dom";


import './NoAccount.css';

const NoAccount = ({ isLoggedIn = false, signUpPath= '/signup' }) => {

  if(isLoggedIn) return null;
  
  return (<div className='no-account'>
            Don’t have an account?
            <span className='bold signup'>
                <Link to={signUpPath} className='signup pointer'>Sign Up</Link>
            </span>
          </div>);
}

export default NoAccount;