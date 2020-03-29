import React, { Component } from 'react'
import Ourteam from './Ourteam'
import Testimony from './Testimoni'
import Topcontent from './Topcontent'

export default class Aboutus extends Component {
    render() {
        return (
            <div>
                <Topcontent/>
                <Ourteam/>
                <Testimony/>
            </div>
        )
    }
}
