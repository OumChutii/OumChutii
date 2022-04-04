import React from "react";
import './SignUp.css';
import Footer from '../components/Footer/Footer';

const SignUp = () => {
    return (
        <main>

            <section>
            <div>Sign Up</div>
            <label htmlFor="">Email</label>
            <input type="text" />
            <hr />
            <label htmlFor="">Password</label>
            <input type="text" />
            <hr />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <p>I agree to the <a href="#">Terms of Services</a> and <a href="#">Privacy Policy.</a></p>
            <button>CONTINUE</button>
            <p>Have an  Account? Sign In</p>
            <a href="#">Sign In</a>
            </section>

            <Footer>@Copy Right 2022 : Goal to fit</Footer>



        </main>
    )
}

export default SignUp;