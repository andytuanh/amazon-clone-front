import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './Login.css'

import { useStateValue } from './StateProvider'

function Login() {
    const [{ basket }, dispatch] = useStateValue()

    const clearBasket = () => {
        dispatch({
            type: 'REMOVE_ALL'
        })
    }
    return <div className="login">
            <p>Click the button below to clear the basket <DeleteIcon onClick={clearBasket} className="deleteIcon"/></p>
        
        </div>
}

export default Login