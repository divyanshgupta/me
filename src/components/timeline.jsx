import React, { Component } from 'react';
import $ from 'jquery';
import { Waypoint } from 'react-waypoint';

import Utilities from '../utilities/contentWayPoint'
export default class Timeline extends Component {

  pastWorkEx = [];
  _loadMoreContent(params)
  { 
    
    console.log("asdasd",params)
   
  }
 
  render() {

    if(this.props.data)
    {
      this.pastWorkEx = this.props.data.map((company)=>
      {
        
        return (<Waypoint
          onEnter={this._loadMoreContent}>
          <article className="timeline-entry" data-animate-effect={company.animationEffect}>
                    <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>{company.name}<span>{company.period}</span></h2>
                        <p>{company.description}</p>
                        <a href="{company.companyUrl}" data-ajax="true" class="sqLogoLink"><span class="sqLogo tighten lgSqLogo logoOverlay"><img src={"images/"+company.icon} class="company-logo" alt="Compro Technologies Logo" title=""/></span></a>
                      </div>
                    </div>
                  </article>
                  </Waypoint>)
      })


    }

    

    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {this.pastWorkEx}
                    
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
