import React from 'react'
import './ProductPreview.style.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTweets } from '../../redux/tweets/tweets.selector';
import Product from './product/Product.component';

function ProductPreview({columns, tweets}) {
    return (
        <div className={`productPreview mt-50 ${columns===4 ? 'col-4' : 'col-6'}`}>
            {/* Products */}
            {
                tweets.map((props, i) => (
                    <Product key={i} {...props} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    tweets: selectTweets
})


export default connect(mapStateToProps)(ProductPreview);
