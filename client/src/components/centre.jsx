import React, { Component } from 'react'
import Chart from './chart.jsx'
//import Graph from './graph.jsx'

class Centre extends Component {

  render() {
    return (
      <div className='centrebox'>
        <div><h1>{ this.props.random }</h1></div>
        <Chart players={ this.props.players }
               howto={ this.props.howto }/>
      </div>
      )
  }
}

export default Centre