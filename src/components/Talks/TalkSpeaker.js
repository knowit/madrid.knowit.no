import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Person from '../Icons/Person'

const TalkSpeaker = ({ speaker, numberOfSpeakers, talkId }) => {
  return (
    <div className="speaker">
      <span className="speaker-image">
        {speaker.pic ? (
          <img src={`/static/pics/${speaker.pic}`} alt="speaker" />
        ) : (
          <Person />
        )}
      </span>
      <Link className="speaker-name" to={`/speakers#${talkId}`}>
        {numberOfSpeakers > 1 ? `${speaker.name} med flere` : speaker.name}
      </Link>
    </div>
  )
}

TalkSpeaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  numberOfSpeakers: PropTypes.number.isRequired,
  talkId: PropTypes.string.isRequired,
}

export default TalkSpeaker
