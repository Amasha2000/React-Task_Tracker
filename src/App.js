import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

const App = () => {

  const [tasks, setTasks] = useState(
    [
      {
        id:1,
        text:'Doctors Appoinment',
        day:'Feb 5th at 2.30pm',
        reminder:true
      },
      {
        id:2,
        text:'Meeting at School',
        day:'Feb 6th at 1.30pm',
        reminder:true
      },
      {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2.30pm',
        reminder:false
      }
    ]
  );
  

  // const name='Mary';
  // const x=true;

  return (
    <div className='container'>
      {/* <h1>Hello From React</h1>
      <h2>Hi {x ? 'Yes':'No'}</h2> */}
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App