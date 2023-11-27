import './App.css';
import {useState} from 'react'

function App() {

  let [tobedone, setTodo] = useState([]);
  let [item, setItem] = useState('');

  const changeItem = (e)=>{
    setItem(e.target.value);
  }

  function addTask(){
    setTodo([...tobedone,item]);
    setItem('')
  }

  function taskEdit(index, e){
    let tempArr = [...tobedone];
    for(let i = 0; i < tempArr.length; i++){
      if(i === index){
        tempArr[i] = e.target.value;
      }
    }

    setTodo(tempArr)
    console.log(tobedone);
  }

  function deleteText(index){
    let tempArr = [...tobedone];
    let tempArr2 = [];
    for(let i = 0; i < tempArr.length; i++){
      if(i === index){
        continue;
      }
      else{
        tempArr2.push(tempArr[i])
      }
    }
    setTodo(tempArr2)
  }

  return (
    <>
      <h1>To Do App</h1>
      <div className='mainContainer'>
        <div className='inputBox'>
          <input placeholder='Enter Task' type="text" value={item} onChange={(e)=>changeItem(e)}/>
          <button type='submit' onClick={addTask}>Add Task</button>
        </div>

        <div className='list'>
        {tobedone.map((todo, index)=>{
          return(
            <div key={index}>
              <input type="text" value={todo} onChange={(e)=>taskEdit(index, e)}/>
              <button type='submit' onClick={()=>deleteText(index)}>Delete</button>
            </div>
          )
        })}
        </div>

      </div>
    </>
  )
}

export default App