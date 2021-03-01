import React, { useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// Create Todo List by user input

const List = (props) => {
    const [line,setLine] = useState(false);
    const cut = () => setLine(true);
    return (
        <>
            <div className='btnlist' style={{display:props.value!==""?'block':"none"}}>
                <button className='btn' onClick={cut} onDoubleClick={()=>props.delete(props.id)}>{line?<DeleteForeverIcon/>:<ClearIcon/>}</button><li className='list' style={{textDecoration:line?'line-through':'none',color:line?'gray':'none'}}>{props.value}</li>
            </div>
        </>
    );
}
export default List;