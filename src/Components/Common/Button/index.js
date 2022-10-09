import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.scss';

function StyledButton( props ) {
  return (
      <Button className='buttonStyle'>{props.children}</Button>
  );
}

export default StyledButton;
