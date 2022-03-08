import React from 'react';
import './CustomBtn.style.css';

function CustomBtn({value, type, hoverType}) {
    return (
        <a href="/" className={`customBtn text-uppercase ${type ? 'primary': 'default'} ${hoverType ? 'customBtn__hover' : ''}`}>{value}</a>
    )
}

export default CustomBtn;
