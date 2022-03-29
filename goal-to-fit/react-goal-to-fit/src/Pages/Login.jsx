import React from 'react';
import './Login.css';
import ImageTitle from '../components/ImageTitle/ImageTitle';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import NoAccount from '../components/NoAccount/NoAccount';


const Login = () => {
  return (
    <main> 
        <section>
            <div className='container'>  
                <ImageTitle imgSrc='./image.png' title='Goal to fit'/>     
                    <div className="login" >
                    <Title title = "Login"/>  
                    <Input htmlFor="Email" 
                           label='Email'
                           id='email' 
                           type='text' 
                           name='email' 
                           placeholder='Enter your email' 
                                //  value={email} 
                                //  isInvalid={isInvalid}
                                //  onChange={e => setEmail(e.target.value)}
                    />

                    <Input htmlFor="Password" label='Password' 
                                id='Password'  type="password" placeholder="***********" />
                    
                    
                    <Button>Log in</Button>
            </div>
    
            <div>
                <NoAccount tagtitle='Don’t have an account?'
                       textA1='Forgot Password?'
                       textA2='Sign Up'
                />                
            </div>

            </div>
        </section>

        <Footer>
            &copy; Right 2022 : Goal to fit
        </Footer>

    </main>
  );
}

export default Login;

