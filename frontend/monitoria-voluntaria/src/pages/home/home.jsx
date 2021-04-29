import React from 'react';
import './home.css';
import landing from '../../assets/images/landing.svg';
import logoComp4 from '../../assets/images/logoComp4.svg';
import book from '../../assets/images/icons/book.svg';
import monitoria3 from '../../assets/images/icons/monitoria3.svg';

const Home = () => {
    return (
        <div className="container">
            <div id="teste" className="logo-container">
                <img className="logoComp" src={logoComp4} alt="Comp App"/>
                <h2>Plataforma de compartilhamento entre alunos de Ciência da Computação da UFV-CAF </h2>
            </div>

            <img className="hero-image" src={landing} alt="Plataforma de Compartilhamento de Conhecimento"/>
            <div className="page-landing-links">
                <div className="buttons-container">
                    <a className="material" href="/materiais">
                        <img className="button-material" src={book} alt="material"/>
                        Materiais
                    </a>
                    <a className="monitoria" href="/monitores">
                        <img className="button-monitoria" src={monitoria3} alt="monitoria"/>
                        Monitoria
                    </a>
                </div>
                <a className="cadastro" href="/cadastro">Cadastre-se</a>
            </div>
        </div>
    );
}

export default Home;