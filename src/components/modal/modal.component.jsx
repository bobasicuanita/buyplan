import React from 'react';

const Modal = ({id, url, imageWidth, imageHeight, specs, name, price, category, type }) => {
    return (
        <div className="modal" id={`${id}`}>
            <div className="modal__box">
                <div className="modal__content">
                    <img src={url} alt={`${name}`} className="modal__image"
                         style={{width: imageWidth, height: imageHeight}}/>
                    <div className="modal__content-details">
                        <a href="/#" className="modal__close">&times;</a>
                        <div className="modal__header">
                            <div className="modal__title-section">
                                <h2 className="heading-secondary">{name}</h2>
                                <span className="heading-subtitle">Category: {category}</span>
                                <span className="heading-subtitle">Type: {type}</span>
                                <h3 className="heading-tertiary">{price}&euro;</h3>
                            </div>
                        </div>
                        <ul className="modal__content-list">
                            {specs.map(spec => <li key={spec.id} className="modal__specs-list-item"><span
                                className='modal__specs-list-item-key'>{spec.spec[0]}</span>: <span>{spec.spec[1]}</span>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;