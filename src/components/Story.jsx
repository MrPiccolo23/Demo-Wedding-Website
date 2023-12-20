import React from 'react';
import "../css/Story.css";
import "../css/Pink.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import story1 from '../img/story/story-1.jpg'; 
import story2 from '../img/story/story-2.jpg'; 
import story3 from '../img/story/story-3.jpg'; 
import story4 from '../img/story/story-4.jpg'; 
import story5 from '../img/story/story-5.jpg'; 

const Story = () => {
    return (
        <section id='story' className='story-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='story-content'>
                        <div className='row'>
                            {/* story item start */}
                            <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>How We Met</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores qui, consectetur ratione dignissimos dicta blanditiis nam animi earum omnis voluptate similique non repudiandae quisquam porro quidem eaque, ab magni!</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story1} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Leaving School</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptate officia culpa delectus repellendus autem. Quisquam, nesciunt, reprehenderit eveniet quo accusantium, et quidem aliquam perspiciatis fugiat omnis eligendi inventore distinctio.</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story2} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Travelling Together</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia voluptatibus, laudantium quibusdam aperiam mollitia voluptas cum eos officiis corrupti vitae possimus assumenda facilis nemo? Accusamus, omnis quam. Aut, fuga?</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story3} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Graduation.. and Starting Uni Again!</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod vitae ipsam expedita placeat. Consequuntur temporibus porro molestiae nihil placeat! Corporis perspiciatis omnis reprehenderit totam eum, explicabo quod sunt minima.</p>
                                </div>
                                <div className='story-img flex-container'>
                                    <img src={story4} alt="couple love story"/>
                                </div>
                                
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Proposal</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis mollitia expedita soluta natus sequi odit? Perspiciatis possimus cum at placeat? Impedit earum rerum consequuntur dolores mollitia quidem harum alias?</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story5} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;