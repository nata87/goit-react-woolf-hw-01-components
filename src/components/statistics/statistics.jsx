const Statistics = props => {
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">{props.stats.docx}%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">{props.stats.mp3}%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">{props.stats.pdf}%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">{props.stats.mp4}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
