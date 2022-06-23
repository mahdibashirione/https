import axios from "axios";
import { useEffect, useState } from "react";

const FullComent = ({ comentId, setComents, setComentId }) => {

  const [coment, setComent] = useState(null)

  useEffect(() => {
    if (comentId) {
      getComent(comentId)
    }
  }, [comentId])

  async function getComent(id) {
    try {
      const { data } = await axios.get(`/comments/${id}`)
      setComent(data)
    } catch (error) { }
  }

  async function deletComentHandler(id) {
    try {
      await axios.delete(`/comments/${id}`)
      const { data } = await axios.get("/comments")
      setComents(data)
      setComent(null)
      setComentId(null)
    } catch (error) {
      console.log(error)
    }
  }

  let comentDtail = <p>plese!selected coment</p>
  if (comentId) comentDtail = <p>Loading...</p>
  if (coment) comentDtail = <div className="max-w-[600px] md:rounded-lg mx-auto bg-purple-400 flex flex-col items-start gap-y-4 font-sans p-4">
    <span>name: {coment.name}</span>
    <span>email: {coment.email}</span>
    <span>coment: {coment.body}</span>
    <button onClick={() => deletComentHandler(coment.id)} className="px-6 py-2 border border-red-500 rounded-lg text-red-500">delete</button>
  </div>

  return comentDtail;
}

export default FullComent;