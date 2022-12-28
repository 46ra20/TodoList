import React from "react";

const DeleteConfirmation = ({setModal}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Delete Task.
          </h3>
          <p className="py-4">
            Are you sure delete this task?
          </p>
          <button className="btn" onClick={()=>setModal('')}>
            Delete
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default DeleteConfirmation;
