import React, { Component } from 'react'

import "./styles/Loader.css"

export class Loader extends Component {
    render() {
        return (
            <div className="lds-roller">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        )
    }
}

export default Loader
