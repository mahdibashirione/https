import axios from "axios";
import { useEffect, useState } from "react";
import Coment from "../Coment/Coment";

const ComentList = () => {

  const [Coments, setComents] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComents(res.data.slice(0, 10))
      })
      .catch((e) => { console.log(e) })
  }, [])

  return (
    <section className="w-full bg-purple-500">
      <div className="py-4">
        <h2 className="ml-4">All Coments</h2>
        <div className="container mt-4 pl-4 gap-x-2 flex justify-start max-w-full overflow-x-scroll">
          {Coments ? Coments.map(c => <Coment coment={c} />) : "کامنتی وجود ندارد"}
        </div>
      </div>
    </section>
  );
}

export default ComentList;