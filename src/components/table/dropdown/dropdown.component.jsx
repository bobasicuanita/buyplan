import React from 'react';

import './dropdown.styles.scss';

const Dropdown = ({ specs, url, imageWidth, imageHeight, name }) => {
    return (
        <div className="dropdown">
            <div className="dropdown__container">
                <img src={url} alt="product" width={imageWidth} height={imageHeight} />
                <div className="dropdown__specs-container">
                    <h3>{name}</h3>
                    <ul className="dropdown__specs-list">
                        {specs.map(spec => <li key={spec.id} className="dropdown__specs-list-item"><span className='dropdown__specs-list-item--key'>{spec.spec[0]}</span> : <span>{spec.spec[1]}</span></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;