import React from  './../../../node_modules/react';
import './style.css';
import '../../global.css';
import logoImg from '../../assets/logo.svg';
import {Link} from './../../../node_modules/react-router-dom';
import {FiArrowLeft} from './../../../node_modules/react-icons/fi';
import { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue]= useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    console.log(ongId);
    async function handleNewIncident(e){
        e.preventDefault();

        const data ={
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data,
            {
                headers: {Authorization: ongId}
            });

            history.push('/profile');
        }catch(err){
            alert("Erro ao cadastro incidente")
        }
    }
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"></img>
                <h1>Cadastrar novo caso</h1>
                <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a 
                    encontrarem os casos da sua ONG.
                </p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="E02041"/>
                    Volter para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="T?tulo do Caso"/>
                <textarea  
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descri??o"/>
                <input 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Valor em Reais"/>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}