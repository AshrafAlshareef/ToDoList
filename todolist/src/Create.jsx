import React, { useState } from "react";
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add', {task: task})
        .then(location.reload())
        .catch(err => console.log(err))
    }
    return(
        <div className="create_form">
            <input type="text" placeholder="Enter a task" onChange={(e) => setTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>A d d</button>
        </div>
    )
}

export default Create