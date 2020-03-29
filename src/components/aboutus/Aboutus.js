import React, { Component } from 'react'
import Ourteam from './Ourteam'
import Testimony from './Testimoni'
import Topcontent from './Topcontent'
import Infographic from './Infographic'

export default class Aboutus extends Component {
    render() {
        return (
            <div>
                <Topcontent/>
                <Infographic/>
                <Ourteam/>
                <Testimony/>
            </div>
        )
    }
}
