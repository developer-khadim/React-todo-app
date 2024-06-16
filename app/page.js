"use client";
import React, { useState } from "react";

const Page = () => {
  const [Title, setTitle] = useState("");
  const [Decs, setDecs] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { Title, Decs }]);
    setTitle("");
    setDecs("");
    console.log(maintask);
  };

  const deleteTask = (index) => {
    let copytask = [...maintask];
    copytask.splice(index, 1);
    setmaintask(copytask);
  };

  let rendertask = <h2 className="text-gray-500">No Task Available</h2>;
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center mb-5 py-4 px-6 rounded-md bg-gray-100">
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-semibold text-gray-800">{t.Title}</h5>
            <h1 className="text-lg font-medium text-gray-600">{t.Decs}</h1>
          </div>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded font-bold hover:bg-red-600"
            onClick={() => deleteTask(i)}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <h1 className="text-white bg-black font-bold text-center text-5xl p-5 mb-8 rounded-md">
        Khadim-Todo-List
      </h1>
      <form onSubmit={submitHandler} className="mb-8">
        <input
          type="text"
          className="text-2xl border-zinc-700 border-2 m-8 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Task Here"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-700 border-2 m-8 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Description Here"
          value={Decs}
          onChange={(e) => setDecs(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-2 py-3 font-bold rounded-xl text-2xl m-5 hover:bg-gray-800"
        >
          Add Task
        </button>
      </form>
      <hr className="mb-8" />
      <div className="p-8 bg-white rounded-md shadow-md">
        <ul>{rendertask}</ul>
      </div>
    </div>
  );
};

export default Page;
