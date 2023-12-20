import React, { useEffect } from 'react';
import "../css/Home.css";
import "../css/Pink.css";
import slideImage1 from '../img/slides/slide-1.jpg';
import slideImage2 from '../img/slides/slide-2.jpg';
import slideImage3 from '../img/slides/slide-3.jpg';
import main from '../Javascript/main.js'; 

const Home = () => {
    useEffect(() => {
        main();
    }, []);
    
    return (
        <div id='home'>
            {/* <Header/> */}
            <section className="home-section">
                {/* slide start */}
                <div className="slide active" style={{ backgroundImage: `url(${slideImage1})` }}>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='home-content'>
                                <p>We're Getting Married</p>
                                <h1>Adam & Eve</h1>
                                <span>25th Dec 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* slide end */}
                                {/* slide start */}
                                <div className="slide" style={{ backgroundImage: `url(${slideImage2})` }}>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='home-content'>
                                <p>We're Getting Married</p>
                                <h1>Adam & Eve</h1>
                                <span>25th Dec 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* slide end */}
                {/* slide start */}
                <div className="slide" style={{ backgroundImage: `url(${slideImage3})` }}>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='home-content'>
                                <p>We're Getting Married</p>
                                <h1>Adam & Eve</h1>
                                <span>25th Dec 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* slide end */}
            </section>
        </div>
    );
};


export default Home;
