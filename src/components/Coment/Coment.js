const Coment = ({ coment }) => {
  return (
    <article key={coment.id} className="max-w-[200px] min-w-[200px] overflow-hidden max-h-[100px] min-h-[100px] text-white font-sans p-4 flex flex-col items-start gap-y-3 border border-slate-800 rounded-lg cursor-pointer select-none">
      <span className="whitespace-nowrap cut-word">{coment.name}</span>
      <p className="whitespace-nowrap cut-word">{coment.email}</p>
    </article>
  );
}

export default Coment;