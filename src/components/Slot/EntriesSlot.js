import React from 'react'
import PropTypes from 'prop-types'
import Talks from '../Talks/Talks'

const EntriesSlot = ({ collection }) => {
  return (
    <div className="slot entries">
      <span className="time">{collection.time}</span>
      <div className="talks">
        {collection.entries.map(entry => (
          <Talks entry={entry} collectionTitle={collection.title} />
        ))}
      </div>
    </div>
  )
}

EntriesSlot.propTypes = {
  collection: PropTypes.array,
}

export default EntriesSlot
