import React from 'react';

import './Title.css';

const Title = ({ children, title }) => {
  return <h1 className='title'>{children || title}</h1>;
}

export default Title;