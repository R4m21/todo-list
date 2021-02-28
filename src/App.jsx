import React, { useState } from 'react';
import List from './List'
import "./App.css"
const App = () => {
    const [insert, setInsert] = useState([]);
    const [ins, setIns] = useState('');
    const catchIn = (event) => setIns(event.target.value);
    const add = () => {setInsert((oldData) => [...oldData, ins]);setIns('');}
    const delt = (id) => setInsert((oldData) => oldData.filter((cVal,index) => index !== id));
    return (
        <>
            <div className="todoList">
                <h1 className="heading">todo list</h1>
                <div className='inputFiled'>
                    <input placeholder='listing your favorite items' value={ins} onChange={catchIn} /><button onClick={add}>+</button>
                </div>
                <ul className='uoList'>
                    {insert.map((val,index)=>{
                        return <List key={index} id={index} value={val} delete={delt}/>
                    })}
                </ul>
            </div>
        </>
    );
}

export default App;