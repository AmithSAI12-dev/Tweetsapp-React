import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loginUserStart } from '../../redux/user/user.actions';
import { selectCurrentUser, selectErrorMessage } from '../../redux/user/user.selector';
import './Login.style.css';
import  { Navigate } from 'react-router-dom'

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {loginUserStart} = this.props;
        const {email, password} = this.state;
        this.setState({ email: '', password: '' });
        loginUserStart(email, password);
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        const {errorMessage} = this.props;
        const {currentUser} = this.props;
        if(currentUser!=="") {
            return <Navigate to="/" />
        }
        return (
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
                    <form action="/" className="login__form" onSubmit={this.handleSubmit}>
                        {errorMessage!=="" ? <p className='error'>{errorMessage}</p>: ""}
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email" placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Password'  value={this.state.password} onChange={this.handleChange}/>
                        <button type='submit'>sign in</button>
                        <div className="login__help">
                            <p>Have you forgotten your password?</p>
                            <p><a href="/">forgot your password?</a></p>
                            <p className='mt-10'>New to Route One?</p>
                            <p><a href="/">create account</a></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginUserStart: (email, password) => dispatch(loginUserStart({email, password}))
})

const mapStateToProps = createStructuredSelector({
    errorMessage: selectErrorMessage,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
