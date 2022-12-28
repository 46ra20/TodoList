import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import { handleDelete, url } from "../../Utilities/Utilities";
import {AiFillEdit,AiOutlineDelete} from "react-icons/ai";
import Modal from "../Modal/Modal";

const MyTask = () => {
  const { user, getTask, setGetTask, setRefetch, refetch } = useContext(AuthContext);
  const [modal, setModal] = useState('')

  useEffect(() => {
    fetch(`${url}/get-task?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setGetTask(data)
      }
      );
  }, [setGetTask, refetch]);

  const handleComplete = (id) =>{
    fetch(`${url}/complete-task/?id=${id}`,{
        method:'put'
    })
    .then(res=>res.json())
    .then(data=>{
        setRefetch(!refetch)

    })
  }

  const handleDeleteTask = (id) =>{
    handleDelete(id);
    setRefetch(!refetch);
  }

  if(getTask<1){
    return(
        <div>
            <p className='text-3xl font-semibold text-center my-12'>Sorry, you have no task.</p>
        </div>
    )
}


  return (
    <div className="flex justify-center items-center">
      <div className="w-full mx-3 md:w-1/2 lg:w-2/5 border shadow-md rounded my-10 p-5">
        {getTask?.map((task) => (
          <div key={task._id} className=' border-b-2 border-indigo-500 py-2 flex justify-between'>
            <div className="flex items-center">
                <p className="pr-2"><input type={'checkbox'} onClick={()=>handleComplete(task._id)} /></p>
                <p>{task.task}</p>
            </div>
            <div className="flex">
                <p className="mr-3 hover:shadow-xl">
                  {/* <button className="btn btn-sm"><AiFillEdit className="text-xl "/></button> */}
                  <label htmlFor="todo-list" className="btn btn-sm" onClick={()=>setModal(task)}><AiFillEdit className="text-xl "/></label>
                </p>
                <p className="hover:shadow-xl">
                  <button className="btn btn-sm">
                  <AiOutlineDelete onClick={()=>{handleDeleteTask(task._id)}} className="text-xl"/>
                  </button>
                </p>
            </div>
          </div>
        ))}
      </div>
      {
        modal && <Modal modal={modal} setModal={setModal}/>
      }
    </div>
  );
};

export default MyTask;
