import Button from "./button"
import * as style from "../styles/addUser.module.css"
import plus from '../assets/PlusBlack.svg'
import close from '../assets/Close.svg'
import check from '../assets/check.svg'
import API from '../data/API'
import {useState } from "react"

function Card({closeModal, title, user}){

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

    const [formInputs,setForm]=useState({
        nome:user.nome,
        cpf:cpfFormat(user.cpf),
        telefone:phoneFormat(user.telefone)
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
    const handleEditUser=(e)=>{
        e.preventDefault();

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
                <h2 className={style.modal_title}>{title}</h2>
               <Button
                    action={handleClose}
                    style={style.modal_button_close}
               >
                    <img src={close} alt="close-button" />
               </Button>
            <form action="" className={style.modal_form}>
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" value={nome} placeholder="Nome Sobrenome" onChange={handleChange}/>
                <label htmlFor="">CPF:</label>
                <input name="cpf" value={cpf} placeholder="xxx.xxx.xxx-xx" onChange={handleChange}/>
                <label htmlFor="">Celular</label>
                <input maxlength="15"  name="telefone" value={tel} pattern="" placeholder="(xx) xxxxx-xxxx" onChange={handleChange}/>
            </form>
            <div style={{width:'100%', display:'flex'}}>
                {
                    title==='Adicionar Pessoa'?
                    <Button
                        style={style.modal_button}
                        action={handleAddUser}
                    >
                            <img src={plus} alt="plus-icon" />
                            Adicionar Pessoas
                    </Button>:(
                        <>
                            <p>Status:</p>
                            <Button
                                style={style.modal_button}
                                action={handleEditUser}
                            >
                                    Botão para desativar ou ativar pessoa
                            </Button>
                            <Button>
                                    <img src={check} alt="check-icon" />
                            </Button>
                        </>
                    )
                }
            </div>
        </section>
    )
}

function Modal({closeModal,children,user}){
    return(
        <>
            <section className={style.modal_container}>
                <Card user={user} title={children} closeModal={closeModal}/>
            </section>
        </>
    )
}

export default Modal