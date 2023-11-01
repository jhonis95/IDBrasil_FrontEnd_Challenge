import Button from "./button"
import * as style from "../styles/addUser.module.css"
import * as home from "../styles/home.module.css"
import * as search from "../styles/search.module.css"
import plus from '../assets/PlusBlack.svg'
import close from '../assets/Close.svg'
import check from '../assets/check.svg'
import API from '../data/API'
import {useState } from "react"
import atention from '../assets/atention.svg'
import { useNavigate } from "react-router-dom";

function CardStatus({setStatusModal,setUpdateStatus,user}){
    const status=user.ativo?'Desabilitar':'Habilitar'

    const handleUserStatus=(e)=>{
        e.preventDefault();
        setUpdateStatus(false)
        setStatusModal()
    }
    const handleChangeStatus=(e)=>{
        e.preventDefault();
        setUpdateStatus(true)
        setStatusModal()
    }
    return(
        <>
            <img src={atention} alt="icon" />
            <p style={{color: 'rgba(255, 255, 255, 0.70)' }} className={search.search_list_text}>Você tem certeza que deseja {status} a Pessoa</p>
            <div style={{ width:'100%',display:'flex',justifyContent:'space-evenly', alignItems:'center'}}>
                <Button
                    style={style.modal_button}
                    action={handleUserStatus} 
                >Não, Sair</Button>
                <Button
                    style={home.home_button_add}
                    action={handleChangeStatus}
                >{status}</Button>
            </div>
        </>
    )
}

function Card({closeModal, title, user, setStatusModal, userStatusUpdate, isCardStatus, setUpdateStatus}){
    const navigate=useNavigate()

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
        .replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2").replace(/ /g, '')
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
        if(toSend.nome===''||toSend.cpf===''||toSend.telefone===''){
            return window.alert(`complete todo o formulario para adicionar`);
        }
        API.addPessoas(toSend)
        navigate("/success")
    }
    const handleUserStatus=(e)=>{
        e.preventDefault();
        setStatusModal(true)
    }
    const handleUserUpdate=(e)=>{
        e.preventDefault();
        userStatusUpdate?(
            user.setName(cleanInput(formInputs.nome)),
            user.setCPF(cleanInput(formInputs.cpf)),
            user.setTelefone(cleanInput(formInputs.telefone)),
            user.setAtivo(!user.ativo)
        ):(
            user.setName(cleanInput(formInputs.nome)),
            user.setCPF(cleanInput(formInputs.cpf)),
            user.setTelefone(cleanInput(formInputs.telefone))
        )
        navigate("/success")
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
            {
                isCardStatus?<CardStatus 
                                setStatusModal={()=>{setStatusModal(false)}} 
                                user={user}
                                setUpdateStatus={setUpdateStatus}
                             />:(
                                <>
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
                                        <input maxLength="15"  name="telefone" value={tel} pattern="" placeholder="(xx) xxxxx-xxxx" onChange={handleChange}/>
                                    </form>
                                    <div style={{width:'100%', display:'flex',justifyContent:'space-evenly', alignItems:'center'}}>
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
                                                        action={handleUserStatus}
                                                    >
                                                            Botão para desativar ou ativar pessoa
                                                    </Button>
                                                    <Button
                                                        action={handleUserUpdate}
                                                    >
                                                            <img src={check} alt="check-icon" />
                                                    </Button>
                                                </>
                                            )
                                        }
                                    </div>
                                </>
                            )
            }
            
        </section>
    )
}

function Modal({closeModal,children,user}){
    const [isCardStatus,setCardStatus]=useState(false)
    const [isStatusUpdated,setUpdateStatus]=useState(false);
    return(
        <>
            <section className={style.modal_container}>
                { 
                    // isCardStatus?<CardStatus 
                    //                 setStatusModal={()=>{setCardStatus(false)}} 
                    //                 user={user}
                    //                 setUpdateStatus={setUpdateStatus}
                    //              />:
                    //              <Card 
                    //                 userStatusUpdate={isStatusUpdated}
                    //                 user={user} 
                    //                 title={children} 
                    //                 closeModal={closeModal}
                    //                 setStatusModal={()=>{setCardStatus(true)}}
                    //              />
                }
                <Card 
                    isCardStatus={isCardStatus}
                    userStatusUpdate={isStatusUpdated}
                    user={user} 
                    title={children} 
                    closeModal={closeModal}
                    setStatusModal={setCardStatus}
                    setUpdateStatus={setUpdateStatus}
                 />
            </section>
        </>
    )
}

export default Modal