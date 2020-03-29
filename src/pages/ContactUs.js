import React, { Component } from 'react'
import Contactsus from '../components/contactus/contactus'
import ContactInformation from '../components/contactus/contactcompany'

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <Contactsus/>
                <ContactInformation/>
            </div>
        )
    }
}
