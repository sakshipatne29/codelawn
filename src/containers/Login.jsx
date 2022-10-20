import React from "react";
import { useRef } from 'react';


const LoginPage = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

    };
    return (
        <div className="container.login-container">
            <h1 className="codelawn">CodeLawn</h1>
            <h1 className="tagline">Create. Build. Deploy.</h1>
            
            <form ref={form} onSubmit={sendEmail}>
                <a href="www.google.com" target="">Google</a>
                <input type="email" name="email" placeholder="Email/Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <button className="btn btn-primary" type="submit">Login</button>
                <button className="btn btn-primary" type="submit">Forget Password</button>
            </form>
        </div>
    )
}
export default LoginPage;