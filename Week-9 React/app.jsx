import {useState} from "react";
import "./App.css";
require

export default function App(){
  const [count, setCount] = useState(0);// [1, 2]

 
  const count1 = 0;
  count1 = count1 + 1;
  
function onClickHandler (){
    count = count + 1;
    setCount(count + 1);

 }

return(
    <div>
        <button id="btn" onclick={onclickHandler}>
         counter {count}
        </button>
    </div>
 );
}

function Button(props){
    return <button onClick={props.onClickHandler}>Counter{count}</button>;
}

import {useState} from "react";
import "./App.css";

export default function App(){
    //useRef, react-hook-forms,
    //state variables

       const [todos, setTodos]= useState([{
        title : "go to gym",
        description : "hit the gym regularly",
        done : false
    }]);

function addTodo(){
    let newArray = [];
     for (let i = 0; i < todos.length; i++){
        newArray.push(todos[i]);
     }
    newArray.push({
        title : "Eat food",
        description : "eat food properly",
        done: true

    });
    setTodos(newArray);
    }

    return(
      <div> 
        <input id="title" type="text" placeholder="Title"></input>
        <input id="Description" type="text" placeholder="Description"></input>
        <br />
        <button onClick={addTodo} > addtodo </button> 
        <br />
        {todos.map((todo)=>(
        <Todo
         title = {todos[0].title}
         description= {todos[0].description}
         done= {todos[0].done}
         />
        ))}
      </div>
    );

}

function Todo(props){
    return(
        <div>
            <h1>(props.title)</h1>
            <h2>(props.description)</h2>
            <h1>(props.done ? "Task is done" : "Task is not done")</h1>
        </div>
    )
}