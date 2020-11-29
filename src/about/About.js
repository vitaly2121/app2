import React from 'react';
import {useEffect} from 'react';
import './style/aboutStyle.css';
function About(){
    document.title = 'About';
    let statusReg = React.createRef();
    let seconds = 5;
    function timerFunc(){
        seconds--;
        statusReg.current.innerHTML='Вы НЕ зарегистрированны. Переадресовываем вас на страницу регистрации.....' + seconds;
    }

    function testReg(){
        if(localStorage.getItem('registration')){
            statusReg.current.innerHTML='Вы зарегистрированны';
        }else{
            let interval = setInterval(timerFunc,1000);
            setTimeout( ()=>{
                interval = clearInterval(interval);
                window.location.href = '../registration';
            },5 * 1000)
        }
    }

    useEffect(()=>{
        testReg();
    }
    )
    return(
    <>
        <div className='about'>
           <p>Это страница About</p>
           <span ref={statusReg}>Вы НЕ зарегистрированны. Переадресовываем вас на страницу регистрации.....5</span>
           {/* <button onClick={clearInt}>Click</button> */}
        </div>
    </>    
    )
}
export default About;