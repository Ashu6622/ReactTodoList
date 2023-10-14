import './App.css';
import Inputtasks from './components/Inputtasks';
import { useState} from 'react';
function App() {

  const[task,settask] = useState([]);
  const[temp ,settemp] = useState("");

  function writeTask(e){
    settemp(e.target.value);
  }

  function addtask(){
    if(temp!=""){
    settask([...task,temp]);
    settemp("");
    }
  }
  function Deletetask(index){

    console.log(index);
    
    // const x = temp[index];

    const filterdata = task.filter((e,i)=> {
      if(index!=i){
        return e;
      }
    })
    // console.log(filterdata);

    settask(filterdata);
   
  }

  return (
    <div className="App">
      <div className="container">

      <h1>Todo List</h1>

      <div className="tasklists">

        <Inputtasks writeTask={writeTask} addtask={addtask} temp={temp}/>

        <div className="todotasks">

          {task.map((element,index)=>{
            return(
              <div className="list">
              <p key={index}>{element} </p><button onClick={()=>{Deletetask(index)}} className='deletebtn'>Delete</button>
              </div>
            )
          })}

        </div>

      </div>
      </div>
     
    </div>
  );
}

export default App;
