import React from 'react';
import {Link} from 'react-router-dom';
import './notfound.css'

export default function NotFoundPage(){
    return (
        <div className='notfoundpage-container' >
            <h1>Sorry, this page isn't <span className='coloredWord'>available</span>.</h1>
            <h3>The link you followed may be broken, or the page may have been removed.<Link to='/patientcards' style={{textDecoration: 'none'}}> Go back to <span className='coloredWord'>Med</span><span className='secondWord'>.io</span>!</Link> </h3>
        </div>
    )
}
