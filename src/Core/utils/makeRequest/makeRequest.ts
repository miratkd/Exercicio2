import axios from "axios";

/*type RequestParams = {
    userName?: string;
    method?: Method;
    data?: object;
    params?: object;
}*/

//const url = 'https://api.github.com/users/miratkd';

export const MakeRequest = () => {

    return(
        axios('https://api.github.com/users/miratkd')
    )
} 