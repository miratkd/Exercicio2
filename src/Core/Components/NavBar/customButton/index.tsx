import React from 'react';
import './styles.scss';


type Props = {
    text : string;
}

const CustomButton = ({text}: Props) => {

    return(
        <div className="content-button">
            {text}
        </div>
    );
}

export default CustomButton;