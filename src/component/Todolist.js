
import React from 'react';

const Todolist = (props) => {
  // JavaScript logic or hooks (useState, useEffect, etc.)

  return (
    <>
        <ul class="list-group my-3">
            {props.list.map((item)=>{
                return (<span className="box my-1" key={item}><li  class="list-group-item">{item}</li><button type="button" class="btn btn-danger" onClick={() => props.handleDelete(item)}>Delete</button></span>)
            })}
        </ul>
    </>
  );
};

export default Todolist;
