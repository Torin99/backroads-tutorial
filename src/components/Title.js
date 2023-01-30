function Title({ left, right }) {
  return (
    <div className="section-title">
      <h2>
        {left} <span>{right}</span>
      </h2>
    </div>
  );
}
export default Title;
