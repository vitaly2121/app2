import React from 'react';

function Registration(){

    function reg(){
        localStorage.setItem('registration','yes');
        window.location.href = '../about';
    }
    return(
        <>
        <div>
            <span>Login: </span>
            <input type = 'text' id = 'login' />
            <br />
            <span>Pass: </span>
            <input type = 'password'  id = 'password' />
            <button onClick={reg}>Registration</button>
        </div>
        </>
    )
}

export default Registration;