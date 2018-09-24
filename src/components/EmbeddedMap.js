import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './embedded_map.css'

const EmbeddedMap = () => (
  <StaticQuery
    query={graphql`
      query SiteMapQuery {
        site {
          siteMetadata {
            title
            data {
              event {
                city
                address
                hotel
                gmapsUrl
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="google-maps-wrapper">
        <div className="google-maps-blocker" />
        <div className="google-maps-content">
          <h1>Lokasjon</h1>
          <h3>{data.site.siteMetadata.data.event.hotel}</h3>
          <h3>{data.site.siteMetadata.data.event.address}</h3>
          <h3>{data.site.siteMetadata.data.event.city}</h3>
        </div>
        <iframe
          title="Map"
          className="google-maps"
          src={data.site.siteMetadata.data.event.gmapsUrl}
          frameBorder="0"
        />
      </div>
    )}
  />
)
export default EmbeddedMap
