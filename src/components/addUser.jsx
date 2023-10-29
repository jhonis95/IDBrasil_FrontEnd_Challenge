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
    const handleAddUser=(e)=>{
        e.preventDefault();
        let toSend={
            nome:cleanInput(formInputs.nome),
            cpf:cleanInput(formInputs.cpf),
            telefone:cleanInput(formInputs.telefone)
        }
        API.addPessoas(toSend)
        closeModal()
    }
    const cleanInput=(value)=>{
        return value.replace(/[^a-zA-Z0-9 ]/g, '')
    }
    const nameFormat=(value)=>{
        return value.replace(/[0-9]/g, '');
    }
    const cpfFormat=(value)=>{
        return value.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')
    }
    const phoneFormat=(value)=>{
        return value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2")
    }
    const handleChange=(e)=>{
        switch(e.target.name){
            case "nome":
                setForm({...formInputs, nome: nameFormat(cleanInput(e.target.value))})
                break;
            case "cpf":
                setForm({...formInputs, cpf: cpfFormat(cleanInput(e.target.value))})
                break;
            case "telefone":
                setForm({...formInputs, telefone: phoneFormat(cleanInput(e.target.value))})
                break;
            default:
                break;
        }

    }
    const nome=formInputs.nome
    const cpf=formInputs.cpf
    const tel=formInputs.telefone
    return(
        <section className={style.modal}>
                <h2 className={style.addUser_title}>Adicionar Pessoa</h2>
               <Button
                    action={handleClose}
                    style={style.addUser_button_close}
               >
                    <img src={close} alt="close-button" />
               </Button>
            <form action="" className={style.addUser_form}>
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" value={nome} placeholder="Nome Sobrenome" onChange={handleChange}/>
                <label htmlFor="">CPF:</label>
                <input type="" name="cpf" value={cpf} placeholder="xxx.xxx.xxx-xx" onChange={handleChange}/>
                <label htmlFor="">Celular</label>
                <input type="tel" name="telefone" value={tel} pattern="" placeholder="(xx) xxxxx-xxxx" onChange={handleChange}/>
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
            <section className={style.modal_container}>
                <AddCard closeModal={closeModal}/>
            </section>
        </>
    )
}

export default AddUser