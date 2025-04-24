import React,{useState} from 'react';
import api from "../services/api";

function ProdutoForm({onProdutoAdd}){ 
    const [nome, setNome] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        api.post('produtos/', {nome})
        .then(reponse =>{
            onProdutoAdd();
            setNome();
        })
        .catch(error => console.error("Erro ao adicionar produto:", error))
    };
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do produto"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default ProdutoForm;