import './NotFound.css'
import errorImage from '../../assets/images/404image.png';
import {useNavigate} from "react-router-dom";

const NotFound = () =>{
    const navigate = useNavigate();
    return(
        <>
            <div className={'error-container'}>
                <img className={'error-image'} alt={'error'} src={errorImage}/>
                <p className={'error-big'}>404 - Page Not Found</p>
                <p className={'error-info'}>The Page you’re looking for might have been removed, had its name changed or is temporarily unavailable</p>
                <button className={'homeBtn'} onClick={() =>{navigate('/');}}>Return Home</button>
            </div>
        </>
    )
}

export default NotFound;
