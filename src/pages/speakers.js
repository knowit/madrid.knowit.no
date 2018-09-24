import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Arrow from '../components/Icons/Arrow'
import './speakers.css'

const SpeakersPage = () => (
  <StaticQuery
    query={graphql`
      query SiteSpeakersQuery {
        site {
          siteMetadata {
            title
            data {
              title
              event {
                date
                city
                country
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div>
          <div className="intro">
            <img alt="Madrid konferanse logo" src="./static/madcon.png" />
            <h1>{data.site.siteMetadata.data.title}</h1>
            <div>
              <p className="white">
                Tid: {data.site.siteMetadata.data.event.date}
              </p>
              <p className="white">
                Sted: {data.site.siteMetadata.data.event.city},{' '}
                {data.site.siteMetadata.data.event.country}
              </p>
            </div>
            <div className="button-group">
              <Link className="button white" to="/speakers/">
                Talere
              </Link>
              <Link className="button white" to="/schedule/">
                Skjema
              </Link>
            </div>
            <a href="#info" className="arrow">
              <Arrow />
            </a>
          </div>
          <div id="info" className="info">
            <h2>Informasjon</h2>
            <p>
              Knowit Stavanger arrangerer fagseminar årlig. Det er de ansatte
              selv som lager programmet. Høsten 2018 vil den bli avholdt 25.
              oktober - 28. oktober 2018 i Madrid, Spania.
            </p>
            <p>Tidligere har vi besøkt bl.a. Berlin, Lofoten, Praha, Kiel.</p>
            <p>
              Alle rom markert med{' '}
              <span role="img" aria-label="kamera">
                🎥
              </span>{' '}
              vil bli filmet.
            </p>
          </div>
        </div>
      </Layout>
    )}
  />
)

export default SpeakersPage
