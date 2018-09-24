import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import EmbeddedMap from './EmbeddedMap'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            data {
              title
              keywords
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.data.title },
            {
              name: 'keywords',
              content: data.site.siteMetadata.data.keywords.join(','),
            },
          ]}
        >
          <html lang="no" />
          <link
            data-react-helmet="true"
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
        </Helmet>
        <div>
          {children}
          <EmbeddedMap />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
