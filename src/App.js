import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Technology from './components/technologies'
import $ from 'jquery';
class App extends Component
{

  constructor(props)
  {
    super(props);

    this.state =
      {
        resumeData: {}
      }
  }

  getResumeData()
  {
    $.ajax({
      url: './portFolioData.json',
      dataType: 'json',
      cache: false,
      success: function (data)
      {
        this.setState({ resumeData: data })
      }.bind(this),
      error: function (xhr, status, err)
      {

      }
    })
  }
  componentDidMount()
  {
    this.getResumeData()
  }
  render()
  {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar data={this.state.resumeData.main}></Sidebar>
          <div id="colorlib-main">
            <Introduction data={this.state.resumeData.main}></Introduction>
            <About data={this.state.resumeData.main}></About>
            <Timeline data={this.state.resumeData.timeline}></Timeline>
            <Technology data={this.state.resumeData.technologies}></Technology>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
