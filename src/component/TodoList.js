import React from 'react'

function TodoList(props) {
    
    return (
     <>
     <div className="todo_style">
     <i className="fa fa-times" aria-hidden="true"  onClick={() => props.onSelect(props.id) } />
       <li>{props.text} </li>
    </div>  
     </>
    )
}

export default TodoList;