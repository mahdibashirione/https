const Coment = ({ coment, selectComent }) => {
  return (
    <article id={coment._id} onClick={selectComent} className="bg-purple-500 max-w-[200px] min-w-[200px] overflow-hidden max-h-[100px] min-h-[100px] text-white font-sans p-4 flex flex-col items-start gap-y-3 rounded-lg cursor-pointer select-none">
      <span className="text-cut">{coment.user.name}</span>
      <p className="text-cut">{coment.user.email}</p>
    </article>
  );
}

export default Coment;