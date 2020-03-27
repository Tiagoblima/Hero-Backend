import React, {useState} from  './../../../node_modules/react';
import './style.css';
import '../../global.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from './../../../node_modules/react-router-dom';
import {FiPower, FiTrash2} from './../../../node_modules/react-icons/fi';
import api from '../../services/api';
import { useEffect } from 'react';

export default function Profile(){

    const [incidents, setIncidents] = useState([])
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    console.log(ongId);
    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization:ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
            headers:{
                    Authorization:ongId,
            }
            });
            setIncidents(incidents.filter(incident =>incident.id !== id))
        }catch(erro){
            alert('Erro ao deleter caso, tente novamente.')
        }
    }
    const history = useHistory();
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vindo, {ongName}</span>
                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident =>

                 <li key={incident.id}>
                    <strong>CASO: </strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>{incident.description}</p>

                    <strong>VALOR: </strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)}</p>

                    <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            )}
            </ul>
        </div>
    );
}