import { useState, useEffect } from "react"
import Coment from "../../components/Coment/Coment"
import axios from "axios"
import FullComent from "../../components/FullComent/FullComent"
import AddComent from "../../components/AddComent/AddComent"


const Discussion = () => {

  const [Coments, setComents] = useState(null)

  const [selectComentId, setSelectComentId] = useState(null)

  useEffect(() => {
    getComents()
  }, [])

  async function getComents() {
    try {
      const { data } = await axios.get("/comments")
      setComents(data)
    } catch (error) {
      console.log(error)
    }
  }

  const selectComentHandler = (id) => {
    setSelectComentId(id)
  }

  return (
    <main className="w-full bg-gray-200 h-screen">
      <section className="w-full">
        <div className="py-4">
          <h2 className="ml-4">All Coments</h2>
          <div className="container mt-4 px-4 gap-x-2 flex justify-start max-w-full overflow-x-scroll">
            {Coments ? Coments.map(c => <Coment key={c.id} coment={c} selectComent={() => selectComentHandler(c.id)} />) : <p>Loading...</p>}
          </div>
        </div>
      </section>
      <section>
        <FullComent setComentId={setSelectComentId} comentId={selectComentId} setComents={setComents} />
      </section>
      <AddComent addNewComentHandler={setComents} />
    </main>
  );
}

export default Discussion;