import React from 'react'
// import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import {FaFacebookF, FaGoogle} from 'react-icons/fa'

import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
  return (
    <div id='login-page'>
        <div id='login-card'>
            <h2>
                Welcome to ChatQAT!!
            </h2>

            <div className='login-button google'
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <FaGoogle /> Sign In with Google
            </div>

            <br/> <br/>

            <div className='login-button facebook'
                onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
                <FaFacebookF /> Sign In with Facebook
            </div>


        </div>
    </div>
  );
}

export default Login