import React from 'react'
import Data from '../Data'
import './Middle.css'


class Middle extends React.Component {
    render(){
        return(
            <div className='middleMain'>
                <div className='middleData'>
                    <div className='nameID'>
                        <h1>{Data[this.props.index].name.first} {Data[this.props.index].name.last} </h1>
                    </div>
                    <p><b>From:</b> {Data[this.props.index].city}, {Data[this.props.index].country}</p>
                    <p><b>Job Title:</b> {Data[this.props.index].title}</p>
                    <p><b>Employer:</b> {Data[this.props.index].employer}</p>
                    <br />
                    <p><b>Favorite Movies:</b> 
                    <ol>
                        <li> {Data[this.props.index].favoriteMovies[0]} </li>
                        <li> {Data[this.props.index].favoriteMovies[1]} </li>
                        <li> {Data[this.props.index].favoriteMovies[2]} </li>
                    </ol>
                    </p>
                </div>
                <p className='number'> {Data[this.props.index].id}/{Data.length} </p>
            </div>
        )
    }
}

export default Middle