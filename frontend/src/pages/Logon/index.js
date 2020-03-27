import React, {useState}from './../../../node_modules/react';
import './styles.css';
import '../../global.css';
import heroesImg  from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import {FiLogIn} from './../../../node_modules/react-icons/fi';
import {Link, useHistory} from './../../../node_modules/react-router-dom';
import api from '../../services/api';

export default function Logon(){
    const history = useHistory()
    const [id, setId] = useState('');

    async function handleLogin(e){

        e.preventDefault();

        try{
            const response = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(error){
            alert("Erro no login, tente novamente.")
        }

    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça o login</h1>
                    <input placeholder="sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                    <br/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}