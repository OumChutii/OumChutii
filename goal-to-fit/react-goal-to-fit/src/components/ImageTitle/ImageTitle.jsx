import React from 'react';

import './ImageTitle.css';

const ImageTitle = ({ title, imgSrc = './image.png' }) => {
 return (
        <div className="head-logo">
          <img className='icon-logo' src={imgSrc} />
          <h3 className='secondary-text-color'>{title}</h3>
        </div>);
}

export default ImageTitle;