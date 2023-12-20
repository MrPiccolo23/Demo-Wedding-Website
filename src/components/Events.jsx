import React from 'react';
import "../css/Events.css";
import "../css/Pink.css";
import Venue1 from '../img/icons/venue1.jpg'; 
import Venue2  from '../img/icons/venue2.jpg'; 
import Venue3  from '../img/icons/venue3.jpg'; 
import Venue4  from '../img/icons/venue4.jpg'; 
import Venue5  from '../img/icons/venue5.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Event = () => {
    return (
        <section id="accommodation" className='event-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Places to Stay</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                </div>
                <div className='row justify-content-center accommodation-row'>
                    {/* Accommodation Box 1 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Accommodation 1</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem minima quisquam nam, sint ipsum corrupti nostrum nesciunt alias ut consectetur quod quibusdam veniam voluptatum molestias pariatur dolore laudantium illum.</p>
                            <img src={Venue1} alt="event"/>
                            <div className='social-links'>
                                <a href="https://www.google.com/maps/" title='Find on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 2 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Accommodation 2</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel commodi, quos magni labore inventore quam sunt veritatis expedita minus praesentium tempora, voluptatum dicta quis cum facere officia! Ratione, magnam sit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                            <img src={Venue2} alt="event"/>
                            <div className='social-links'>
                                <a href="https://www.google.com/maps/" title='Find on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 3 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Accommodation 3</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis porro quod commodi accusantium repudiandae? Similique, dolore impedit quaerat recusandae ut in id quam? Labore expedita ullam autem explicabo provident quidem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                            <img src={Venue3} alt="event"/>
                            <div className='social-links'>
                                <a href="https://www.google.com/maps/" title='Find on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 4 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Accommodation 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus non ad porro sequi quas nam a exercitationem dolore, inventore odit debitis autem eum perferendis corporis voluptatum? Doloremque, dolor! Sit!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <img src={Venue4 } alt="event"/>
                            <div className='social-links'>
                                <a href="https://www.google.com/maps/" title='Find Us on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 5 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Accommodation 5</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eveniet magnam ea nisi nostrum, ratione sed.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
                            <img src={Venue5} alt="event"/>
                            <div className='social-links'>
                                <a href="https://www.google.com/maps/" title='Find Us on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='section-title'>
                        <p className='para'>For other options, search on booking.com website and airbnb</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Event;