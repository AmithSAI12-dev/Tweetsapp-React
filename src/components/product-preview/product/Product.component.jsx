import React from 'react'
import './Product.style.css';

function Product({id, message}) {
    return (
        <div className='product'>
            {/* Product Image */}
            <a className="product__img" href='/'>
                <img src={"https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001120397_630x806.progressive.jpg?v=1625149294"} alt="product" />
                {/* Product Tag */}
                {/* Product Overlay */}
                <div className="product__overlay">
                    <h3 className="product__overlayTitle text-uppercase">Options</h3>
                    <div className="product__variants">
                        <div className="product__variantOption">Edit</div>
                        <div className="product__variantOption">Delete</div>

                    </div>               
                </div>
            </a>
            {/* Product Description */}
            <div className="product__description">
                <h2 className="title--xs"><a href="/">{id}</a></h2>
                <p className="product__price">{message}</p>
            </div>
        </div>
    )
}

export default Product
