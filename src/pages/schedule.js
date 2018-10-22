import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Slot from '../components/Slot'
import './schedule.css'

class SchedulePage extends React.Component {
  constructor(props) {
    super(props)
    this.onDayClick = this.onDayClick.bind(this)
    this.state = {
      activeIndex: 0,
    }
  }

  onDayClick(e, index) {
    this.setState({ activeIndex: index })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteScheduleQuery {
            site {
              siteMetadata {
                data {
                  title
                  schedules {
                    day
                    showHeader
                    collections {
                      time
                      isBreak
                      title
                      titleS
                      link
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { schedules } = data.site.siteMetadata.data
          const activeDay = schedules[this.state.activeIndex]

          return (
            <Layout>
              <div>
                <div className="schedule page">
                  <h1>Skjema</h1>
                  <div className="nav-button-group">
                    <Link className="button white" to="/">
                      Forside
                    </Link>
                    <Link className="button white hidden" to="/speakers/">
                      Talere
                    </Link>
                  </div>

                  <div className="button-group button-group-schedule-days">
                    {schedules.map((day, index) => (
                      <button
                        key={`day-${index}`}
                        onClick={evt => this.onDayClick(evt, index)}
                        className={
                          this.state.activeIndex === index
                            ? 'button active'
                            : 'button'
                        }
                      >
                        {day.day}
                      </button>
                    ))}
                  </div>
                  <div className="container">
                    { activeDay.showHeader ? (
                    <div className="trackhead">
                      <div className="time">Tid</div>
                      <div className="track">Tech track</div>
                      <div className="track">Synlighet track</div>
                    </div>) : null }
                    {activeDay.collections.map(collection => (
                      <Slot
                        key={`slot-${collection.time}`}
                        collection={collection}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Layout>
          )
        }}
      />
    )
  }
}

export default SchedulePage
