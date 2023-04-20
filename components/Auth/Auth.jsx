import React, { useRef, useState } from 'react'
import './auth.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.jpg'


const Auth = () => {
    const signUpButtonRef = useRef(null);
    const signInButtonRef = useRef(null);
    const containerRef = useRef(null);

    const handleSignUpClick = () => {
        containerRef.current.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
        containerRef.current.classList.remove("right-panel-active");
    };


    //Sign Up
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError("Passwords don't match");
        } else {
            setLoading(true);
            // Make API call to register user
            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setLoading(false);
                    console.log(data);
                    alert('User registered successfully');
                })
                .catch((error) => {
                    setLoading(false);
                    console.error('Error:', error);
                    setError('Failed to register user');
                });
        }
    };


    //Log in  
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

   
    const navigate = useNavigate(); // <-- add this line to get the `navigate` function
     const handleSubmit_Login = (e) => {
    e.preventDefault();
    // Perform validation and authentication logic here
    navigate('/Home'); // <-- use `navigate` to navigate to the `/header` route
  };
  
    return (
        <div className='BodY'>
            <div className="container" ref={containerRef}>
                <div className="form-container sign-up-container">
                    {error && <p className="error-message">{error}</p>}
                    <form action="#" onSubmit={handleSubmit} className='authForm'>
                        <h1 className='h1-form'>Create Account</h1>


                        <div className="social-container">
                        </div>

                        <span className='span-auth'>or use your email for registration</span>
                        <input type="text" placeholder="Name" value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <input type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <input type="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <input
                            type="password"
                            placeholder="Verify Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className={loading ? 'loading' : ''} >
                            {loading ? 'Loading...' : 'Sign up'}
                        </button>
                    </form>

                </div>
                <div className="form-container sign-in-container">
                    <form action="#" onSubmit={handleSubmit_Login} className='authForm'>

                        <h1 className='h1-form' >Sign in</h1>
                        <div className="social-container">
                        </div>
                        <span className='span-auth'>or use your account</span>
                        <input type="email" placeholder="Email"
                            value={emailLogin}
                            onChange={(e) => setEmailLogin(e.target.value)}
                            required />
                        <input type="password"
                            value={passwordLogin}
                            onChange={(e) => setPasswordLogin(e.target.value)}
                            required placeholder="Password"/>
                        <p >
                            <Link to="/forgot-password">Forgot password?</Link>
                        </p>
                        <button >Sign In</button>
                    </form>
                </div> 
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <img src={Logo} alt="" srcset="" className='logo_img'/>
                            <h1 className='h1-form'>Welcome Back!</h1>
                            <p className='p-form'>To keep connected with us please login with your personal info</p>
                            <button className="ghost" ref={signInButtonRef} onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <img src={Logo} alt="" srcset="" className='logo_img'/>
                            <h1 className='h1-form'>Hello, Friend!</h1>
                            <p className='p-form'>Enter your personal details and start journey with us</p>
                            <button className="ghost" ref={signUpButtonRef} onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
