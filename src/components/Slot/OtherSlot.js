import React from 'react'
import PropTypes from 'prop-types'

const OtherSlot = ({ collection }) => {
  return (
    <div className="slot white-background">
      <span className="time">{collection.time}</span>
      <div className="title">
        {collection.link && collection.link.length > 0 ? (
          <a href={collection.link}>{collection.title}</a>
          ) : (
            <span>{collection.title}</span>
          )
        }
      </div>
    </div>
  )
}

OtherSlot.propTypes = {
  collection: PropTypes.object,
}

export default OtherSlot
