import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import {
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { handleDelete, url } from "../../Utilities/Utilities";
import AddComment from "../AddComment/AddComment";

const FinishedTask = () => {
  const { setRefetch, finishedTask, setFinishedTask, refetch, user } =
    useContext(AuthContext);
  const [modal, setModal] = useState("");

  useEffect(() => {
    fetch(`${url}/get-complete-task/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFinishedTask(data));
  }, [refetch]);

  const handleIncomplete = (id) => {
    fetch(`${url}/make-incomplete/?id=${id}`, {
      method: "put",
    })
      .then((res) => res.json())
      .then((data) => {
        setRefetch(!refetch);
        console.log(data);
      });
  };

  const handleDeleteTask = (id) => {
    handleDelete(id);
    setRefetch(!refetch);
  };

  if (finishedTask < 1) {
    return (
      <div>
        <p className="text-3xl font-semibold text-center my-12">
          Sorry, No task finish yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-full mx-3 md:w-1/2 lg:w-2/5 border shadow-md rounded my-10 p-5">
        {finishedTask?.map((task) => (
          <div
            key={task._id}
            className={`border-b-2 border-indigo-500 py-2 flex justify-between`}
          >
            <div className="flex items-center">
              <p className="pr-2">
                <AiOutlineCheckSquare
                  className="text-blue-600"
                  onClick={() => handleIncomplete(task._id)}
                  title="Make inComplete"
                />
              </p>
              {task.imgUrl && (
                <img src={task.imgUrl} className="h-12 w-8 rounded mr-2" alt="" />
              )}
              <p>{task.task}</p>
            </div>
            <div className="flex items-center">
              <p className="hover:shadow-xl mr-3">
                {task.comment ? (
                  <span className="border border-sky-500 px-2 py-1 rounded">
                    {task.comment}
                  </span>
                ) : (
                  <label htmlFor="my-modal-3" className="btn btn-sm">
                    <AiOutlineComment
                      className="hover:shadow-xl"
                      onClick={() => setModal(task)}
                      title="Add Comment"
                    />
                  </label>
                )}
              </p>
              <p className="hover:shadow-xl">
                <button className="btn btn-sm">
                  <AiOutlineDelete
                    className=" text-xl"
                    onClick={() => handleDeleteTask(task._id)}
                    title="Delete Your Task"
                  />
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
      {modal && <AddComment modal={modal} setModal={setModal} />}
    </div>
  );
};

export default FinishedTask;
