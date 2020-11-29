import React,{useState} from 'react';
import './style/bestMusicStyle.css';

function BestMusic(){
    let array = [];
    if(localStorage.getItem('best')){
        array = JSON.parse(localStorage.getItem('best'));
    }else{
        alert('LocalStorage пуст')
    }
    const[state,setState] = useState(array);
    console.log(state);
    return(
        <div className='bestMusic'>
            {
            state.map((e)=>{
               return (
                    <div key={e.trackId}>{e.artistName} - {e.trackName}</div>
                );
            })
            }
        </div>
    )
}
export default BestMusic;