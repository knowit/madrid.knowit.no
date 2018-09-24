import React from 'react'
import PropTypes from 'prop-types'
import Cross from '../Icons/Cross'

const DESCRIPTION_LENGTH = 100

const shortDescription = description => {
  if (description.length > DESCRIPTION_LENGTH) {
    return `${description.substring(0, 100)}...`
  }
  return description
}

const TalkDescription = ({
  showDescription,
  toggleShowDescription,
  description,
}) => {
  if (description.length < DESCRIPTION_LENGTH + 1) {
    return <span className="talk-description">{description}</span>
  }
  if (showDescription) {
    return (
      <span className="talk-description">
        {description}
        <button className="un-button" onClick={toggleShowDescription}>
          <Cross />
        </button>
      </span>
    )
  }

  return (
    <span className="talk-description" onClick={toggleShowDescription}>
      {shortDescription(description)}
    </span>
  )
}

TalkDescription.propTypes = {
  showDescription: PropTypes.bool.isRequired,
  toggleShowDescription: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
}

TalkDescription.defaultProps = {
  description: '',
}

export default TalkDescription
