
import "../styles/root.module.css"
import * as style from "../styles/home.module.css"
import Search from "../components/search";
import Button from "../components/button";
import { createPortal } from 'react-dom';
import plus from '../assets/plus.svg'
import { useState } from "react";

function Home(){
    const [showModal, setShowModal] = useState(false);
    const openModal=()=>{
        setShowModal(true)
    }
    return(
        <>
            <header>
                <h2 className={style.home_text_title}>ID Brasil - Listagem Pessoas</h2>
            </header>
            <main>
                <Search/>
                <Button
                    style={style.home_button_add}
                    action={openModal} 
                >
                    <img src={plus} alt="plus-icon" />
                    Adicionar Pessoas
                </Button>
                <footer>© 2023 Powered by ID Brasil.</footer>
                {
                    showModal && createPortal(
                        <Test onClose={() => setShowModal(false)}></Test>,
                        document.body.header
                    )
                }
            </main>
        </>
    )   
}

export default Home;