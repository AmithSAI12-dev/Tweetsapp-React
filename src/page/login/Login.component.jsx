import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loginUserStart } from '../../redux/user/user.actions';
import { selectCurrentUser, selectErrorMessage } from '../../redux/user/user.selector';
import './Login.style.css';
import  { Link, Navigate} from 'react-router-dom'

function Login({errorMessage, currentUser, loginUserStart}) {

    const [formData, updateFormData] = React.useState({
        email: '',
        name: '',
        password: ''
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUserStart(formData.email, formData.password);
    };

    
    return (
        <React.Fragment>
            {
                currentUser!=="" ? <Navigate to="/" /> : ""
            }
            <div className='login'>
                {/* Background Section */}
                <div className="login__bg"></div>
                {/* Title Section */}
                <div className="login__content">
                    <h1 className="title--xl text-center">Login</h1>
                    <h2 className="title--sm text-center">welcome back</h2>
                </div>
                {/* Login Form */}
                <div className="container mt-50">
                    <form action="/" className="login__form" onSubmit={handleSubmit}>
                        {errorMessage!=="" ? <p className='error'>{errorMessage}</p>: ""}
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange}/>
                        <button type='submit'>sign in</button>
                        <div className="login__help">
                            <p>Have you forgotten your password?</p>
                            <p><a href="/">forgot your password?</a></p>
                            <p className='mt-10'>New to Route One?</p>
                            <p><Link to={"/register"}>create account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}


const mapDispatchToProps = dispatch => ({
    loginUserStart: (email, password) => dispatch(loginUserStart({email, password}))
})

const mapStateToProps = createStructuredSelector({
    errorMessage: selectErrorMessage,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
