import React, { useState } from 'react';
import './popupform.style.css';
import { ReactComponent as Open } from '../../assets/open.svg';
import { connect } from 'react-redux';
import { createTweetStart } from '../../redux/tweets/tweets.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectError } from '../../redux/tweets/tweets.selector';

function PopupForm({currentUser, postTweetStart, error}) {

    const [visible, setVisible] = useState(false);
    const handleClick = (event) =>{
        event.preventDefault();
        setVisible(!visible);
    }

    const [formData, updateFormData] = React.useState({
        id: '',
        tag: '',
        message: ''
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            email: currentUser,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        postTweetStart(formData);
        setVisible(!visible);
    };

    return (
        <React.Fragment>
            <button className='popup' onClick={handleClick}><Open /></button>
            {
                (visible===true) ? (
                    <div className="popup__form">
                        <div className="container">
                            <form action="/" className="login__form" onSubmit={handleSubmit}>
                                <label htmlFor="id">Tweet ID</label>
                                <input type="text" name="id" id="id" placeholder='Tweet Id' onChange={handleChange}/>
                                <label htmlFor="tag">Tweet Tag</label>
                                <input type="text" name="tag" id="tag" placeholder='Tweet tag' onChange={handleChange}/>
                                <label htmlFor="message">Message</label>
                                <textarea type="text" name="message" id="message" placeholder='Message' onChange={handleChange}/>
                                <button type='submit'>Add Tweet</button>
                            </form>
                        </div>
                    </div>
                ): ''
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    postTweetStart: tweet => dispatch(createTweetStart(tweet))
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(PopupForm);