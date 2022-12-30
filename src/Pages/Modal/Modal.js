import React, { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import { url } from "../../Utilities/Utilities";
import { toast } from "react-hot-toast";

const Modal = ({ modal, setModal }) => {
  const { setRefetch, refetch } = useContext(AuthContext);
  const [task, setTask] = useState("");
  const handleUpdateTask = (event) => {
    event.preventDefault();
    // const form = event.target;
    const update = task;

    fetch(`${url}/update-task/?id=${modal._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ update }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your Task Update Successfully.")
        setRefetch(!refetch);
        console.log(data);
      });

    setModal("");
    setRefetch(!refetch);
  };

  return (
    <div>
      <input type="checkbox" id="todo-list" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="todo-list"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update Your Task</h3>
          <div className="py-4">
            <form onSubmit={handleUpdateTask}>
              <input
                type={"text"}
                className="input w-full shadow-lg"
                name="update_task"
                defaultValue={modal.task}
                onChange={(e) => setTask(e.target.value)}
                required
              ></input>
              <p className="text-right">
                <input
                  type={"submit"}
                  className="btn mt-5"
                  value="Update Task"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
