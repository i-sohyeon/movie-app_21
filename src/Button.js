import React from 'react';
import PropTypes from 'prop-types';
import './Button.module.css';

const Button = ({text}) => {
    return (
        <div>
            <button className='btn'>{text}</button>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;