import finish from '../assets/finish.svg'
import { useNavigate } from "react-router-dom";
import close from '../assets/Close.svg'
import * as style from "../styles/addUser.module.css"
import Button from '../components/button';

function Success(){
    const navigate=useNavigate()
    const handleClose=()=>{
        navigate("/home")
    }
    const pTagStyle={
        color:  'rgba(255, 255, 255, 0.40)',
        textAlign: 'center',

        fontFamily: 'Poppins',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '32px'
    }
    return(
        <>
            <section style={{width:'100vw',height:'100vh',backgroundColor:'#121D2B' }}>
                <Button
                     action={handleClose}
                     style={style.modal_button_close}
                >
                     <img src={close} alt="close-button" />
                </Button>
                <div style={{display:'flex',flexDirection:'column',gap:'8px',alignItems:'center',justifyContent:"center",height:'100%'}}>
                    <img src={finish} alt="finish-icon" />
                    <p style={pTagStyle}>Finalizado</p>
                </div>
            </section>
        </>
    )
}

export default Success