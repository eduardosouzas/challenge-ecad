import React, { Fragment } from 'react';

function DefaultFooter() {
  return (
    <Fragment>
      <span>
        <a href="/">ECAD </a>
        &copy; 2020
      </span>
      <span className="ml-auto">
        Powered by
        <a href="https://www.cariocadevs.dev" target="_blank" rel="noopener noreferrer"> Carioca Devs</a>
      </span>
    </Fragment>
  );
}

export default DefaultFooter;
