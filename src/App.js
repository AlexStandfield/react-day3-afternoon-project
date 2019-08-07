import React from 'react';
import Top from './Top/Top'
import Middle from './Middle/Middle'
import Bottom from './Bottom/Bottom'
import './App.css'
import Data from './Data'

class App extends React.Component{
  constructor(){
    super()
    
    this.state = {
      index: 0
    }
  }

  previous = () => {
    if(this.state.index > 0){
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  next = () => {
    if(this.state.index < Data.length - 1){
      this.setState({
        index: this.state.index + 1
      })
    }
  }




  render(){
    return(
      <div className='App'>
        <Top />
        <div className='Middle'>
          <Middle index={this.state.index}/>
        </div>
        <Bottom previous={this.previous} next={this.next}/>
      </div>
    )
  }
}

export default App;
