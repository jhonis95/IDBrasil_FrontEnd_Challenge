
import "../styles/root.module.css"
import * as style from "../styles/home.module.css"
import Search from "../components/search";
import Button from "../components/button";
import { createPortal } from 'react-dom';
import plus from '../assets/plus.svg'
import { useState } from "react";
import Modal from "../components/modal";

function Home(){
    const [showModal, setShowModal] = useState(false);
    const openModal=(e)=>{
        e.preventDefault();
        setShowModal(true)
    }
    const user={
        nome:'',
        cpf:'',
        telefone:''
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
                        <Modal user={user} closeModal={()=>{setShowModal(false)}}>Adicionar Pessoa</Modal>,
                        document.getElementById('root')
                    )
                }
            </main>
        </>
    )   
}

export default Home;