import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Chart extends Component {

  render() {

    var length = Object.keys(this.props.players).length 
    var width = length < 3 ? '33%' :  (400/length-5) +'px'

    return (
      <div id='chartbox'>
        <div className='chart' style={{width: '400px', height: '400px'}} >
          {
            Object.keys(this.props.players).map((key, i) => {
              return <div id={ 'box' + i } 
                          className='scorediv' 
                          style={{width, height: (this.props.players[key].score*4)}}>
                       <p>{ this.props.players[key].name }</p>
                     </div>
            })
          }
        </div>
      </div>
      )
  }
}

export default Chart
