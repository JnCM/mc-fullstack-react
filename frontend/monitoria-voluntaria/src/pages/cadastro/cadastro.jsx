import React from 'react';
import './cadastro.css';
import './header.css';
import './forms.css';
import logoComp4 from '../../assets/images/logoComp4.svg';
import back from '../../assets/images/icons/back.svg';
import warning from '../../assets/images/icons/warning.svg';
import add from './script_cadastro';

const Cadastro = () => {
    var listaDisciplinas = ["Programação", "Matemática Discreta", "Introdução à Ciência da Computação", "Física I", "Cálculo Diferencial e Integral I", "Algoritmos e Estrutura de Dados I", "Introdução aos Sistemas Lógicos Digitais", "Inglês I", "Geometria Analítica e Álgebra Linear", "Cálculo Diferencial e Integral II", "Algoritmos e Estrutura de Dados II", "Organização de Computadores I", "Física III", "Laboratório de Física Elétrica", "Iniciação à Estatística", "Cálculo Diferencial e Integral III", "Banco de Dados", "Programação Orientada a Objetos", "Projeto e Análise de Algoritmos", "Teoria e Modelo de Grafos", "Organização de Computadores II", "Português Instrumental I", "Teoria Geral da Administração", "Empreendedorismo e Inovação I", "Gestão da Diversidade nas Organizações", "Fundamentos da Teoria da Computação", "Engenharia de Software I", "Sistemas Operacionais", "Redes de Computadores", "Cálculo Numérico", "Economia I", "Pesquisa Operacional I", "Engenharia de Software II", "Linguagens de Programação", "Sistemas Embarcados", "Atividades Complementares II", "Projeto de Sistemas para Web", "Sistemas Distribuídos e Paralelos", "Compiladores", "Projeto Orientado em Computação I", "Matemática Financeira", "Computadores e Sociedade", "Projeto Orientado em Computação II"];
    var listaHtmls = [];
    listaDisciplinas.sort((a,b) => {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    });
    for (let index = 0; index < listaDisciplinas.length; index++) {
        listaHtmls.push(
            <div key={index}>
                <input type="checkbox" id={index.toString()} name={index.toString()}/>
                <label htmlFor={index.toString()}>
                    {listaDisciplinas[index]}
                </label>
            </div>
        );
    }
    return ( 
        <div className="container2">
            <header className="page-header">
                <div className="top-bar-container">
                    <a href="/">
                        <img className="icon-voltar" src={back} alt="Voltar"/>
                    </a>
                    <img src={logoComp4} alt="CompApp"/>
                </div>
                <div className="header-content">
                    <strong>Cadastre-se e ajude um estudante: </strong>
                    <p>
                        CompApp é uma rede de suporte educacional construída por estudantes para estudantes.
                        <br></br>
                        Você pode contribuir com dicas, monitorias e materiais que lhe foram utéis em qualquer disciplina.
                    </p>
                </div>
            </header>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <div className="input-block">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="avatar">Link da sua foto <small>(comece com https://)</small></label>
                        <input type="url" name="avatar" id="avatar"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="textarea-block">
                        <label htmlFor="bio">Biografia</label>
                        <textarea name="bio" id="bio"></textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Sobre a monitoria</legend>
                    <div className="select-block">
                        <label htmlFor="subject">Matérias</label>
                        <div className="checkbox-box">
                            <div className="checkbox">
                                <div>
                                    <input type="checkbox" id="selecionar_todos" name="selecionar_todos"/>
                                    <label htmlFor="selecionar_todos" style={{"fontWeight": "bold"}}>
                                        Selecionar Todas Disciplinas
                                    </label>
                                </div>
                                <div></div>
                                {listaHtmls}
                            </div>
                        </div>
                    </div>
                    <div className="select-block">
                        <label htmlFor="disponibilidade_tipo">
                            Tipo de disponibilidade:
                            <small>(Presencial/online)</small>
                        </label>
                        <select name="disponibilidade" id="disponibilidade">
                            <option value="">Selecione</option>
                            <option value="Presencial">Presencial</option>
                            <option value="Online">Online</option>
                            <option value="Presencial/Online">Presencial/Online</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset id="schedule-items">
                    <legend id="legend">Horários disponíveis
                        <button id="add-time" onClick={add()}>+ Novo Horário</button>
                    </legend>
                    <div className="schedule-item">
                        <div className="select-block">
                            <label htmlFor="weekday0">Dia da semana</label>
                            <select name="weekday0" id="weekday0">
                                <option value="">Selecione</option>
                                <option value="Domingo">Domingo</option>
                                <option value="Segunda">Segunda</option>
                                <option value="Terça">Terça</option>
                                <option value="Quarta">Quarta</option>
                                <option value="Quinta">Quinta</option>
                                <option value="Sexta">Sexta</option>
                                <option value="Sábado">Sábado</option>
                            </select>
                        </div>
                        <div className="input-block">
                            <label htmlFor="time_from0">Das </label>
                            <input type="time" name="time_from0" id="time_from0"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="time_to0"> até </label>
                            <input type="time" name="time_to0" id="time_to0"/>
                        </div>
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warning} alt="Aviso importante"/>
                        Importante! <br></br>
                        Preencha todos os dados.
                    </p>
                    <button type="button" id="botao_salvar">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default Cadastro;