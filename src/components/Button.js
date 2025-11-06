import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick }) => {
  return <button className='custom-button' onClick={onClick}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
