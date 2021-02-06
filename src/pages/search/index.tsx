import React from 'react';
import CustomButton from '../../Core/Components/NavBar/customButton';
import './styles.scss';

const Search = () => {
    return(
        <div className="search-container">
            <h1 className="search-title">
                Encontre um perfil Github
            </h1>
            <input className="search-textbox" placeholder="Usuário Github" ></input>
            <div className="search-button" >
                <CustomButton text="Encontrar"/>
            </div>
        </div>
    );
}

export default Search;