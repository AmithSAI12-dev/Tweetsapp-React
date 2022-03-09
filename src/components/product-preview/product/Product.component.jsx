import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { deleteTweetStart, updateTweetStart } from '../../../redux/tweets/tweets.actions';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import './Product.style.css';

function Product({id, tags, message, deleteTweetStart, currentUser, updateTweetStart}) {

    const [visible, setVisible] = useState(false);
    const handleClick = (event) =>{
        event.preventDefault();
        setVisible(!visible);
    }
    const handleDelete = (event) => {
        event.preventDefault();
        deleteTweetStart(id, currentUser);
    }

    const [formData, updateFormData] = React.useState({
        id: id,
        tag: tags,
        message: message,
        email: currentUser
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTweetStart(formData.id, formData.email, formData.tag, formData.message);
        setVisible(!visible);
    };

    return (
        <React.Fragment>
            <div className='product'>
                {/* Product Image */}
                <a className="product__img" href='/'>
                    <img src={"https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001120397_630x806.progressive.jpg?v=1625149294"} alt="product" />
                    {/* Product Tag */}
                    {/* Product Overlay */}
                    <div className="product__overlay">
                        <h3 className="product__overlayTitle text-uppercase">Options</h3>
                        <div className="product__variants">
                            <div className="product__variantOption" onClick={handleClick}>Edit</div>
                            <div className="product__variantOption" onClick={handleDelete}>Delete</div>

                        </div>               
                    </div>
                </a>
                {
                    (visible===true) ? (
                        <div className="popup__form">
                            <div className="container">
                                <form action="/" className="login__form" onSubmit={handleSubmit}>
                                    <label htmlFor="id">Tweet ID</label>
                                    <input type="text" name="id" id="id" placeholder='Tweet Id' value={id} disabled/>
                                    <label htmlFor="tag">Tweet Tag</label>
                                    <input type="text" name="tag" id="tag" placeholder='Tweet tag' value={formData.tag} onChange={handleChange}/>
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" name="message" id="message" placeholder='Message' value={formData.message} onChange={handleChange}/>
                                    <button type='submit'>Update Tweet</button>
                                </form>
                            </div>
                        </div>
                    ): ''
                }
                {/* Product Description */}
                <div className="product__description">
                    <h2 className="title--xs"><a href="/">{id}</a></h2>
                    <p className="product__price">{message}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    deleteTweetStart: (id, email) => dispatch(deleteTweetStart({id, email})),
    updateTweetStart: (id, email, tag, message) => dispatch(updateTweetStart({id, email, tag, message}))
})
export default connect(mapStateToProps, mapDispatchToProps)(Product)
