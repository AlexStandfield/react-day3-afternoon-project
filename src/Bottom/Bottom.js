import React from 'react'
import './Bottom.css'

class Bottom extends React.Component{
    render(){
        return(
            
            <div className='divBottom'>
                <button className='buttonPrev' onClick={this.props.previous} >Previous</button>
                <span>
                <button className='buttonM'>Edit</button>
                <button className='buttonM'>Delete</button>
                <button className='buttonM'>New</button>
                </span>
                <button className='buttonNext' onClick={this.props.next}>Next</button>
            </div>
        
        )
    }
}

export default Bottom