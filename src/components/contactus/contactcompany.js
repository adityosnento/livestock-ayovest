import React, { Component } from 'react'
import './contactcompany.scss'

export default class contactcompany extends Component {
    render() {
        return (
            <div className="container__contactuss">
            <h3> CONTACT US:</h3>
            <div className="container__contactus2">
              <div className="container__contactus__content">
                <div className="flex__title">
                  <i class="fa fa-phone"></i>
                </div>
                <div className="container__contactus__content__padding">
                  <h1>PHONES</h1>
                  <p>
                  Office +1 (409) 987–5874
                  </p>
                  <p>
                  Fax +1 (409) 987–5874
                  </p>
                </div>
              </div>
    
              <div className="container__contactus__content">
                <div className="flex__title">
                <i class="fa fa-address-book"></i>
                </div>
                <div className="container__contactus__content__padding">
                  <h1>ADDRESS</h1>
                  <p>
                    321 Kabil, Rusun Kabil, 2nd Floor
                  </p>
                  <p>
                    Kabil, Batam INDONESIA
                  </p>
                </div>
              </div>
    
              <div className="container__contactus__content">
                <div className="flex__title">
                <i class="fa fa-envelope"></i>
                </div>
                <div className="container__contactus__content__padding">
                  <h1>E-MAILS</h1>
                  <p>
                    admin@ayovest.com
                  </p>
                  <p>
                    mail@ayovest.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
