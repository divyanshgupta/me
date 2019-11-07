import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobileAlt, faCogs, faDatabase, faCloud, faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default class About extends Component
{
    render()
    {
        if (this.props.data)
        {
            var occupation = this.props.data.occupation;
            var company = this.props.data.company;
            var city = this.props.data.address.city;
            var course = this.props.data.course;
            var college = this.props.data.college;
            var description = this.props.data.description;

        }

        return (
            <div>

                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I am a {occupation} in {company}. I lives in {city}. I have done my {course} from {college}.{description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h2 class="section-heading">What I do</h2>
                                <h3 class="section-subheading text-muted">Things I'm skilled at and passionate about.</h3>
                            </div>
                        </div>

                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span class="fa-stack fa-4x">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <h4 class="service-heading">Web Application <br class="hidden-xs hidden-sm hidden-md" />Development</h4>
                                    <p class="text-muted">Fast, responsive and engaging apps that bring your ideas to life.</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span class="fa-stack fa-4x">
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                        <i class="fas fa-mobile-alt fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 class="service-heading">Mobile Application <br class="hidden-xs hidden-sm hidden-md" />Development</h4>
                                    <p class="text-muted">Cross-platform apps built with efficiency and speed for Android and iOS at once.</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span class="fa-stack fa-4x">
                                        <FontAwesomeIcon icon={faCogs} />
                                    </span>
                                    <h4 class="service-heading">API Integration &amp; <br class="hidden-xs hidden-sm hidden-md" />Development</h4>
                                    <p class="text-muted">REST and SOAP API integration.<br />REST API development with Node.js and Loopback.</p>
                                </div>

                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span class="fa-stack fa-4x">
                                        <FontAwesomeIcon icon={faDatabase} />
                                    </span>
                                    <h4 class="service-heading">Database Design</h4>
                                    <p class="text-muted">Database architectures in MongoDB, MySQL or Parse Server, always aiming for performance, scale and stability.</p>
                                </div>

                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span class="fa-stack fa-4x">
                                        <FontAwesomeIcon icon={faCloud} />
                                    </span>
                                    <h4 class="service-heading">Cloud Integration</h4>
                                    <p class="text-muted">Deployment of NodeJS apps, ReactJS apps and databases to leading cloud platforms such as Heroku and Amazon AWS.</p>
                                </div>

                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span class="fa-stack fa-4x">
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </span>
                                    <h4 class="service-heading">Payment Gateway <br class="hidden-xs hidden-sm hidden-md" />Integration</h4>
                                    <p class="text-muted">Integration with the most popular Payment Gateways such as Stripe and Paypal.</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
