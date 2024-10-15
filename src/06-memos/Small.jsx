import PropTypes from 'prop-types'
import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Small = memo(({value}) => {

    

    console.log('Small Render');

  return (
    <small>{value} </small>
  )
});

Small.propTypes = {
  value: PropTypes.number
}