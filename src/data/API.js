import data from '../data/pessoas.json'

class pessoasAPI{
    constructor(data){
        this.data=data;
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
    addPessas=(newPessoa)=>{
        newPessoa.id=this.data.length+1
        newPessoa.ativo=true
        this.data.push(newPessoa)
    }
}

const API = new pessoasAPI(data);
export default API;