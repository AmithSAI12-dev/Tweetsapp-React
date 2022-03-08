import React from 'react'
import CustomBtn from '../custom-btn/CustomBtn.component';
import './NewsLetter.style.css';

function NewsLetter() {
    return (
        <>
          <div className="mt-80"></div>
            <section className="newsLetter container">
                <div className="newsLetter__content">
                    <h4 className='title--sm'>Stay in touch</h4>
                    <h3 className="title--xl">subscribe</h3>
                </div>
                <form action="" className="newsLetter__form">
                    <input type="email" placeholder="Enter your email here" className='newsLetter__input' />
                    <CustomBtn value='subscribe' hoverType={true} />
                </form>
            </section>  
        </>
    )
}

export default NewsLetter
