import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../UserContext/UserContext";
import { url } from "../../Utilities/Utilities";

const AddComment = ({modal,setModal}) => {
    const {refetch,setRefetch} = useContext(AuthContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        fetch(`${url}/add-comment/?id=${modal._id}`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({comment})
        })
        .then(res=>res.json())
        .then(data=>{
            setModal('')
            console.log(data)
            toast.success('Your Comment Successfully Added.')
            setRefetch(!refetch)
        }
        )
    }
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
            Add Your Comment.
          </h3>
          <p className="py-4">
            {
                modal.task
            }
          </p>
          <form onSubmit={handleSubmit}>
            <input type={'text'} name='comment' className='w-full input input-md shadow ' placeholder="Your Comment About This Task" required/>
            <p className="text-right"><input type={'submit'} value="Add Comment" className="btn mt-5"/></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
