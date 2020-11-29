import React,{useEffect} from 'react';
import './style/headerStyle.css';

function Header(){
    let progressBar = React.createRef();
    useEffect(()=>{
        window.addEventListener('scroll',progressScroll);
    }
    )

    function progressScroll(){
        let viewHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop;
        let allHeight = document.documentElement.scrollHeight;
        let height = allHeight - viewHeight;
        let result = Math.round( scrollTop/height * 100);
        progressBar.current.style.width = result + '%';
    }

    return(
    <>
        <div className = 'progressWrapper'>
                <div className='progress' ref={progressBar}></div>
            </div>
        <div className='header'>
            <ul className='menu_ul'>
                <a href="/">Home</a>
                <a href="/news">News</a>
                <a href="/about">About</a>
                <a href="/searchMusic">Search Music</a>
            </ul>
        </div>
    </>
    )
}
export default Header;