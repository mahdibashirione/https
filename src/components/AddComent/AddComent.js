import axios from "axios";
import { useState } from "react";

const AddComent = ({ addNewComentHandler }) => {

  const [newComent, setNewComent] = useState({
    name: "",
    email: "",
    body: "",
  })

  const changeHandler = (e) => {
    setNewComent({ ...newComent, [e.target.name]: e.target.value })
  }

  const postComentHandler = (coment) => {
    axios.post("http://localhost:3001/comments", coment)
      .then(res => axios.get("http://localhost:3001/comments"))
      .then(res => addNewComentHandler(res.data))
    setNewComent({
      name: "",
      email: "",
      body: "",
    })
  }

  return (
    <section className="w-full mt-4">
      <div className="container max-w-[600px] md:rounded-lg p-4 bg-purple-500 flex items-center justify-center">
        <div>
          <div className="flex flex-col items-start gap-y-2">
            <label for="name" className="text-white font-sans">Name</label>
            <input value={newComent.name} onChange={changeHandler} id="name" type={"text"} name="name" className="outline-none p-2 rounded-lg border-2 focus:border-blue-500" />
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-2">
            <label for="email" className="text-white font-sans">Email</label>
            <input value={newComent.email} onChange={changeHandler} id="email" type={"email"} name="email" className="outline-none p-2 rounded-lg border-2 focus:border-blue-500" />
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-2">
            <label for="text" className="text-white font-sans">Text</label>
            <textarea value={newComent.body} onChange={changeHandler} id="text" type={"textarea"} name="body" className="outline-none p-2 rounded-lg border-2 focus:border-blue-500" />
          </div>
          <button onClick={() => postComentHandler(newComent)} className="w-full text-white bg-black rounded-lg mt-4 py-4">Add Coment</button>
        </div>
      </div>
    </section>
  );
}

export default AddComent;