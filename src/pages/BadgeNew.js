import React from 'react';
import Badge from '../components/Badge'
import Navbar from '../components/Navbar'
import BadgeForm from '../components/BadgeForm'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'


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
                        <div className="col-6">
                            <Badge 
                            avatarUrl="http://www.gravatar.com/avatar/?d=identicon" 
                            firstName="Jose" 
                            lastName="Uribe" 
                            jobTitle="FrontEnd Developer" 
                            twitter="joseuribeh" />
                        </div>
                        
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;