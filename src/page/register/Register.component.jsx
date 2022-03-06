import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { registerUserStart } from '../../redux/user/user.actions';
import { selectErrorMessage, selectSuccessMessage } from '../../redux/user/user.selector';



class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            username: '',
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const {registerUserStart} = this.props;
        const {email, password, name} = this.state;
        this.setState({ email: '', password: '', username: '' });
        registerUserStart(email, password, name);

    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    
      
    render () {
        const {errorMessage, successMessage} = this.props;
        return (
            <div className='login'>
                {/* Background Section */}
                <div className="login__bg"></div>
                {/* Title Section */}
                <div className="login__content">
                    <h1 className="title--xl text-center">Register</h1>
                    <h2 className="title--sm text-center">welcome back</h2>
                </div>
                {/* Login Form */}
                <div className="container mt-50">
                    <form action="/" className="login__form" onSubmit={this.handleSubmit}>
                        {errorMessage!=="" ? <p className='error'>{errorMessage}</p>: ""}
                        {successMessage!=="" ? <p className='success'>{successMessage}</p>: ""}
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder='Username' value={this.state.username}  onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                        <button type='submit'>sign in</button>
                        <div className="login__help">
                            <p>Already have an account</p>
                            <p><a href="/">Login here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    registerUserStart: (email, password, name) => dispatch(registerUserStart({email, password, name}))
})

const mapStateToProps = createStructuredSelector({
    errorMessage: selectErrorMessage,
    successMessage: selectSuccessMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);