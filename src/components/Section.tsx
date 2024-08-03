
function Section({ title, children }) {
  return (
    <div id={title} className="row mb-3">
        <h1>{title}</h1>
        {children}
    </div>
  );
}

export default Section;
