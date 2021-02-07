import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../Core/Components/NavBar/customButton';
import { MakeRequest } from '../../Core/utils/makeRequest/makeRequest';
import { ProductResponse } from '../../Core/utils/productResponse/productResponse';
import './styles.scss';

const Search = () => {

    const [productResponse, setProductResponse] = useState<ProductResponse>();

    const HandleRequest = () => {
        MakeRequest().then(response => setProductResponse(response.data));
        console.log(productResponse);
    }

    return (
        <div>
            <div className="search-container">
                <h1 className="search-title">
                    Encontre um perfil Github
            </h1>
                <input className="search-textbox" placeholder="Usuário Github" ></input>
                <div className="search-button" onClick={HandleRequest} >
                    <CustomButton text="Encontrar" />
                </div>
            </div>
            <div>
                {productResponse ?
                 <div className="result-container">
                     <div className="col-3">
                        <img src={productResponse.avatar_url} alt="foto" className="result-image"/> 
                        <Link to="" className="result-link" >
                            <div className="result-button">
                                <CustomButton text="Ver perfil"/>
                            </div>
                        </Link>
                     </div>
                 </div> 

                 : 

                 <h1> nada </h1>}
            </div>
        </div>
    );
}

export default Search;