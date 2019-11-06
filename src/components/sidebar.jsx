import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {

    if(this.props.data)
    {
      var name = this.props.data.name;
      var email = this.props.data.email;
      var image = "url(images/"+this.props.data.profileimage+")"
      var networks = this.props.data.social.map((network)=>
      {
        return <li><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }


    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: image}} />
              <h1 id="colorlib-logo"><a href="index.html">{name}</a></h1>
              <span className="email"><i className="icon-mail"></i>{email} </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#about" data-nav-section="projects">Projects</a></li>
                  <li><a href="#about" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              {networks}
              </ul>
            </nav>
      
          </aside>
        </div>
      </div>
    )
  }
}
