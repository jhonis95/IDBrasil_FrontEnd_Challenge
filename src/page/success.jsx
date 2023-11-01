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

    return(
        <>
            <section>
                <Button
                     action={handleClose}
                     style={style.modal_button_close}
                >
                     <img src={close} alt="close-button" />
                </Button>
                <div>
                    <img src={finish} alt="finish-icon" />
                    <p>Finalizado</p>
                </div>
            </section>
        </>
    )
}

export default Success