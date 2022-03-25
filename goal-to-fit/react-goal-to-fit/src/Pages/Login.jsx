import React from 'react';
import './Login.css';
import ImageTitle from '../components/ImageTitle/ImageTitle';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';


const Login = () => {
  return (
    <main> 
        <section>
            <div className='container'>  
                <ImageTitle imgSrc='./image.png' title='Goal to fit'/>     
                    <div className="login" >
                    <Title title = "Login"/>  
                    <label className="primary-text-color" htmlFor="Email" >Email</label>
                    <input type="email" placeholder="sophie@example.com"/>
                    <label className="primary-text-color" htmlFor="Password" >Password</label>
                    <input type="password" placeholder="***********"/>
                    <button className="button-login" >Log in</button>
            </div>
    
            <div>
                <p className="secondary-text-color by-3">
                    Don’t have an account?
                </p>
                <div className="social-profiles">
                    <div>
                    {/* <button className="button-google"><i className="fa fa-google" aria-hidden="true"> </i>  GOOGLE</button> */}
                    <a href="#">Forgot Password?</a>
                    </div>
                    <div>
                        {/* <button className="button-facebook"><i className="fa fa-facebook" aria-hidden="true"> </i>  FACEBOOK</button>    */}
                        <a className="primary-text-color" href="#">Sign Up</a>
                    </div>
                </div>

            </div>

            </div>
        </section>

        <div className="push"></div>

        <footer>
            <div className="container font-large-subhead secondary-text-color">
                &copy; Right 2022 : Goal to fit
            </div>
        </footer>

    </main>
  );
}

export default Login;

