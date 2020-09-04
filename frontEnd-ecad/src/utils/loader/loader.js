import React from 'react';
import PropTypes from 'prop-types';

function Loader({ isLoading, type }) {
  return (
    <div className={`loading-shade ${isLoading ? '' : 'loading-shade__hidden'}`}>
      { type === 'loading-column' ? (
        <div className="loading__column">
          <div className="loading__column--bar" />
          <div className="loading__column--bar" />
          <div className="loading__column--bar" />
          <div className="loading__column--bar" />
        </div>
      )
        : <div className="loading__bar" />
  }
    </div>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default Loader;
