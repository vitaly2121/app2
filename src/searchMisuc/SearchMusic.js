import React, {useState} from 'react';
import './style/searchMusicStyle.css';

function SearchMusic(){
    document.title = 'Search Music';
    let result = [];
    const [state,setState] = useState(result);
    console.log(state);
    let name = React.createRef();
    let limit = React.createRef();
    let media = React.createRef();

    function search(){
        fetch(`https://itunes.apple.com/search?term=${String(name.current.value)}&media=${String(media.current.value)}&limit=${Number(limit.current.value)}`)
        .then(data=>{
            return data.text();
        })
        .then(data=>{
            result = JSON.parse(data);
            setState(result.results);
            console.log(result.results);
        })
    }
    return(
        
        <div className ='SearchMusic'>
            <div className='panel'>
            <input type ='text' ref={name}  placeholder='Введите имя артиста'/>
            <input type ='text' ref={limit}  placeholder='Количество результатов'/>
            <select ref={media} defaultValue='music'>
                <option value='music'>Music</option>
                <option value='musicVideo'>Music Video</option>
                <option value='movie'>Movie</option>
                <option value='all'>All</option>
            </select>
            <button onClick={search}>Click</button>
            <a href="/bestMusic">Best Music</a>
            </div>
            <div className='result'>
            {
                state.map((e,index)=>{
                    let image = e.artworkUrl100;
                    if(e.kind ==='song'){
                        return(//если музыкальный трек
                            <div key={index} className='resultCard'>
                                <button className='heart' 
                                    onClick={()=>{
                                        if(localStorage.getItem('best')){
                                            let localStr =JSON.parse(localStorage.getItem('best'));
                                            localStr.push(e); 
                                            localStorage.setItem('best',JSON.stringify(localStr));
                                            console.log(localStr);
                                        }else{
                                            localStorage.setItem('best',JSON.stringify([e]))
                                        }
                                    }}>
                                </button>
                                <img src={image} alt='' key={e.trackName}></img><br />
                                <p>{e.artistName}</p>
                                <p>{e.trackName}</p>
                                <p>{e.collectionName}</p>
                                <p>{e.trackId}</p>
                                <a href={e.collectionViewUrl||e.trackViewUrl}>Послушать в Music Apple</a>
                            </div>
                        )
                        }else{
                            return(// все остальное
                                <div key={index} className='resultCard'>
                                    <img src={image} alt='' key={e.trackName}></img><br />
                                    <p>{e.artistName}</p>
                                    <p>{e.trackName}</p>
                                    <p>{e.collectionName}</p>
                                    <a href={e.collectionViewUrl||e.trackViewUrl}>Послушать в Music Apple</a>
                                </div>
                            )
                        }
                })
            }
            </div>
        </div>
    )
}

export default SearchMusic;