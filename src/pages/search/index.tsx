import dayjs from 'dayjs';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import CustomButton from '../../Core/Components/NavBar/customButton';
import { MakeRequest } from '../../Core/utils/makeRequest/makeRequest';
import { ProductResponse } from '../../Core/utils/productResponse/productResponse';
import './styles.scss';

const Search = () => {

    const [productResponse, setProductResponse] = useState<ProductResponse>();
    const [input, setInput] = useState<string>('');

    const HandleRequest = () => {
        MakeRequest({userName: input}).then(response => setProductResponse(response.data));
        console.log(productResponse);
    }
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <div className="search-container">
                <h1 className="search-title">
                    Encontre um perfil Github
            </h1>
                <input className="search-textbox" placeholder="Usuário Github" onChange={handleOnChange} value={input}></input>
                <div className="search-button" onClick={HandleRequest} >
                    <CustomButton text="Encontrar" />
                </div>
            </div>
            <div>
                {productResponse ?
                    <div className="result-container">
                        <div className="col-3">
                            <img src={productResponse.avatar_url} alt="foto" className="result-image" />
                            <a href={productResponse.html_url} className="result-link" >
                                <div className="result-button">
                                    <CustomButton text="Ver perfil" />
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="result-row">
                                <div className="result-card card-text">{`Repositorios publicos: ${productResponse.public_repos}`}</div>
                                <div className="result-card card-text">{`Seguidores: ${productResponse.followers}`}</div>
                                <div className="result-card card-text">{`Seguindo: ${productResponse.following}`}</div>
                            </div>
                            <div className="result-card result-text">
                                <div className="result-card-title">Informações</div>
                                <div className="text-border">
                                    <div className="text-border-title">Empresa:</div>
                                    <div className="text-border-content">{productResponse.company ? productResponse.company : `Não possui`}</div>
                                </div>
                                <div className="text-border">
                                    <div className="text-border-title">Website/Blog:</div>
                                    <div className="text-border-content">{productResponse.blog ? productResponse.blog : `Não possui`}</div>
                                </div>
                                <div className="text-border">
                                    <div className="text-border-title">Localidade:</div>
                                    <div className="text-border-content">{productResponse.location ? productResponse.location : `Não informado`}</div>
                                </div>
                                <div className="text-border">
                                    <div className="text-border-title">Membro desde:</div>
                                    <div className="text-border-content">{dayjs(productResponse.created_at).format('DD/MM/YYYY')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <h1> nada </h1>}
            </div>
        </div>
    );
}

export default Search;