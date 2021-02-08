import axios from "axios";



type Props = {
    userName: string
}

export const MakeRequest = ({userName}: Props) => {

    return(
        axios(`https://api.github.com/users/${userName}`)
    )
} 