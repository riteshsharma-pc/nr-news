import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <News pageSize={1}/>
        </div>
      </div>
    )
  }
}