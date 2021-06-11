import React, { Component } from 'react'

import "./styles/Loader.css"

export class Loader extends Component {
    render() {
        return (
            <div class="lds-roller">
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
