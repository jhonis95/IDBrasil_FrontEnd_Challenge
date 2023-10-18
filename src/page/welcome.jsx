import * as style from '../styles/welcome.module.css'
import "../styles/root.module.css"
import shapes from '../assets/Shapes.svg'
import action_logo from '../assets/Action-Logo.svg'
import { useNavigate } from "react-router-dom";
import Button from '../components/button';

function Welcome(){
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/home")
    }
    return(
        <section className={style.welcome_container}>
            <img className={style.welcome_imageBackground} src={shapes} alt="background-shapes" />
            <div className={style.welcome_text_container}>
                <img src={action_logo} alt="logo" />
                <h2 className={style.welcome_text_title}>ID Brasil Sistemas</h2>
                <p className={style.welcome_text_subTitle}>Aplicação para teste de FrontEnd</p>
            </div>
            <Button
                style={style.welcome_button}
                action={handleClick}
            >
                acessar
            </Button>
        </section>
    )
}

export default Welcome