import React from 'react';
import './popupform.style.css';
import { ReactComponent as Open } from '../../assets/open.svg';

class PopupForm extends React.Component {

    constructor(props){
        super(props);
     
        this.state = {
          visible: false
        }
    }
   

    render() {
        const {visible} = this.state;
        const handleClick = (event) =>{
            event.preventDefault();
            this.setState({visible: !visible});
        }
        return (
            <React.Fragment>
                <button className='popup' onClick={handleClick}><Open /></button>
                {
                    (visible===true) ? (
                        <div className="popup__form">
                            <div className="container">
                                <form action="/" className="login__form">
                                    <label htmlFor="id">Tweet ID</label>
                                    <input type="text" name="id" id="id" placeholder='Tweet Id'/>
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" name="message" id="message" placeholder='Message'/>
                                    <button type='submit'>Add Tweet</button>
                                </form>
                            </div>
                        </div>
                    ): ''
                }
            </React.Fragment>
        )
    }
}

export default PopupForm;