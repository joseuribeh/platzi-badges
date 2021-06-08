import React from 'react';
import Badge from '../components/Badge'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Stars" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge avatarUrl="http://www.gravatar.com/avatar/?d=identicon" firstName="Jose" lastName="Uribe" jobTitle="FrontEnd Developer" twitter="joseuribeh" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;