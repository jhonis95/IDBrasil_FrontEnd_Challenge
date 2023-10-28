import Button from "./button"
import * as style from "../styles/addUser.module.css"
import plus from '../assets/PlusBlack.svg'
import close from '../assets/Close.svg'
import API from '../data/API'
import { useState } from "react"

function AddCard({closeModal}){

    const [formInputs,setForm]=useState({
            nome:'',
            cpf:'',
            telefone:''
    })
    const handleClose=()=>{
        closeModal()
    }
    // const organizeOutput=(input)=>{
    //     let valueToShowCPF=`${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`
    //     let valueToShowTelefone=`(${phone.slice(0,2)})${phone.slice(2,7)}-${phone.slice(7,11)}`
    // }
    const handleAddUser=(e)=>{
        e.preventDefault();
        API.addPessoas(formInputs)
    }
    const handleChange=(e)=>{
        // if(e.target.name==='cpf'){

        // }
        const cleanInput=e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
        setForm({...formInputs, [e.target.name]: cleanInput})
    }
    return(
        <section className={style.addUser_modal}>
                <h2 className={style.addUser_title}>Adicionar Pessoa</h2>
               <Button
                    action={handleClose}
                    style={style.addUser_button_close}
               >
                    <img src={close} alt="close-button" />
               </Button>
            <form action="" className={style.addUser_form}>
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" id="" placeholder="Nome Sobrenome" onChange={handleChange}/>
                <label htmlFor="">CPF:</label>
                <input type="text" name="cpf" id="" placeholder="xxx.xxx.xxx-xx" onChange={handleChange}/>
                <label htmlFor="">Celular</label>
                <input type="text" name="telefone" id="" placeholder="(xx) xxxxx-xxxx" onChange={handleChange}/>
            </form>
            <div style={{width:'100%'}}>
                <Button
                    style={style.addUser_button}
                    action={handleAddUser}
                >
                        <img src={plus} alt="plus-icon" />
                        Adicionar Pessoas
                </Button>
            </div>
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