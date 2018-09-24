import React from 'react'
import PropTypes from 'prop-types'

const OtherSlot = ({ collection }) => {
  return (
    <div className="slot white-background">
      <span className="time">{collection.time}</span>
      <div className="title">
        <span>{collection.title}</span>
      </div>
    </div>
  )
}

OtherSlot.propTypes = {
  collection: PropTypes.object,
}

export default OtherSlot
