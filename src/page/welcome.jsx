import * as style from '../styles/root.module.css'
import shapes from '../assets/Shapes.svg'
import action_logo from '../assets/Action-Logo.svg'

function Welcome(){
    return(
        <section className={style.welcome_container}>
            <img className={style.welcome_imageBackground} src={shapes} alt="background-shapes" />
            <div className={style.welcome_text_container}>
                <img src={action_logo} alt="logo" />
                <h2 className={style.welcome_text_title}>ID Brasil Sistemas</h2>
                <p className={style.welcome_text_subTitle}>Aplicação para teste de FrontEnd</p>
            </div>
            <button className={style.welcome_button}>acessar</button>
        </section>
    )
}

export default Welcome