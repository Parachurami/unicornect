import './Card.css';

const Card = ({icon, title, content, className}) =>{
    return(
        <div className={`card-container ${className}`}>
            <div className={'icon'}>
                <img src={icon} alt={'icon'}/>
            </div>
            <div className={'content-container'}>
                <p className={'content-title'}>{title}</p>
                <p className={'content-body'}>{content}</p>
            </div>
        </div>
    )
}

export default Card;
