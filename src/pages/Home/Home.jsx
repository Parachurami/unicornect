import './Home.css';
import icon from '../../assets/images/icon.png';
import arrow from '../../assets/images/arrow.png';
import ig_icon from '../../assets/images/ig_icon.png';
import {NavLink} from "react-router-dom";
import {useState} from "react";
import React from "react";
import Modal from 'react-modal';
import clock2 from '../../assets/images/clock-2.png';
import cancel2 from '../../assets/images/cancel-2.png'
import axios from "axios";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const currentPageHandler = (value) => setCurrentPage(value);
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => setModalVisible(false);
    const openModal = () => setModalVisible(true);
    const [inputData, setInputData] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const openSuccessModal = () => setSuccessModalVisible(true);
    const closeSuccessModal = () => setSuccessModalVisible(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSaveData =  async (e) => {
        e.preventDefault();
        console.log('Submitted')

        // sending data to the backend
        try {
            const response = await axios.post('http://localhost:3001/save-data', { data: {
                firstName: firstName,
                lastName: lastName,
                email: inputData
                } });
            console.log(response.data);
            setInputData('');
            closeModal()
            openSuccessModal()
            // Handle success or display a message
        } catch (error) {
            console.error('Error saving data:', error);
            setInputData('')
            setModalVisible(false)
            // Handle error or display an error message
        }


        // try{
        //     const response = await axios.post('http://127.0.0.1:5000/send-email', {
        //         recipient: inputData,
        //         subject: "Hello there",
        //         body: "Hi"
        //     });
        //     console.log(response.status);
        //
        // }catch (e) {
        //     console.log('Error saving data: ', e);
        //     setInputData('');
        //     setFirstName('');
        //     setLastName('');
        //     setModalVisible(false)
        // }
    };

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
                        <NavLink
                            to={'/'}
                            // onClick={currentPageHandler.bind(this, 1)}
                            // className={currentPage === 1 ? 'active-link':'nav-link'}
                            className={'disabled'}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={'/'}
                            // onClick={currentPageHandler.bind(this, 2)}
                            // className={currentPage === 2 ? 'active-link':'nav-link'}
                            className={'disabled'}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
                <div className={'content'}>
                    <p className={'bigText'}>Experience Campus Magic, Where Moments Matter!</p>
                    <p className={'mediumText'}>Discover and Engage in a World of University Events Tailored Just for You!</p>
                    <button className={'joinBtn'} onClick={openModal}>
                        <p>Join waitlist</p>
                        <div className={'arrow'}>
                            <img width={24} src={arrow} alt={'arrow'}/>
                        </div>
                    </button>
                    <p className={'invitation-text'}>Join Michael Ndubuisi, Saviour Etop and 235 others</p>

                    {/* User Input Form */}
                    <Modal
                        className={'modal'}
                        isOpen={modalVisible}
                        onRequestClose={closeModal}
                    >
                        <form onSubmit={handleSaveData} className={'modal-body'}>
                            <div className={"name-details"}>
                                <input required type="text" value={firstName} onChange={(e => {
                                    setFirstName(e.target.value)
                                })} placeholder='First Name' name='firstName'/>
                                <label htmlFor='firstName' className='form-label'>First Name</label>
                                <input required type="text" value={lastName} onChange={(e => {
                                    setLastName(e.target.value)
                                })} name='lastName' placeholder='Last Name'/>
                                <label htmlFor='lastName' className='form-label'>Last Name</label>

                            </div>
                            <div className={'input-container'}>
                                <input value={inputData} onChange={(e) => {
                                    setInputData(e.target.value)
                                }} required className={'modal-input'} type={'email'} placeholder={'E-mail address here'}/>
                                <label htmlFor="email" className='email-label'>Email Address</label>
                            </div>
                                <button type={'submit'} className={'modal-btn'}>Join Waitlist</button>
                        </form>
                    </Modal>

                    {/* Success Modal When User Joins Waitlist */}
                    <Modal className={'success-modal'} isOpen={successModalVisible} onRequestClose={closeSuccessModal}>
                        <img onClick={closeSuccessModal} className={'cancel-success'} alt={'cancle'} src={cancel2}/>
                        <div className={'success-body'}>
                            <img alt={'clock'} src={clock2}/>
                            <p className={'success-green'}>You have successfully joined the waitlist!</p>
                            <p className={'success-black'}>You’ll be among the first people to get notified when we launch!</p>
                        </div>
                    </Modal>
                    <div className={'bottom-content'}>
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


const styles = {
   outerContainerStyle:{
       background:'url(../../assets/images/background-image.png)',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    overflowX: 'hidden',
   }
};
export default Home;
