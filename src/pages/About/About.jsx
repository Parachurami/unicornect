import icon from "../../assets/images/icon.png";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import Carousel from "./components/Carousel";
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import backLine from '../../assets/images/backLine2.png';
import './About.css';

const About = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageHandler = (value) => setCurrentPage(value);
    return (
        <div style={{height: '100%', paddingBottom: '187px', backgroundColor:'#EFF7FF'}}>
            <div className={'navigation'}>
                <div className={'title'}>
                    <img height={28.67} src={icon} alt={'unicornect'}/>
                    <p>UNI-cornect</p>
                </div>
                <div className={'nav-bars'}>
                    <NavLink to={'/'} onClick={currentPageHandler.bind(this, 0)}
                             className={currentPage === 0 ? 'active-link' : 'nav-link'}>
                        Home
                    </NavLink>
                    <NavLink to={'/about'} onClick={currentPageHandler.bind(this, 1)}
                             className={currentPage === 1 ? 'active-link' : 'nav-link'}>
                        About
                    </NavLink>
                    <NavLink to={'/contact'} onClick={currentPageHandler.bind(this, 2)}
                             className={currentPage === 2 ? 'active-link' : 'nav-link'}>
                        Contact Us
                    </NavLink>
                </div>
            </div>
            <div className={'content'}>
                <div className={'about-content'}>
                    <div className={'text-area'}>
                        <p className={'bigText aboutBig'}>Elevating your <span
                            style={{color: 'black'}}>University</span> Experience</p>
                        <p className={'largeText'}>Welcome to Unicornect, your ultimate gateway to unforgettable
                            university events! At Unicornect, we believe in enhancing every aspect of your campus life
                            by connecting you to a world of exciting events tailored to your passions and interests.</p>
                        {/*<p className={'largeText'}>Discover and Engage in a World of University Events Tailored Just for You!</p>*/}
                    </div>
                    <div className={'carousel-area'}>
                        <Carousel
                            interval={3000}
                            slides={[img1, img2]}
                        />
                        <img width={550} style={{position: 'absolute', top: -200, zIndex: 1, left: 60}} alt={'line'}
                             src={backLine}/>
                    </div>
                </div>
            </div>
            <div style={{width:'100vw'}} className={'about-bottomContent'}>
                <p className={'bottom-largeText'}>Elevating your University Experience</p>
                <div className="bottom-smallerText">

                <p>Unicornect is designed with you in mind, whether you’re an event organizer or an enthusiastic attendee. Our app offers a seamless and enriching experience that ensures you never miss out on the magic of campus life.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
