
import data from '../data/pessoas.json'

class userAPI{
    constructor(nome,cpf,telefone,ativo,id){
        this.nome=nome,
        this.cpf=cpf,
        this.telefone=telefone,
        this.ativo=ativo,
        this.id=id
    }
    setName=(nome)=>{
        this.nome=nome
    }
    setCPF=(cpf)=>{
        this.cpf=cpf
    }
    setTelefone=(telefone)=>{
        this.telefone=telefone
    }
    setAtivo=(ativo)=>{
        this.ativo=ativo
    }
}

class pessoasAPI{
    constructor(data){
        const datalist=data.map((user)=>{
            return new userAPI(user.nome,user.cpf,user.telefone,user.ativo,user.id)
        })
        this.data=datalist;
    }
    getPessoas=()=>{
        return this.data;
    }
    getPessoasByID=(id)=>{
        this.data.map((pessoa)=>{
            if(pessoa.id==id){
                return pessoa
            }else{
                return "Nenum resultado encontrado para a consulta";
            }
        })
    }
    getTotalOfPessoas=()=>{
        return this.data.length
    }
    addPessoas=(newPessoa)=>{
        newPessoa.id=this.data.length+1
        newPessoa.ativo=true
        this.data.push(newPessoa)
    }
}

const API = new pessoasAPI(data);
export default API;