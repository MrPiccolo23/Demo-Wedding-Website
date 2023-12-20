import React from 'react';
import "../css/Couple.css";
import "../css/Pink.css";
import groom from '../img/groom.jpg'; 
import bride from '../img/bride.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Couple = () => {
    return (
        <section id="couple"  className='couple-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Happy Couple</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='couple'>
                        <img src={groom} alt='happy couple'/>
                        <h3>Adam</h3>
                        <h4>12/01/2000</h4>
                        <h5>London</h5>
                    </div>
                    <div className='couple'>
                        <FontAwesomeIcon icon={faHeart} className='fa-heart'/>
                        <img src={bride} alt='happy couple'/>
                        <h3>Eve</h3>
                        <h4>12/01/2000</h4>
                        <h5>London</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Couple;
