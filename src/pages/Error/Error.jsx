import nointernet from '../../assets/images/no-internet.png'
import './Error.css'
const Error = () => {
    return (
        <div className='error-container' style={{background:"#eff7ff", height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', flexWrap:'wrap'}}>
            <img src={nointernet} alt="" style={{width:'350px', height:'350px', marginBottom:30}}/>
            <p style={{fontSize:30, fontWeight:'600', color:'#FF6347', width:'755px', textAlign:'center', lineHeight:'39px'}} className={'error-message'}>Oops! No internet connection. Please check and try again...</p>
            <button onClick={() => window.location.reload()} style={{fontSize:18, textDecoration: "underline", backgroundColor:"transparent", color: "black", width:116, height:22, fontWeight:'500',lineHeight
            :'22px'}}>Try Again</button>
        </div>
    )
}
export default  Error
