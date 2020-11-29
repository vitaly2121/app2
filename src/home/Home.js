import React  from 'react';
import {useEffect,useState} from 'react';
import './style/homeStyle.css';

function Home(){
    document.title = 'Home';
    let inputToDo = React.createRef();
    let toDoList = [];
    let todoId = [0];
    if(localStorage.getItem('todo')){
        toDoList = JSON.parse(localStorage.getItem('todo'));
    }
    if(localStorage.getItem('todoId')){
        todoId = JSON.parse(localStorage.getItem('todoId'));
    }
    const [todo,setState] = useState(toDoList);

    function toDo(){
        if(localStorage.getItem('todo')){
            toDoList = JSON.parse(localStorage.getItem('todo'));
            toDoList.push({cel: inputToDo.current.value});
            localStorage.setItem('todo',JSON.stringify(toDoList));
            setState(toDoList);
        }else{
            localStorage.setItem('todo',JSON.stringify([{cel:inputToDo.current.value}]));
            toDoList = JSON.parse(localStorage.getItem('todo'));
            setState(toDoList);
        }
    }

    function deleteDiv(e){
      let id = e.target.parentElement.id;
      toDoList = JSON.parse(localStorage.getItem('todo'));
      toDoList.splice(id,1);
      localStorage.setItem('todo',JSON.stringify(toDoList));
      setState(toDoList);
    }
    return(
    <div className = 'home' id = 'home'>
        <input type = 'text' placeholder='Введите цель....'  id='inputToDo' ref = {inputToDo}/>
        <button onClick ={toDo}>Задать</button>
        <div className='toDoWrapper' id='toDoWrapper'>
            {todo.map((e,index)=>{
                return(
                    <div className='toDo' id={index} key={index}>
                        {e.cel}
                            <button className='delete' onClick={deleteDiv}>X</button>
                    </div>
                )
            }
            )}
        </div>
    </div>   
   )
}
export default Home;