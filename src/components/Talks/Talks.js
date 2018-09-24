import React from 'react'
import PropTypes from 'prop-types'
import Talk from './Talk'

const Talks = ({ collectionTitle, entry }) => {
  return (
    <div className="talks container">
      <span className="type">{collectionTitle}</span>
      <span className="room">{entry.room}</span>
      {entry.slots.map(talkId => (
        <Talk talkId={talkId} />
      ))}
    </div>
  )
}

Talks.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  entry: PropTypes.object,
}

export default Talks
