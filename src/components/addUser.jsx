import Button from "./button"
import * as style from "../styles/addUser.module.css"
import plus from '../assets/PlusBlack.svg'

function AddCard(){
    return(
        <form action="">
            <label htmlFor="">Nome:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">CPF:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Celular</label>
            <input type="text" name="" id="" />
            <Button
                style={style.addUser_button}
            >
                    <img src={plus} alt="plus-icon" />
                    Adicionar Pessoas
            </Button>
        </form>
    )
}

function AddUser(){
    return(
        <>
            <section>
                <AddCard/>
            </section>
        </>
    )
}

export default AddUser