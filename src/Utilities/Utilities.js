import { toast } from "react-hot-toast";

//url
const url = "https://todo-list-server-46ra20.vercel.app"||"http://localhost:5000";

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
       toast.success('Task Added Successfully.')
      }
    });
};

const handleDelete = (id) => {
  fetch(`${url}/delete-task/?id=${id}`, {
    method: "Delete",
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.deleteCount>0){
      toast.success('Task Deleted Successfully.')
    }
  })
};

export { addTask, url, handleDelete };
