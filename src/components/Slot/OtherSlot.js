import React from 'react'
import PropTypes from 'prop-types'

function renderSlot(title, link, classes) {
    return (
      <div className={`title ${classes}`}>
        {link && link.length > 0 ? (
          <a href={link}>{title}</a>
        ) : (
          <span>{title}</span>
        )}
      </div>
  )
}

const OtherSlot = ({ collection }) => {
  const { title, titleS, time, link } = collection
  const extraClass = titleS ? 'half' : 'full'
  return (
    <div className="slot white-background">
      <span className="time">{time}</span>
      {renderSlot(title, link, extraClass)}
      {titleS ? renderSlot(titleS, link, extraClass) : null}
    </div>
  )
}

OtherSlot.propTypes = {
  collection: PropTypes.object,
}

export default OtherSlot
