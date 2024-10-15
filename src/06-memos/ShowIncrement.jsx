import PropTypes from 'prop-types'
import React from 'react';

 const ShowIncrement =({increment}) => {

    console.log('ShowIncrement Render');
    

  return (
    <button
        className="btn btn-outline-primary"
        onClick={ () => {increment(5)} }
    >
        Increment
    </button>
  )
}


export default React.memo(ShowIncrement)

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}

