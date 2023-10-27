import Button from "./button"
import * as style from "../styles/addUser.module.css"
import plus from '../assets/PlusBlack.svg'
import close from '../assets/Close.svg'

function AddCard({closeModal}){
    const hendleClose=()=>{
        closeModal()
    }
    return(
        <section className={style.addUser_modal}>
                <h2 className={style.addUser_title}>Adicionar Pessoa</h2>
               <Button
                    action={hendleClose}
                    style={style.addUser_button_close}
               >
                    <img src={close} alt="close-button" />
               </Button>
            <form action="" className={style.addUser_form}>
                <label htmlFor="">Nome:</label>
                <input type="text" name="" id="" placeholder="Nome Sobrenome"/>
                <label htmlFor="">CPF:</label>
                <input type="text" name="" id="" placeholder="xxx.xxx.xxx-xx"/>
                <label htmlFor="">Celular</label>
                <input type="text" name="" id="" placeholder="(xx) xxxxx-xxxx"/>
            </form>
                <Button
                    style={style.addUser_button}
                >
                        <img src={plus} alt="plus-icon" />
                        Adicionar Pessoas
                </Button>
        </section>
    )
}

function AddUser({closeModal}){
    return(
        <>
            <section className={style.addUser_container}>
                <AddCard closeModal={closeModal}/>
            </section>
        </>
    )
}

export default AddUser