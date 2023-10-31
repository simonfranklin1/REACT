import React from 'react';
import "./MyForm.css"

import { useState } from 'react';

const MyForm = ({userName, userEmail, userBio, userRole}) => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState(userBio);
    const [role, setRole] = useState(userRole);

    const handleName = (e) => {
        setName(e.target.value);       
    }

    // 5 - envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role)

        //validacao
        //envio

        // 7 - limpar o form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }   

  return (
    <div>
        {/* 1 - criação de formulário */}
        {/* 5 - envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Digite o seu nome' 
                onChange={handleName} 
                //6 - controlled inputs
                value={name || ""}
                />
            </div>
            {/* 2 - label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='Digite o seu e-mail' 
                // 4 - simplificando a manipulação
                onChange={(e) => setEmail(e.target.value)} 
                value={email || ""}/>
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" id="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio || ""}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select 
                name="role" 
                onChange={(e) => setRole(e.target.value)}
                value={role}
                >
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>  
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>  
  ) 
}

export default MyForm