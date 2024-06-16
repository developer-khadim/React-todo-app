"use client"
import React, { useState } from "react";

const Page = () => {
  const [Title, setTitle] = useState("");
  const [Decs, setDecs] = useState("");
  const [maintask , setmaintask] = useState([""]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, {Title,Decs}])
    setTitle("");
    setDecs("");
    console.log(maintask)
  };

  let rendertask = <h2>No Task Available </h2>
  if(maintask.length>0){
    rendertask = maintask.map ((t,i) =>{
      return(
        <li>
        <div className="flex justify-between mb-5 " > 
          <h5 className="text-3xl text-black " >{t.Title}</h5>
          <h1 className="text-xl text-black" >{t.Decs}</h1>
        </div>
        </li>
      );
    });
  }
 
  return (
    <>
      <h1 className="text-white bg-black font-bold text-center text-5xl p-5">
        Khadim-Todo-List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-700 border-2 m-8 py-2 px-4"
          placeholder="Enter Task Here"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-700 border-2 m-8 py-2 px-4"
          placeholder="Enter Description Here"
          value={Decs}
          onChange={(e) => setDecs(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-2 py-3 font-bold rounded-xl text-2xl m-5"
        >
          Add Task
        </button>
      </form>
      <hr />
      <br />
      <div className="p-8 bg-slate-200" >
        <ul>
          {rendertask}
        </ul>
      </div>
    </> 
  );
};

export default Page;
