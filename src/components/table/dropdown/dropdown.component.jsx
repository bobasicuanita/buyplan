import React from 'react';

import './dropdown.styles.css';

const Dropdown = ({ specs, url, imageWidth, imageHeight, name }) => {
    return (
        <div className="dropdown-container">
            <div className="img-container"><img src={url} alt="product" width={imageWidth} height={imageHeight} /></div>
            <div className="specs-container">
                <h3>{name}</h3>
                <ul className="specs-list">
                    {specs.map(spec => <li key={spec.id} className="specs-list-item"><span className='spec-key'>{spec.spec[0]}</span> : <span className="spec-value">{spec.spec[1]}</span></li>)}
                </ul>
            </div>
        </div>
    )
};

export default Dropdown;