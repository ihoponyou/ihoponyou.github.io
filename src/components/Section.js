
function Section({ title, children }) {
  return (
    <div id={title} className="row mb-3">
      <div className="col-md-6">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Section;
