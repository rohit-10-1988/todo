import { useState } from "react";
import React from 'react';
import Todolist from "./Todolist";

const Form = () => {
  // JavaScript logic or hooks (useState, useEffect, etc.)
    const [data,setdata] = useState("")
    const [list, setlist] = useState([])
    const handleEvent=(e)=>{
        setdata(e.target.value)
        console.log(data)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(data.trim() === "") return;
        console.log('adsads',data)
        setlist([...list, data]);
        setdata("")
    }
    const handleDelete=(deleteindex)=>{
        const updatedlist = list.filter((index)=>{
            return index != deleteindex
        })
        setlist(updatedlist)
    }
  return (
    <>
    <div className='container my-3'>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <h1>ToDo App</h1>
                        <input type="text" class="form-control" id="todo" onChange={handleEvent} value={data} />
                        </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <Todolist list={list} handleDelete={handleDelete} />
            </div>
      </div>
    </div>
    </>
  );
};

export default Form;
