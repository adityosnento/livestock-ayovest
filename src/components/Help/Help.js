import React, { Component } from 'react'
import './Help.scss'

export default class Help extends Component {
    render() {
        return (
            <div className="container__help">
                <div className="container__top">
                <h2>Hello is there anything we can help you with?</h2>
                <p>In dairy investing, quality assurance is an integral part of the quality strategy. As we care about our clients, we control the quality of our products on all stages of its production.</p>
            </div>
               <div>
                   <div className="whats__monggovest">
                   <div className="img-content">
                   <img src={require("../../asset/auth/ayovest.png")} alt="logo" />
                   </div>
                   <div className="help__content">
                   <h4>What is AYOvest?</h4>
                   <p>AYOvest provides an opportunity for you to collaborate in the world of animal husbandry. Monggovest helps farmers who have difficulty finding money. Likewise, we can help those of you who want to allocate funds while providing real social impact. The medium we offer becomes a bridge of cooperation for a vision of escalating livestock production.</p>
                   </div>
                   
                   </div>
                   <div className="steps__monggovest">
                   <div className="steps__content">
                   <h4>What are the steps to collaborating?</h4>
                   <ul>
                       <li>You only register online through the Mongongovest website by completing personal data such as e-mail, name and password for your account.</li>
                        <li>You can explore the commodities we provide and analyze their potential.</li>
                       <li>You can allocate your funds with a very affordable lot range.</li>
                   </ul>
                   </div>
                   <div className="img-steps">
                   <img src={require("../../asset/auth/collaborate.svg")} alt="logo" />
                   </div>
                   </div>
                   
                   
                   <div className="whats__Lots">
                   <div className="img-lots">
                   <img src={require("../../asset/auth/lots.svg")} alt="logo" />
                   </div>
                   <div className="lots__content">
                   <h4>What is Lots ?</h4>
                   <p>Lot is a package unit that becomes the parameter of your fund allocation. Every lot that is collected is very meaningful for breeders in Indonesia. In this technological age, we believe that every individual can contribute to increasing livestock production. Therefore the amount of fees in one lot starts from a very affordable price.</p>
                   </div>
                   </div>


                   <div className="whats__profit">
                   <div className="profit__content">
                   <h4>What is the profit sharing system?</h4>
                   <p> The profit sharing system that we offer is a form of prediction that has been researched based on community trends. Our predictions are based on statistics from similar cows. So for dairy cows for example with maintenance costs including long-term lease of land for 5 years, baby cows of Rp. 8 million for 3 years, cows start producing milk. Expected in the 3rd month (in the first year) and continues to increase until the third year and then stable after that until the 5th year. With this pattern, the average profit sharing rate is estimated at around 18% per year.</p>
                   </div>
                  
                   <div className="img-profit">
                   <img src={require("../../asset/auth/profit.svg")} alt="logo" />
                   </div>
                   </div>

                   <div className="whats__database">
                   <div className="img-database">
                   <img src={require("../../asset/auth/database.svg")} alt="logo" />
                   </div>
                   <div className="database__content">
                   <h4>Can I offer my commodities put in the database monggovest?</h4>
                   <p>All commodity data available on our platform must go through a verification process. You can offer your commodity to be verified, by contacting us in the Contact Us section.</p>
                   </div>
                   </div>
                   
               </div>
            </div>
        )
    }
}
