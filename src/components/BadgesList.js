import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import tw_logo from '../images/twitter.svg'
import './styles/BadgesList.css'

class BadgesListItem extends Component {
    render() {
      return (
        <div className="BadgesListItem">
          <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />
            <span className="BadgesListItem__twitter"><img src={tw_logo} alt="Logo Twitter" className="BadgesListItem__tw-logo" /> @{this.props.badge.twitter} </span>
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }
  
class BadgesList extends Component {
    render() {
      if (this.props.badges.length === 0) {
        return (
          <div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create a new badge
            </Link>
          </div>
        )
      }
      
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.badges.map(badge => {
              return (
                <li key={badge.id}>
                  <BadgesListItem badge={badge} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

export default BadgesList
