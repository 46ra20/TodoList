import { toast } from "react-toastify";

//url
const url = "http://localhost:5000";

//add task
const addTask = (task) => {
  fetch(`${url}/add-task`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
        toast.success("Your Task Added Successfully.");
      }
    });
};

const handleDelete = (id) => {
  fetch(`${url}/delete-task/?id=${id}`, {
    method: "Delete",
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
};

export { addTask, url, handleDelete };
