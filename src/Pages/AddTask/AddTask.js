import React, { useContext, useState } from "react";
// import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../UserContext/UserContext";
import { addTask } from "../../Utilities/Utilities";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [loading, setLoading] = useState(false)
  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault();
    const form = event.target;
    const task = form.task.value;
    const productThumbnail = form.task_image.files[0];
    const isComplete = false;
    //upload image in ibb
    const fromData = new FormData();
    fromData.append("image", productThumbnail);

    fetch(
      "https://api.imgbb.com/1/upload?key=845e5be1d5f228d868554f534bfa6afd",
      {
        method: "POST",
        body: fromData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const imgUrl = data?.data?.display_url;
        addTask({ email, task, isComplete, imgUrl });
        form.reset()
        setLoading(false)
      });
  };

  return (
    <div className="flex justify-center items-center">
      {
        loading && <p className="absolute top-20 left-50 text-2xl font-semibold animate-bounce">Please Wait...</p>
      }
      <div className="w-full mx-3 md:w-1/2 lg:w-1/4 border shadow-md rounded my-10 p-5">
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            placeholder="Your Task"
            name="task"
            className="input w-full mb-3 shadow-lg"
            required
          />
          <input
            type={"file"}
            name="task_image"
            className="file-input file-input-bordered w-full mb-3 shadow-lg"
          />
          <input
            type={"submit"}
            value="Add Your Task"
            className="btn shadow w-full"
            disabled={loading}
          />
        </form>
      </div>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default AddTask;
