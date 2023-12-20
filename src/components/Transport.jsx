import React from 'react';
import "../css/Transport.css";
import "../css/Pink.css";


const Transport = () => {
    return (
        <section id="transport" className='transport-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Parking & Transport</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                </div>
                <div className='row justify-content-center accommodation-row'>
                    {/* Accommodation Box 1 */}
                    <div className='transport-item accommodation'>
                        <div className='transport-item-inner'>
                            <h3>Parking</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem suscipit animi ea eos! Eum perferendis explicabo sequi modi reprehenderit...
                                </p>
                                <br/>
                            <h3>Taxi</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis autem labore iure non repellendus. Facilis ad hic quidem accusamus dolorem. Sit a ab velit, quas omnis cupiditate aperiam voluptates recusandae.:<br/>
                                •	Taxi 1 – 12345 822200<br/>
                                •	Taxi 2 – 12345 812112<br/>
                                •	Taxi 3 – 12345 900 222
                                </p>
                                <br/>
                                <h3>Traveling</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint magni distinctio exercitationem id magnam, officiis ab laboriosam repudiandae hic laborum quis,</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transport;