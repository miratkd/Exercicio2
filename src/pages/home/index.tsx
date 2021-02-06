import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../Core/Components/NavBar/customButton';
import './styles.scss';

const Home = () => {
    return(
        <div className="home-container">
            <h1 className="content-title">
            Desafio do Capítulo 3,<br/> Bootcamp DevSuperior
            </h1>
            <div className="content-text">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/><br/>
                Favor observar as instruções passadas no capítulo sobre a elaboração<br/> deste projeto. <br/><br/>
                Este design foi adaptado a partir de Ant Design System for Figma, de<br/> Mateusz Wierzbicki: <Link to="antforfigma@gmail.com" className="content-link">antforfigma@gmail.com</Link> <br/>
            </div>
            <Link to="/search" className="content-link">
                <CustomButton text="Começar"/>
            </Link>
        </div>
    );
}

export default Home;