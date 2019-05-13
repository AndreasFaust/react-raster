import React from 'react'
import PropTypes from 'prop-types'

const Test = ({ testprops }) => {
  return (
    <h1>Hallo!</h1>
  )
}

Test.propTypes = {
  testprops: PropTypes.bool
}
Test.defaultProps = {
  testprops: false
}

export default Test
