import icon from "../../assets/images/icon.png";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import './Contact.css'
import Card from "./components/Card";
import phone from '../../assets/images/phone.png'
import mail from '../../assets/images/mail.png'
import ig_icon from "../../assets/images/ig_icon.png";
const Contact = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const currentPageHandler = (value) => setCurrentPage(value);
    return (
        <div className={'outer-container'}>
            <div className={'container'}>
                <div className={'navigation'}>
                    <div className={'title'}>
                        <img height={28.67} src={icon} alt={'unicornect'}/>
                        <p>UNI-cornect</p>
                    </div>
                    <div className={'nav-bars'}>
                        <NavLink to={'/'} onClick={currentPageHandler.bind(this, 0)} className={currentPage === 0 ? 'active-link':'nav-link'}>
                            Home
                        </NavLink>
                        <NavLink to={'/about'} onClick={currentPageHandler.bind(this, 1)} className={currentPage === 1 ? 'active-link':'nav-link'}>
                            About
                        </NavLink>
                        <NavLink to={'/contact'} onClick={currentPageHandler.bind(this, 2)} className={currentPage === 2 ? 'active-link':'nav-link'}>
                            Contact Us
                        </NavLink>
                    </div>
                </div>
                <div className={'content'}>
                    <p className={'bigText'}>Contact Us @</p>
                    <div className={'cards'}>
                        <Card
                            icon={phone}
                            title={'Our 24/7 customer service'}
                            content={'0802 654 0264'}
                            className={'card'}
                        />
                        <Card
                            icon={mail}
                            title={'Email us at '}
                            content={'Unicornect.event@support.com'}
                            className={'card'}
                        />
                    </div>
                    <div className={'bottom-cnt'}>
                        <a target={'_blank'} href={'https://www.instagram.com/uni_cornect/'} rel={'noreferrer'}>
                            <div className={'link-container'}>
                                <img width={24} src={ig_icon} alt={'Instagram'}/>
                                <p>Instagram: @Unicornect</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
