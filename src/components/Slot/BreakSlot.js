import React from 'react'
import PropTypes from 'prop-types'

const BreakSlot = ({ collection }) => {
  return (
    <div className="slot break gray-background">
      <span className="time">{collection.time}</span>
      <div className="title">
        <span>{collection.title}</span>
      </div>
    </div>
  )
}

BreakSlot.propTypes = {
  collection: PropTypes.object,
}

export default BreakSlot
